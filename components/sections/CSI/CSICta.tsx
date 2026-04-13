// sections/CSI/CSICta.tsx
"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function CSICta() {
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
      <section className="pb-24 bg-white dark:bg-darkmode">
        <div className="container px-4">
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
            style={{
              backgroundImage: 'url("/images/CTA%20csi.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-[#011120]/70 mix-blend-multiply rounded-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-5 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
                  Want to Collaborate on a<br className="hidden md:block" /> CSI
                  Initiative?
                </h2>
                <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
                  Our team is ready to design an impact strategy tailored to the
                  needs of your community.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold shadow-lg text-white text-lg transition-all duration-300 group/cta"
                  style={{ backgroundColor: "#072B61" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#05204a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#072B61")
                  }
                >
                  Contact Us Today
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 transition-transform duration-300 group-hover/cta:translate-x-1">
                    <Icon icon="ic:round-arrow-forward" className="text-lg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                x
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
    </>
  );
}
