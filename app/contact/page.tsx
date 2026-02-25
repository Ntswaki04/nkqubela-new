"use client";

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
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
        <main>
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
            <section className="py-24">
                <div className="container overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-10" data-aos="fade-right">
                            <div className="space-y-8">
                                {[
                                    { icon: 'lucide:map', title: 'Our Office', text: 'Office 1, Palm Square Business Park, Beacon Bay, East London, 5205' },
                                    { icon: 'lucide:mail', title: 'Email Us', text: 'Info@nkqubela.co.za' },
                                    { icon: 'lucide:phone', title: 'Call Us', text: '+27 43 050 0821' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-8 items-center border border-gray-100 dark:border-dark_border p-6 rounded-3xl bg-white dark:bg-darklight hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
                                        <div className="bg-primary/10 p-5 rounded-2xl text-primary flex-shrink-0">
                                            <Icon icon={item.icon} className="text-5xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold dark:text-white text-2xl mb-2">{item.title}</h4>
                                            <p className="text-SlateBlueText dark:text-darktext text-lg leading-snug max-w-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div
                            className="bg-white dark:bg-darklight rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 dark:border-dark_border"
                            data-aos="fade-left"
                        >
                            <h3 className="text-3xl font-bold dark:text-white mb-10 border-b border-gray-100 dark:border-gray-800 pb-6">Send Us a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider text-gray-500">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkmode focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider text-gray-500">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkmode focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkmode focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider text-gray-500">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkmode focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                        placeholder="How can we help?"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="pb-4">
                                    <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider text-gray-500">Message</label>
                                    <textarea
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-darkmode focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all min-h-[160px] dark:text-white resize-none"
                                        placeholder="Your message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <a
                                    href={buildMailto()}
                                    className="w-full py-5 px-10 bg-[#003366] text-white font-bold rounded-[1.5rem] text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
                                >
                                    <Icon icon="ic:round-send" className="text-2xl" />
                                    Submit Message
                                </a>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="pb-16 pt-24">
                    <div className="container px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl font-bold dark:text-white">Find Us Here</h2>
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-dark_border" data-aos="zoom-in" data-aos-delay="100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.756909511243!2d27.93128847652019!3d-32.95742687243458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66c37d9940cd11%3A0x3e7ad94867478ba7!2sNkqubela%20Technologies!5e0!3m2!1sen!2sza!4v1772002466477!5m2!1sen!2sza"
                                width="100%"
                                height="550"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Nkqubela Technologies Office Location"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
