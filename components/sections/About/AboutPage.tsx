// components/sections/About/AboutPage.tsx
// Assembles all About page sections. Import this in app/about/page.tsx.
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutBanner from './AboutBanner';
import GettoKnowUs from './GettoKnowUs';
import Vision from './Vision';
import Mission from './Mission';
import CoreValues from './CoreValues';

export default function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            <AboutBanner />
            <GettoKnowUs />
            <Vision />
            <Mission />
            <CoreValues />
        </main>
    );
}
