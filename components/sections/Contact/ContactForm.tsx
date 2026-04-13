// sections/Contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const buildMailto = () => {
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

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white";

  const labelClass =
    "block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400";

  return (
    <div className="h-full" data-aos="fade-up" data-aos-delay="100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
        <h2 className="text-3xl font-bold dark:text-white">
          Send Us a Message
        </h2>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-8 h-[640px] xl:h-[620px]">
        <form
          className="w-full h-full flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4 pr-1 flex-1">
            {/* Name row */}
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

            {/* Email */}
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

            {/* Subject */}
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

            {/* Message */}
            <div>
              <label className={labelClass}>Message</label>
              <textarea
                className={`${inputClass} min-h-[120px] xl:min-h-[140px] resize-none`}
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <a
            href={buildMailto()}
            className="inline-flex items-center gap-3 py-4 px-10 font-bold rounded-full text-lg text-white transition-all shadow-lg mt-6 self-start"
            style={{ backgroundColor: "#072B61" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#05204a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#072B61")
            }
          >
            <Icon icon="ic:round-send" className="text-xl" />
            Submit Message
          </a>
        </form>
      </div>
    </div>
  );
}
