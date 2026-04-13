// sections/CSI/page.tsx
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CSIFocusAreas from '@/components/sections/CSI/CSIFocusAreas';
import CSIInitiativesGrid from '@/components/sections/CSI/CSIInitiativesGrid';
import CSICta from '@/components/sections/CSI/CSICta';

export default function CSI() {
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

            {/* ── HERO ── */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/banner.png"
                    alt="CSI Programmes"
                    className="video-hero-bg"
                />
                <div className="video-hero-content text-center px-4 max-w-5xl">
                    <h1
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
                        data-aos="fade-up"
                    >
                        CSI Programmes
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-medium leading-loose max-w-3xl mx-auto"
                        style={{ color: '#ffffff' }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Inspiring Change
                    </p>
                </div>
            </section>

            {/* ── FOCUS AREAS ── */}
            <CSIFocusAreas />

            {/* ── INITIATIVES GRID + PAGINATION ── */}
            <CSIInitiativesGrid isDark={isDark} />

            {/* ── CTA ── */}
            <CSICta />

        </main>
    );
}