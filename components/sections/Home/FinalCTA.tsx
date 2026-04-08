"use client";

import { useState } from "react";
import Link from "next/link";

export default function FinalCTA() {
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
    <section className="bg-white dark:bg-darkmode py-14 lg:py-16 relative">
      {/* Blending gradient from highlights section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-IcyBreeze dark:from-darklight to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container relative z-10 pt-8 lg:pt-10">
        <div
          className="rounded-22 p-8 sm:p-10 md:p-16 lg:p-24 text-center text-slate-900 dark:text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/globe7.png')",
          }}
          data-aos="zoom-in"
          data-aos-duration="1400"
          data-aos-easing="ease-out-cubic"
        >
          <div className="absolute inset-0 bg-slate-950/82 dark:bg-slate-950/92 pointer-events-none"></div>
          <div className="absolute inset-0 bg-IcyBreeze/15 dark:bg-IcyBreeze/8 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ElectricAqua/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-8 pointer-events-auto">
            <h2
              className="text-slate-900 dark:text-slate-900 font-bold max-w-2xl mx-auto leading-tight drop-shadow-lg"
              style={{ textShadow: "0 2px 8px rgba(255,255,255,0.5)" }}
            >
              Ready to Transform Your Business with Technology?
            </h2>
            <p
              className="text-slate-800 dark:text-slate-900 text-xl max-w-xl mx-auto drop-shadow-md"
              style={{ textShadow: "0 1px 6px rgba(255,255,255,0.4)" }}
            >
              Partner with Nkqubela Technologies for cutting-edge ICT solutions
              tailored to your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="bg-white text-primary dark:bg-gray-900 dark:text-white px-10 py-4 font-bold rounded-lg hover:bg-IcyBreeze dark:hover:bg-gray-800 transition-colors shadow-xl"
              >
                Get Started Today
              </button>
              <Link
                href="/services"
                className="border-2 border-slate-900/50 text-slate-900 dark:border-white/50 dark:text-slate-900 px-10 py-4 font-bold rounded-lg hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
              >
                Our Offerings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
          />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white dark:bg-darkmode p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold dark:text-white">
                Send Us a Message
              </h3>
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-darklight"
                onClick={() => setIsOpen(false)}
                aria-label="Close form"
              >
                ×
              </button>
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
    </section>
  );
}
