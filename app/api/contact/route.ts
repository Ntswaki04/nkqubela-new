import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const missingEnvVars = requiredEnvVars.filter(
      (key) => !process.env[key] || process.env[key]?.trim() === ""
    );

    if (missingEnvVars.length > 0) {
      console.error("Contact form SMTP configuration is incomplete:", missingEnvVars);
      return NextResponse.json(
        {
          error:
            "Contact form email is not configured yet. Please try again later or contact info@nkqubela.co.za directly.",
        },
        { status: 500 }
      );
    }

    const smtpSecureValue = process.env.SMTP_SECURE?.trim().toLowerCase() ?? "";
    const isImplicitTLS = smtpSecureValue === "true" || smtpSecureValue === "1" || smtpSecureValue === "ssl";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      // For Office365 on port 587, use STARTTLS (secure: false). Set SMTP_SECURE=true or ssl for implicit TLS.
      secure: isImplicitTLS,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      replyTo: email,
      to: "info@nkqubela.co.za",
      subject: `[Website Enquiry] ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <table style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:600px;width:100%">
          <tr><td style="padding:24px 0 8px"><h2 style="margin:0;color:#072B61">New Website Enquiry</h2></td></tr>
          <tr><td style="padding:4px 0"><strong>Name:</strong> ${firstName} ${lastName}</td></tr>
          <tr><td style="padding:4px 0"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 0"><strong>Subject:</strong> ${subject}</td></tr>
          <tr><td style="padding:16px 0 4px"><strong>Message:</strong></td></tr>
          <tr><td style="padding:8px 16px;background:#f4f6fa;border-left:4px solid #072B61;white-space:pre-wrap">${message}</td></tr>
          <tr><td style="padding:16px 0 0;font-size:12px;color:#888">Sent from nkqubela.co.za contact form</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
