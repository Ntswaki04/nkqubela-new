// app/leave-cv/LeaveCV.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// CV submissions are emailed to this inbox via the visitor's own mail client.
const HR_EMAIL = "xhantilomzis@nkqubela.co.za";

export default function LeaveCV() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `New CV Submission : ${fullName} ${surname}`;
    const body = [
      "Hi Nkqubela HR team,",
      "",
      "Please find my details below. My CV is attached to this email.",
      "",
      `Full Name: ${fullName}`,
      `Surname: ${surname}`,
      `Position Looking For: ${position}`,
      "",
      "Kind regards,",
      `${fullName} ${surname}`,
    ].join("\n");

    const mailto = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the visitor's email client with the details pre-filled so they can
    // attach their CV and send it.
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white";

  const labelClass =
    "block text-xs font-bold mb-3 uppercase tracking-widest text-black dark:text-gray-300";

  return (
    <main
      className="bg-white dark:bg-darkmode mt-24"
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-2xl mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-6 text-center py-16">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30">
                <Icon
                  icon="ic:round-mark-email-read"
                  className="text-5xl text-green-600 dark:text-green-400"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold dark:text-white mb-2">
                  Almost there!
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Your email app should have opened with your details ready to
                  go. Just{" "}
                  <span className="font-semibold dark:text-white">
                    attach your CV
                  </span>{" "}
                  and hit send — that&apos;s it. We&apos;ll be in touch if a
                  suitable opportunity comes up.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mt-4">
                  Nothing happened? Email us directly at{" "}
                  <a
                    href={`mailto:${HR_EMAIL}`}
                    className="font-semibold text-[#072B61] dark:text-blue-400 underline underline-offset-2"
                  >
                    {HR_EMAIL}
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold text-[#072B61] dark:text-blue-400 underline underline-offset-2"
                >
                  Submit another CV
                </button>
                <Link
                  href="/contact/"
                  className="text-sm font-semibold text-gray-500 dark:text-gray-400 underline underline-offset-2"
                >
                  Back to Contact
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold dark:text-white mb-3">
                  Leave Your CV
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                  Fill in a few quick details below. Our
                  HR team will keep it on file for current and future
                  opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={inputClass}
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Surname</label>
                    <input
                      type="text"
                      name="surname"
                      required
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className={inputClass}
                      placeholder="Surname"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Position Looking For</label>
                  <input
                    type="text"
                    name="position"
                    required
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Software Developer"
                  />
                </div>

                <div className="flex items-start gap-3 px-5 py-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40">
                  <Icon
                    icon="ic:round-attach-file"
                    className="text-2xl text-[#072B61] dark:text-blue-400 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    When your email app opens, simply{" "}
                    <span className="font-semibold dark:text-white">
                      attach your CV (PDF)
                    </span>{" "}
                    before sending. No ID copy needed.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 py-4 px-10 font-bold rounded-full text-lg text-white transition-all shadow-lg"
                  style={{ backgroundColor: "#072B61" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#05204a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#072B61";
                  }}
                >
                  <Icon icon="ic:round-send" className="text-xl" />
                  Continue to Email
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
