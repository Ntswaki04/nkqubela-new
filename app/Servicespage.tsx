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
                <div className="flex flex-col lg:flex-row lg:items-start max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-32 gap-12 lg:gap-20">
                    {/* JS-driven sticky left panel */}
                    <StickyLeft />

                    {/* Scrolling right pillar feed */}
                    <div className="flex-1 flex flex-col gap-16">
                        {pillars.map((pillar, i) => (
                            <PillarCard key={pillar.id} pillar={pillar} index={i} isDark={isDark} forceVisible={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <ServicesCTA />
        </main>
    );
}