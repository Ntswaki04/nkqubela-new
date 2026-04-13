// sections/Contact/ContactForm.tsx
"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const buildMailto = () => {
        const to = 'Info@nkqubela.co.za';
        const fullName = `${firstName} ${lastName}`.trim();
        const body = [
            fullName ? `From: ${fullName}` : '',
            email ? `Reply-to: ${email}` : '',
            '',
            message,
        ]
            .filter((line, i) => i >= 3 || line !== '')
            .join('\n');

        return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const inputClass =
        'w-full px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white';

    const labelClass =
        'block text-xs font-bold mb-3 uppercase tracking-widest text-black dark:text-gray-300';

    return (
        <div id="contact-form" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                <h2 className="text-3xl font-bold dark:text-white">Send Us a Message</h2>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                <form className="space-y-6 max-w-3xl" onSubmit={(e) => e.preventDefault()}>

                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-6">
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
                            className={`${inputClass} min-h-[180px] resize-none`}
                            placeholder="Your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    {/* Submit */}
                    <a
                        href={buildMailto()}
                        className="inline-flex items-center gap-3 py-2.5 px-10 font-bold rounded-full text-sm text-white bg-[#00296D] border border-[#00296D] hover:bg-white hover:text-black transition-all shadow-lg"
                    >
                        <Icon icon="ic:round-send" className="text-base" />
                        Submit Message
                    </a>
                </form>
            </div>
        </div>
    );
}