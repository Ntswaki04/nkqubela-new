// app/Aboutpage.tsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GettoKnowUs from '@/components/sections/About/GettoKnowUs';
import Vision from '@/components/sections/About/Vision';
import Mission from '@/components/sections/About/Mission';
import CoreValues from '@/components/sections/About/CoreValues';

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
                    src="/images/hero%20bg%20all.png"
                    alt="Our Story"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-[0.05em]"
                        data-aos="fade-up"
                    >
                        OUR STORY
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90"
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
        </main>
    );
}
