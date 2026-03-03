// sections/Contact/page.tsx
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ContactInfoTable from '@/components/sections/Contact/ContactInfoTable';
import ContactForm from '@/components/sections/Contact/ContactForm';
import ContactMap from '@/components/sections/Contact/ContactMap';

export default function Contact() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });

        // Detect dark mode (class strategy)
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

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
                    <h1
                        className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em] pointer-events-auto"
                        data-aos="fade-up"
                    >
                        CONTACT
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90 pointer-events-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        GROW WITH US
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <section className="py-24 bg-white dark:bg-darkmode">
                <div className="container overflow-hidden">
                    <ContactInfoTable isDark={isDark} />
                    <ContactForm />
                    <ContactMap />
                </div>
            </section>

        </main>
    );
}