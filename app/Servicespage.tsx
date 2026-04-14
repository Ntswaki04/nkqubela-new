// sections/Services/page.tsx
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { pillars } from '@/components/sections/Services/PillarData';
import PillarCard from '@/components/sections/Services/PillarCard';
import StickyLeft from '@/components/sections/Services/StickyLeft';
import ServicesOverview from '@/components/sections/Services/ServicesOverview';
import ServicesCTA from '@/components/sections/Services/ServicesCTA';

export default function Services() {
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
        <main>
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/banner.png" alt="Services" className="video-hero-bg" />
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
                        data-aos="fade-up"
                    >
                        SERVICES
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-medium leading-loose max-w-3xl mx-auto"
                        style={{ color: '#ffffff' }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        WHAT WE DO
                    </p>
                </div>
            </section>

            <ServicesOverview />

            {/* ── SIX PILLARS – JS STICKY SCROLL ── */}
            <section className="bg-white dark:bg-darkmode py-20 relative">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        maxWidth: 1400,
                        margin: '0 auto',
                        padding: '80px 40px 160px',
                        gap: 80,
                    }}
                >
                    {/* JS-driven sticky left panel */}
                    <StickyLeft />

                    {/* Scrolling right pillar feed */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 64 }}>
                        {pillars.map((pillar, i) => (
                            <PillarCard key={pillar.id} pillar={pillar} index={i} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <ServicesCTA />
        </main>
    );
}