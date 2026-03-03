// sections/Careers/page.tsx 
"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Job } from '@/components/sections/Careers/Jobdata';
import CurrentOpenings from '@/components/sections/Careers/ CurrentOpenings';
import FullJobDetail from '@/components/sections/Careers/FullJobDetail';
import CTAcareers from '@/components/sections/Careers/CTAcareers';

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [hoveredJob, setHoveredJob] = useState<string | null>(null);
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
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero%20bg%20all.png"
                    alt="Careers"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
                        CAREERS
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
                        JOIN OUR TEAM
                    </p>
                </div>
            </section>

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

            {/* Bottom CTA — only show when NOT viewing job details */}
            {!selectedJob && <CTAcareers />}
        </main>
    );
}