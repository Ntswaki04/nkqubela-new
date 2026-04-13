// components/sections/Services/ServicesPage.tsx
// Assembles all Services page sections. Import this in app/services/page.tsx.
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';
import ServicesOverview from './ServicesOverview';
import StickyLeft from './StickyLeft';
import PillarCard from './PillarCard';
import ServicesCTA from './ServicesCTA';
import { pillars } from './PillarData';

export default function ServicesPage() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Hero */}
            <Banner />

            {/* Overview */}
            <ServicesOverview />

            {/* Six Pillars – JS sticky scroll */}
            <section className="bg-white dark:bg-darkmode py-20 relative">
                {/* Mobile/tablet: stacked heading above cards */}
                <div className="lg:hidden container px-4 pb-10">
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-darklight border border-gray-200 dark:border-dark_border rounded-full px-4 py-1.5 text-sm font-bold text-primary mb-6 shadow-sm">
                        What We Do
                    </div>
                    <h2 className="text-3xl font-extrabold dark:text-white mb-3" style={{ lineHeight: 1.12 }}>
                        Fresh Perspectives<br />
                        On <span className="text-gray-900 dark:text-white italic">Strategy.</span>
                    </h2>
                    <p className="text-black dark:text-gray-400 leading-relaxed text-base max-w-md">
                        We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
                    </p>
                </div>

                {/* Desktop: sticky left + scrolling right */}
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

                {/* Mobile/tablet: pillar cards stacked */}
                <div className="lg:hidden container px-4 flex flex-col gap-10">
                    {pillars.map((pillar, i) => (
                        <PillarCard key={pillar.id} pillar={pillar} index={i} isDark={isDark} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <ServicesCTA />
        </main>
    );
}
