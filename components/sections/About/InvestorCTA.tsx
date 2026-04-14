// sections/About/InvestorCTA.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function InvestorCTA() {
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
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
        <div className="container">
          <div
            className="relative rounded-[2rem] overflow-hidden px-10 py-20 md:px-20 text-center"
            style={{
              backgroundImage: "url('/images/investment bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8">
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                  Partner with us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Invest in the{" "}
                <span className="text-[#2F73F2]">future</span>{" "}
                of ICT
              </h2>

              <p
                className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 1)" }}
              >
                We partner with purpose-driven investors and organisations who believe in
                technology as a force for growth across South Africa and beyond. If you&apos;re
                ready to explore a partnership, we&apos;d love to hear from you.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-3 px-10 py-2.5 rounded-full font-bold shadow-lg text-white text-sm transition-all duration-300 group/cta bg-[#00296D] border border-[#00296D] hover:bg-white hover:text-black"
                >
                  Get in Touch
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform duration-300 group-hover/cta:translate-x-1">
                    <Icon icon="ic:round-arrow-forward" className="text-base" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white dark:bg-darkmode rounded-2xl shadow-2xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors text-2xl leading-none"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Contact Us Today
            </h3>

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
