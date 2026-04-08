// components/sections/CSI/CSIPage.tsx
// Assembles all CSI page sections. Import this in app/csi/page.tsx.
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';
import CSIFocusAreas from './CSIFocusAreas';
import CSIInitiativesGrid from './CSIInitiativesGrid';
import CSICta from './CSICta';

export default function CSIPage() {
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
        <main style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            <Banner />
            <CSIFocusAreas />
            <CSIInitiativesGrid isDark={isDark} />
            <CSICta />
        </main>
    );
}
