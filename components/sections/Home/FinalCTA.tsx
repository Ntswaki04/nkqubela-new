"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function FinalCTA() {
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
    <section className="bg-white dark:bg-darkmode py-14 lg:py-16 relative">
      {/* Blending gradient from highlights section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-IcyBreeze dark:from-darklight to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container relative z-10 pt-8 lg:pt-10">
        <div
          className="cta-white-text rounded-22 p-8 sm:p-10 md:p-16 lg:p-24 text-center text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/CTA Services.png')",
          }}
          data-aos="zoom-in"
          data-aos-duration="1400"
          data-aos-easing="ease-out-cubic"
        >
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ElectricAqua/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-8 pointer-events-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white font-bold max-w-3xl mx-auto leading-tight drop-shadow-lg"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Ready to Transform Your Business with Technology?
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
              style={{
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 1px 6px rgba(0,0,0,0.5)",
              }}
            >
              Partner with Nkqubela Technologies for cutting-edge ICT solutions
              tailored to your unique needs.
            </p>
            <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(true);
                  setStatus("idle");
                  setErrorMsg("");
                }}
                className="inline-flex w-full items-center justify-center border-2 border-transparent bg-primary px-10 py-4 font-bold text-white rounded-full hover:bg-[#5b8cf5] transition-colors shadow-xl"
              >
                Get Started Today
              </button>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center border-2 border-white/70 text-white px-10 py-4 font-bold rounded-full hover:bg-white/10 transition-colors"
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
                onClick={() => {
                  setIsOpen(false);
                  setStatus("idle");
                  setErrorMsg("");
                }}
                aria-label="Close form"
              >
                ×
              </button>
            </div>

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
    </section>
  );
}
