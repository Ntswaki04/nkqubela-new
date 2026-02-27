"use client";

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const contactDetails = [
    { icon: 'lucide:map', label: 'Our Office', value: 'Office 1, Palm Square Business Park, Beacon Bay, East London, 5205' },
    { icon: 'lucide:mail', label: 'Email Us', value: 'Info@nkqubela.co.za', href: 'mailto:Info@nkqubela.co.za' },
    { icon: 'lucide:phone', label: 'Call Us', value: '+27 43 050 0821', href: 'tel:+27430500821' },
];

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const buildMailto = () => {
        const to = 'Info@nkqubela.co.za';
        const fullName = `${firstName} ${lastName}`.trim();
        const body = [
            fullName ? `From: ${fullName}` : '',
            email ? `Reply-to: ${email}` : '',
            '',
            message,
        ].filter((line, i) => i >= 3 || line !== '').join('\n');

        return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <main style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero%20bg%20all.png"
                    alt="Contact"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl cursor-default absolute inset-0 flex flex-col justify-center items-center pointer-events-none mt-20">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em] pointer-events-auto" data-aos="fade-up">
                        CONTACT
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90 pointer-events-auto" data-aos="fade-up" data-aos-delay="100">
                        GROW WITH US
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <section className="py-24 bg-white dark:bg-darkmode">
                <div className="container overflow-hidden">

                    {/* ── Contact Info Table ── */}
                    <div data-aos="fade-up" className="mb-20">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                            <h2 className="text-3xl font-bold dark:text-white">Get In Touch</h2>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700">
                            {contactDetails.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-stretch border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
                                    style={{ backgroundColor: hoveredRow === item.label ? (isDark ? 'rgba(255,255,255,0.05)' : '#f8f9fc') : 'transparent' }}
                                    onMouseEnter={() => setHoveredRow(item.label)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                >
                                    {/* Label column */}
                                    <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
                                        <span
                                            className="text-base font-semibold transition-colors duration-200"
                                            style={{
                                                color: hoveredRow === item.label ? (isDark ? '#ffffff' : '#072B61') : undefined,
                                                fontFamily: 'var(--font-dm-sans), sans-serif'
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Value column */}
                                    <div className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10 gap-4">
                                        <div className="space-y-1">
                                            {/* Mobile label */}
                                            <span
                                                className="md:hidden inline-block text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-200"
                                                style={{ color: hoveredRow === item.label ? (isDark ? '#ffffff' : '#072B61') : '#6b7280' }}
                                            >
                                                {item.label}
                                            </span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200 block"
                                                    style={{ color: hoveredRow === item.label ? (isDark ? '#ffffff' : '#072B61') : undefined }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p
                                                    className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200 dark:text-white"
                                                    style={{ color: hoveredRow === item.label ? (isDark ? '#ffffff' : '#072B61') : undefined }}
                                                >
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>

                                        {/* Icon / arrow */}
                                        <div
                                            className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
                                            style={{
                                                backgroundColor: hoveredRow === item.label ? '#072B61' : 'transparent',
                                                color: hoveredRow === item.label ? '#ffffff' : '#9ca3af',
                                                transform: hoveredRow === item.label ? 'scale(1.1)' : 'scale(1)'
                                            }}
                                        >
                                            <Icon icon="ic:round-arrow-forward" className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Contact Form ── */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                            <h2 className="text-3xl font-bold dark:text-white">Send Us a Message</h2>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                            <form className="space-y-6 max-w-3xl" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white"
                                            style={{ '--tw-ring-color': '#072B61' } as React.CSSProperties}
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white"
                                        placeholder="How can we help?"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold mb-3 uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darklight focus:ring-2 focus:border-transparent outline-none transition-all min-h-[180px] dark:text-white resize-none"
                                        placeholder="Your message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <a
                                    href={buildMailto()}
                                    className="inline-flex items-center gap-3 py-4 px-10 font-bold rounded-full text-lg text-white transition-all shadow-lg"
                                    style={{ backgroundColor: '#072B61' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#05204a')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#072B61')}
                                >
                                    <Icon icon="ic:round-send" className="text-xl" />
                                    Submit Message
                                </a>
                            </form>
                        </div>
                    </div>

                    {/* ── Map Section ── */}
                    <div className="pt-24" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                            <h2 className="text-3xl font-bold dark:text-white">Find Us Here</h2>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.756909511243!2d27.93128847652019!3d-32.95742687243458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66c37d9940cd11%3A0x3e7ad94867478ba7!2sNkqubela%20Technologies!5e0!3m2!1sen!2sza!4v1772002466477!5m2!1sen!2sza"
                                    width="100%"
                                    height="500"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Nkqubela Technologies Office Location"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
