"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const pillars = [
    {
        id: 'ict-resourcing',
        title: 'ICT Resourcing',
        items: [
            { icon: 'ic:round-people', title: 'Staff Augmentation', desc: 'Working with you to understand your specific needs and project goals.' },
            { icon: 'ic:round-school', title: 'Expert Sourcing', desc: 'Leveraging our network and expertise to identify and vet candidates.' },
            { icon: 'ic:round-verified-user', title: 'Seamless Integration', desc: 'Facilitating onboarding and integration of new ICT resources into your environment.' },
        ],
    },
    {
        id: 'software-solutions',
        title: 'Software Solutions',
        items: [
            { icon: 'ic:round-code', title: 'Custom App Dev', desc: 'Building bespoke applications designed for your business workflow.' },
            { icon: 'ic:round-cloud-sync', title: 'Cloud Transformation', desc: 'Transitioning Legacy systems to scalable, modern cloud architectures.' },
            { icon: 'ic:round-terminal', title: 'System Integration', desc: 'Ensuring your diverse software platforms communicate effectively.' },
        ],
    },
    {
        id: 'security',
        title: 'Security',
        items: [
            { icon: 'ic:round-lock', title: 'Cyber Defense', desc: 'Protecting your perimeter and internal assets from advanced threats.' },
            { icon: 'ic:round-videocam', title: 'Smart Surveillance', desc: 'AI-powered monitoring solutions for 24/7 visibility.' },
            { icon: 'ic:round-fingerprint', title: 'Unified Access', desc: 'Modern biometric and digital access control systems.' },
        ],
    },
    {
        id: 'connectivity',
        title: 'Connectivity',
        items: [
            { icon: 'ic:round-router', title: 'Enterprise Wireless', desc: 'High-density, secure Wi-Fi networks for corporate environments.' },
            { icon: 'ic:round-settings-input-antenna', title: 'Fiber Solutions', desc: 'Low-latency, high-bandwidth dedicated internet access.' },
            { icon: 'ic:round-forum', title: 'Unified Comms', desc: 'Streamlined voice and video collaboration for distributed teams.' },
        ],
    },
    {
        id: 'infrastructure',
        title: 'ICT Infrastructure Solutions',
        items: [
            { icon: 'ic:round-dns', title: 'Data Center Build', desc: 'Modern data center designs prioritizing reliability and efficiency.' },
            { icon: 'ic:round-cable', title: 'Smart Cabling', desc: 'Scalable network fabric designed for high-performance data.' },
            { icon: 'ic:round-bolt', title: 'Critical Power', desc: 'Redundant power protection for mission-critical IT Loads.' },
        ],
    },
    {
        id: 'management',
        title: 'Server & Desktop Management',
        items: [
            { icon: 'ic:round-terminal', title: 'Proactive Maintenance', desc: 'Solving issues before they impact productivity.' },
            { icon: 'ic:round-update', title: 'Patch Management', desc: 'Keeping all systems up to date with the latest security fixes.' },
            { icon: 'ic:round-headset-mic', title: '24/7 Help Desk', desc: 'Immediate technical assistance whenever your team needs it.' },
        ],
    },
];

// ── PILLAR CARD with scroll-reveal via IntersectionObserver ──
function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(44px)',
                transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${index * 0.06}s, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${index * 0.06}s`,
            }}
            className="relative pl-10 border-l-2 border-gray-100 dark:border-dark_border hover:border-primary transition-colors duration-500 group"
        >
            {/* pillar label + title */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase opacity-80">
                        Pillar {index + 1}
                    </span>
                    <div className="w-8 h-px bg-primary/30" />
                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">
                        {pillar.id.replace(/-/g, ' ')}
                    </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold dark:text-white uppercase tracking-tighter leading-none">
                    {pillar.title}
                </h3>
            </div>

            {/* service items */}
            <div className="flex flex-col gap-10">
                {pillar.items.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group/item">
                        <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gray-50 dark:bg-darklight border border-gray-100 dark:border-dark_border flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                            <Icon icon={item.icon} className="text-2xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold dark:text-white mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-SlateBlueText dark:text-gray-400 leading-relaxed text-base font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── JS-DRIVEN STICKY LEFT PANEL ──
// Works regardless of any overflow:hidden on ancestor elements.
function StickyLeft() {
    const panelRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const rightColRef = useRef<HTMLElement | null>(null);
    const NAV_HEIGHT = 96; // px – matches your fixed header height
    const PADDING_TOP = 32; // extra breathing room below nav

    const update = useCallback(() => {
        const panel = panelRef.current;
        const section = sectionRef.current;
        const rightCol = rightColRef.current;
        if (!panel || !section || !rightCol) return;

        const sectionRect = section.getBoundingClientRect();
        const rightColRect = rightCol.getBoundingClientRect();
        const panelHeight = panel.offsetHeight;
        const topOffset = NAV_HEIGHT + PADDING_TOP;

        // 1. Before section enters viewport – sit naturally at top of section in flow
        if (sectionRect.top > topOffset) {
            panel.style.position = 'absolute';
            panel.style.top = '0px';
            panel.style.width = '380px';
            panel.style.zIndex = '';
            return;
        }

        // 2+3 merged: pin the panel fixed, clamped so its BOTTOM never exceeds
        // the BOTTOM of the right-side pillar column (not the section, which has
        // extra padding below the last pillar).
        const clampedTop = Math.min(topOffset, rightColRect.bottom - panelHeight);
        panel.style.position = 'fixed';
        panel.style.top = `${clampedTop}px`;
        panel.style.width = '380px';
        panel.style.zIndex = '10';
    }, []);

    useEffect(() => {
        // Walk up from panel to find the <section> ancestor
        sectionRef.current = panelRef.current?.closest('section') ?? null;
        // The right pillar column is the next sibling of the outer placeholder
        rightColRef.current = (panelRef.current?.parentElement?.nextElementSibling as HTMLElement) ?? null;

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update();

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [update]);

    return (
        /* Outer placeholder preserves layout space */
        <div style={{ flex: '0 0 380px', position: 'relative', minHeight: 1 }}>
            <div
                ref={panelRef}
                style={{ position: 'absolute', top: 0, width: 380 }}
            >
                {/* badge */}
                <div className="inline-flex items-center gap-2 bg-white dark:bg-darklight border border-gray-200 dark:border-dark_border rounded-full px-4 py-1.5 text-sm font-bold text-primary mb-7 shadow-sm">
                    What We Do
                </div>

                {/* headline */}
                <h2
                    className="font-extrabold dark:text-white mb-5"
                    style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.12 }}
                >
                    Fresh Perspectives<br />
                    On <span className="text-primary italic">Strategy.</span>
                </h2>

                {/* sub-text */}
                <p className="text-SlateBlueText dark:text-gray-400 leading-relaxed max-w-[300px]" style={{ fontSize: 15 }}>
                    We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
                </p>
            </div>
        </div>
    );
}

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            {/* ── HERO ── */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero bg all.png" alt="Services" className="video-hero-bg" />
                <div className="video-hero-overlay" />
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
                        SERVICES
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
                        WHAT WE DO
                    </p>
                </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-20">
                        <div data-aos="fade-right">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/services%20image.png"
                                alt="Six Pillars"
                                className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl"
                            />
                        </div>
                        <div className="space-y-8" data-aos="fade-left">
                            <div className="inline-block px-5 py-2 border border-primary/30 rounded-full bg-primary/5">
                                <span className="text-primary text-sm font-bold tracking-wide">Our Services</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white leading-tight">
                                What We Do <span className="text-primary whitespace-nowrap">"Six pillars"</span>.<br />
                                One trusted partner.
                            </h2>
                            <p className="text-xl text-SlateBlueText dark:text-gray-400 leading-relaxed font-medium">
                                At Nkqubela Technologies, we offer a comprehensive suite of ICT services designed to
                                simplify the complex and empower your business to grow. From securing your digital
                                environment to building robust infrastructure, our solutions are tailored to meet the
                                demands of modern enterprises across South Africa and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SIX PILLARS – JS STICKY SCROLL ── */}
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
                            <PillarCard key={pillar.id} pillar={pillar} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24">
                <div className="container px-4">
                    <div
                        className="cta-section-custom relative overflow-hidden rounded-3xl"
                        style={{
                            backgroundImage: 'url("/images/CTA Services.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '6rem 3rem'
                        }}
                        data-aos="zoom-in"
                    >
                        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="space-y-6 max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Need a Custom Solution?
                                </h2>
                                <p className="text-white/90 text-xl font-medium">
                                    Our team is ready to design an ICT strategy tailored to your business needs.
                                </p>
                            </div>
                            <div>
                                <Link href="/contact" className="bg-primary text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap">
                                    Contact Us Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

/**
 * Attaches an IntersectionObserver to a container element.
 * Every direct child with class `scroll-reveal` inside the container
 * will receive `is-visible` when it enters the viewport.
 * Staggered transition-delay is applied inline so cards cascade in.
 *
 * @param setActiveDot  optional callback – called with the index of the
 *                      most-recently-visible card so you can drive dots.
 */
function useScrollReveal(
    setActiveDot?: (idx: number) => void,
    threshold = 0.35,
) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const cards = container.querySelectorAll<HTMLElement>('.scroll-reveal');

        // Stagger delay exactly as in the reference snippet
        cards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.06}s`;
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        const idx = parseInt(
                            (entry.target as HTMLElement).dataset.index ?? '0',
                            10,
                        );
                        setActiveDot?.(idx);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -80px 0px' },
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [threshold, setActiveDot]);

    return containerRef;
}
