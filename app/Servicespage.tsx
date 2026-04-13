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
            {/* ── HERO ── */}
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

            {/* ── OVERVIEW ── */}
            <ServicesOverview />

            {/* ── SIX PILLARS – JS STICKY SCROLL ── */}
            <section className="bg-white dark:bg-darkmode py-20 relative">

                {/* ── MOBILE / TABLET: heading + cards stacked vertically ── */}
                <div className="lg:hidden container px-4 pb-10">
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-darklight border border-gray-200 dark:border-darkborder rounded-full px-4 py-1.5 text-sm font-bold text-primary mb-6 shadow-sm">
                        What We Do
                    </div>
                    <h2 className="text-3xl font-extrabold dark:text-white mb-3" style={{ lineHeight: 1.12 }}>
                        Fresh Perspectives<br />
                        On <span className="text-primary italic">Strategy.</span>
                    </h2>
                    <p className="text-SlateBlueText dark:text-gray-400 leading-relaxed text-base max-w-md mb-10">
                        We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
                    </p>

                    {/* Pillar cards — always visible on mobile, no observer dependency */}
                    <div className="flex flex-col gap-10">
                        {pillars.map((pillar, i) => (
                            <PillarCard key={`mobile-${pillar.id}`} pillar={pillar} index={i} isDark={isDark} forceVisible />
                        ))}
                    </div>
                </div>

                {/* ── DESKTOP: sticky left panel + scrolling right feed ── */}
                <div
                    className="hidden lg:flex"
                    style={{
                        alignItems: 'flex-start',
                        maxWidth: 1400,
                        margin: '0 auto',
                        padding: '80px 40px 160px',
                        gap: 80,
                    }}
                >
                    <StickyLeft />
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