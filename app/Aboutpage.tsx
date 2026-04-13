// app/Aboutpage.tsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GettoKnowUs from '@/components/sections/About/GettoKnowUs';
import Vision from '@/components/sections/About/Vision';
import Mission from '@/components/sections/About/Mission';
import CoreValues from '@/components/sections/About/CoreValues';
import InvestorCTA from '@/components/sections/About/InvestorCTA';

export default function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/banner.png"
                    alt="Our Story"
                    className="video-hero-bg"
                />
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
                        data-aos="fade-up"
                    >
                        OUR STORY
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-medium leading-loose max-w-3xl mx-auto"
                        style={{ color: '#ffffff' }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Over 20 years of delivering excellence
                    </p>
                </div>
            </section>

            <GettoKnowUs />
            <Vision />
            <Mission />
            <CoreValues />

            {/* Partner / Investor CTA */}
            <InvestorCTA />
        </main>
    );
}
