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

                    {/* Scrolling right feed */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 64 }}>
                        {pillars.map((pillar, i) => (
                            <PillarCard key={pillar.id} pillar={pillar} index={i} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <ServicesCTA />
        </main>
    );
}
