// components/sections/Careers/CareersPage.tsx
// Assembles all Careers page sections. Import this in app/careers/page.tsx.
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './Banner';
import CurrentOpenings from './ CurrentOpenings';
import FullJobDetail from './FullJobDetail';
import CTAcareers from './CTAcareers';
import { Job } from './Jobdata';

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [hoveredJob, setHoveredJob] = useState<string | null>(null);
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
            <Banner />

            {/* Page Content */}
            <section className="py-24 bg-white dark:bg-darkmode">
                <div className="container overflow-hidden">
                    {!selectedJob ? (
                        <CurrentOpenings
                            hoveredJob={hoveredJob}
                            isDark={isDark}
                            onHover={setHoveredJob}
                            onSelect={setSelectedJob}
                        />
                    ) : (
                        <FullJobDetail
                            job={selectedJob}
                            onBack={() => setSelectedJob(null)}
                        />
                    )}
                </div>
            </section>

            {/* Final CTA — only when not viewing job details */}
            {!selectedJob && <CTAcareers />}
        </main>
    );
}
