// sections/Services/ServicesCTA.tsx
"use client";

import { useState } from "react";

export default function ServicesCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:ring-primary/30 focus:border-transparent outline-none transition-all dark:text-white";

  const labelClass =
    "block text-xs font-bold mb-2 uppercase tracking-widest text-gray-500 dark:text-gray-400";

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "Info@nkqubela.co.za";
    const fullName = `${firstName} ${lastName}`.trim();
    const body = [
      fullName ? `From: ${fullName}` : "",
      email ? `Reply-to: ${email}` : "",
      "",
      message,
    ]
      .filter((line, i) => i >= 3 || line !== "")
      .join("\n");

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <section className="py-24">
        <div className="container px-4">
          <div
            className="cta-section-custom relative overflow-hidden rounded-3xl"
            style={{
              backgroundImage: "url('/images/CTA Services.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "6rem 3rem",
            }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-6 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/90 text-xl font-medium">
                  Our team is ready to design an ICT strategy tailored to your
                  business needs.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="bg-primary text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap"
                >
                    {/* Dark shade removed for clear image background */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-6 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                                Need a Custom Solution?
                            </h2>
                            <p className="text-xl font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                Our team is ready to design an ICT strategy tailored to your business needs.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className="bg-[#00296D] text-white border border-[#00296D] hover:bg-white hover:text-black transition-colors px-10 py-2.5 rounded-full font-bold shadow-lg block whitespace-nowrap text-sm"
                            >
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <form className="space-y-5" onSubmit={submitForm}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="How can we help?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  className={`${inputClass} min-h-[140px] resize-none`}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 py-3 px-7 font-bold rounded-full text-white bg-[#072B61] hover:bg-[#05204a] transition-colors"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
