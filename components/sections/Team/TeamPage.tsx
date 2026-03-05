// components/sections/Team/TeamPage.tsx
// Assembles all Team page sections. Import this in app/team/page.tsx.
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';
import ExecutiveTeam from './ExecutiveTeam';
import ManagementBanner from './ManagementBanner';
import ManagementTeam from './ManagementTeam';

export default function TeamPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            <Banner />
            <ExecutiveTeam />
            <ManagementBanner />
            <ManagementTeam />
        </main>
    );
}
