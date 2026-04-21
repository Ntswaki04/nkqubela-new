// sections/About/InvestorCTA.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

type Status = "idle" | "loading" | "success" | "error";

export default function InvestorCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:ring-primary/30 focus:border-transparent outline-none transition-all dark:text-white";

  const labelClass =
    "block text-xs font-bold mb-2 uppercase tracking-widest text-gray-500 dark:text-gray-400";

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
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
                Invest in the <span className="text-[#2F73F2]">future</span> of
                ICT
              </h2>

              <p
                className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 1)" }}
              >
                We partner with purpose-driven investors and organisations who
                believe in technology as a force for growth across South Africa
                and beyond. If you&apos;re ready to explore a partnership,
                we&apos;d love to hear from you.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(true);
                    setStatus("idle");
                    setErrorMsg("");
                  }}
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
              onClick={() => {
                setIsOpen(false);
                setStatus("idle");
                setErrorMsg("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors text-2xl leading-none"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Contact Us Today
            </h3>

            {status === "success" ? (
              <div className="space-y-4 rounded-xl border border-green-200 bg-green-50 px-5 py-6 text-center dark:border-green-900 dark:bg-green-950/30">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400">
                  Form successfully submitted
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We&apos;ve received your message and will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setErrorMsg("");
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-[#072B61] px-6 py-3 font-bold text-white transition-colors hover:bg-[#05204a]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={submitForm} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      required
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
                      required
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
                    required
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
                    required
                    className={inputClass}
                    placeholder="How can we help?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    required
                    className={`${inputClass} min-h-[140px] resize-none`}
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 py-3 px-7 font-bold rounded-full text-white bg-[#072B61] hover:bg-[#05204a] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
