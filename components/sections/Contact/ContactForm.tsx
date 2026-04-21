// sections/Contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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

  const inputClass =
    "w-full px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white";

  const labelClass =
    "block text-xs font-bold mb-3 uppercase tracking-widest text-black dark:text-gray-300";

  return (
    <div id="contact-form" data-aos="fade-up" data-aos-delay="100">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
        <h2 className="text-3xl font-bold dark:text-white">
          Send Us a Message
        </h2>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-8 h-[640px] xl:h-[620px]">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30">
              <Icon
                icon="ic:round-check-circle"
                className="text-5xl text-green-600 dark:text-green-400"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-sm">
                Thank you for reaching out. We&apos;ve received your message and
                will get back to you shortly.
              </p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm font-semibold text-[#072B61] dark:text-blue-400 underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="w-full h-full flex flex-col"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="space-y-4 pr-1 flex-1">
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
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 mt-4 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                <Icon
                  icon="ic:round-error-outline"
                  className="text-lg flex-shrink-0"
                />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-3 py-4 px-10 font-bold rounded-full text-lg text-white transition-all shadow-lg mt-6 self-start disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#072B61" }}
              onMouseEnter={(e) => {
                if (status !== "loading")
                  e.currentTarget.style.backgroundColor = "#05204a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#072B61";
              }}
            >
              {status === "loading" ? (
                <>
                  <Icon icon="svg-spinners:ring-resize" className="text-xl" />
                  Sending…
                </>
              ) : (
                <>
                  <Icon icon="ic:round-send" className="text-xl" />
                  Submit Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
