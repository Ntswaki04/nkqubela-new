//"use client";

//import { useEffect, useState } from 'react';
//import Link from 'next/link';
//import { Icon } from '@iconify/react';
//import AOS from 'aos';
//import 'aos/dist/aos.css';

//const initiatives = [
//    {
//        slug: '/csi-zwelandile',
//        img: '/images/csi_zwelandile.png',
//        title: 'Zwelandile Senior Secondary School Computer Lab',
//        desc: 'Donated a brand-new computer lab to Zwelandile Senior Secondary School at Cofimvaba, celebrating their 100% matric pass rate.',
//        tag: 'Education',
//        date: 'Jan 2024',
//    },
//    {
//        slug: '/csi-youth-exhibition',
//        img: '/images/csi-youth-exhibition.png',
//        title: 'AGC Nkqubela – Youth Exhibition',
//        desc: 'Participated in a Youth Seminar and Career Exhibition organized by the African Gospel Church.',
//        tag: 'Youth Development',
//        date: 'Oct 2023',
//    },
//    {
//        slug: '/csi-mec-awards',
//        img: '/images/mec-awards-golf-group.jpg',
//        title: 'MEC Excellence Awards & Golf Day',
//        desc: 'Sponsored two vehicles for schools as part of the MEC Golf Day and Excellence Awards.',
//        tag: 'Sponsorship',
//        date: 'Jun 2025',
//    },
//    {
//        slug: '/csi-food-sponsorship',
//        img: '/images/csi-food-1.jpg',
//        title: 'Food Sponsorship for Grade 12 Learners',
//        desc: 'Donated stationery, nutritious snacks and grocery contributions for Grade 12 learners during final exams.',
//        tag: 'Community Support',
//        date: 'Oct 2024',
//    },
//    // ── Mock page-2 entries ──
//    {
//        slug: '/csi-zwelandile',
//        img: '/images/csi_zwelandile.png',
//        title: 'Digital Skills Workshop – Mdantsane Township',
//        desc: 'Hosted a two-day digital literacy workshop for 80 learners in Mdantsane, covering coding fundamentals and internet safety.',
//        tag: 'Digital Skills',
//        date: 'Mar 2025',
//    },
//    {
//        slug: '/csi-youth-exhibition',
//        img: '/images/csi-youth-exhibition.png',
//        title: 'STEM Bursary Programme – Eastern Cape',
//        desc: 'Awarded bursaries to five high-achieving Grade 12 learners from under-resourced schools to pursue STEM degrees at university.',
//        tag: 'Bursaries',
//        date: 'Nov 2024',
//    },
//];

//const focusAreas = [
//    { title: 'Education', desc: 'Bridging the digital divide through computer labs and skills training.' },
//    { title: 'Youth Empowerment', desc: 'Career guidance, internships, and skill development for young adults.' },
//    { title: 'Community Support', desc: 'Direct contributions to improve the lives of those in need.' },
//];

//const ITEMS_PER_PAGE = 4;

//export default function CSI() {
//    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//    const [isDark, setIsDark] = useState(false);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [hoveredPrev, setHoveredPrev] = useState(false);
//    const [hoveredNext, setHoveredNext] = useState(false);

//    const totalPages = Math.ceil(initiatives.length / ITEMS_PER_PAGE);
//    const pagedItems = initiatives.slice(
//        (currentPage - 1) * ITEMS_PER_PAGE,
//        currentPage * ITEMS_PER_PAGE
//    );

//    const goTo = (page: number) => {
//        if (page < 1 || page > totalPages) return;
//        setCurrentPage(page);
//        // Scroll to initiatives section smoothly
//        document.getElementById('initiatives-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//    };

//    useEffect(() => {
//        AOS.init({ duration: 1000, once: true, offset: 50 });
//        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
//        check();
//        const observer = new MutationObserver(check);
//        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
//        return () => observer.disconnect();
//    }, []);

//    const hoverColour = isDark ? '#ffffff' : '#072B61';

//    return (
//        <main style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
//            {/* Hero Section */}
//            <section className="video-hero mt-24">
//                {/* eslint-disable-next-line @next/next/no-img-element */}
//                <img
//                    src="/images/hero bg all.png"
//                    alt="CSI Programmes"
//                    className="video-hero-bg"
//                />
//                <div className="video-hero-overlay"></div>
//                <div className="video-hero-content text-center px-4 max-w-5xl">
//                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
//                        CSI Programmes
//                    </h1>
//                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
//                        Inspiring Change
//                    </p>
//                </div>
//            </section>

//            {/* Focus Areas — divider row style matching careers */}
//            <section className="bg-white dark:bg-darkmode py-24 overflow-hidden">
//                <div className="container">

//                    {/* Section header */}
//                    <div className="flex items-center gap-3 mb-10" data-aos="fade-up">
//                        <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: '#072B61' }}></div>
//                        <h2 className="text-3xl font-bold dark:text-white">Our Focus Areas</h2>
//                    </div>

//                    <div className="border-t border-gray-200 dark:border-gray-700" data-aos="fade-up">
//                        {focusAreas.map((area, i) => (
//                            <div
//                                key={area.title}
//                                className="flex items-stretch border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
//                                data-aos="fade-up"
//                                data-aos-delay={i * 80}
//                            >
//                                {/* Label column */}
//                                <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
//                                    <span className="text-base font-semibold dark:text-white">
//                                        {area.title}
//                                    </span>
//                                </div>
//                                {/* Value column */}
//                                <div className="flex-1 flex items-center py-7 px-6 md:pl-10">
//                                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
//                                        {area.desc}
//                                    </p>
//                                </div>
//                            </div>
//                        ))}
//                    </div>
//                </div>
//            </section>

//            {/* Initiative Cards — QuantumAI grid style */}
//            <section id="initiatives-section" className="py-24 bg-white dark:bg-darkmode overflow-hidden">
//                <div className="container">

//                    {/* Section header */}
//                    <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
//                        <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: '#072B61' }}></div>
//                        <h2 className="text-3xl font-bold dark:text-white">Our Initiatives</h2>
//                    </div>
//                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-14 pl-0" data-aos="fade-up" data-aos-delay="60">
//                        A look at the programmes and projects we&apos;ve invested in across our communities.
//                    </p>

//                    {/* Card grid */}
//                    <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-0 border-t border-l border-gray-200 dark:border-gray-700">
//                        {pagedItems.map((init, i) => (
//                            <Link
//                                key={init.slug}
//                                href={init.slug}
//                                className="block border-r border-b border-gray-200 dark:border-gray-700 group overflow-hidden transition-all duration-300"
//                                data-aos="fade-up"
//                                data-aos-delay={i * 80}
//                                onMouseEnter={() => setHoveredCard(init.slug)}
//                                onMouseLeave={() => setHoveredCard(null)}
//                                style={{
//                                    backgroundColor: hoveredCard === init.slug
//                                        ? (isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb')
//                                        : 'transparent'
//                                }}
//                            >
//                                {/* Image */}
//                                <div className="relative h-56 overflow-hidden border-b border-gray-200 dark:border-gray-700">
//                                    {/* eslint-disable-next-line @next/next/no-img-element */}
//                                    <img
//                                        src={init.img}
//                                        alt={init.title}
//                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                                    />
//                                    {/* Overlay on hover */}
//                                    <div
//                                        className="absolute inset-0 transition-opacity duration-300"
//                                        style={{
//                                            backgroundColor: '#072B61',
//                                            opacity: hoveredCard === init.slug ? 0.15 : 0
//                                        }}
//                                    />
//                                </div>

//                                {/* Card body */}
//                                <div className="p-8 space-y-4">
//                                    <h3
//                                        className="text-xl font-bold leading-snug transition-colors duration-200 dark:text-white"
//                                        style={{ color: hoveredCard === init.slug ? hoverColour : undefined }}
//                                    >
//                                        {init.title}
//                                    </h3>
//                                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
//                                        {init.desc}
//                                    </p>

//                                    {/* Meta row */}
//                                    <div
//                                        className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
//                                        style={{ color: hoveredCard === init.slug ? (isDark ? 'rgba(255,255,255,0.7)' : '#6b7280') : '#9ca3af' }}
//                                    >
//                                        <span>{init.date}</span>
//                                        <span className="w-px h-3 bg-gray-300 dark:bg-gray-600 hidden sm:inline-block"></span>
//                                        <span>{init.tag}</span>
//                                    </div>

//                                    {/* Animated arrow button */}
//                                    <div className="flex justify-end pt-2">
//                                        <div
//                                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
//                                            style={{
//                                                backgroundColor: hoveredCard === init.slug ? '#072B61' : 'transparent',
//                                                color: hoveredCard === init.slug ? '#ffffff' : '#9ca3af',
//                                                transform: hoveredCard === init.slug ? 'scale(1.12)' : 'scale(1)',
//                                                border: hoveredCard === init.slug ? 'none' : '1.5px solid #d1d5db'
//                                            }}
//                                        >
//                                            <Icon icon="ic:round-arrow-forward" className="text-xl" />
//                                        </div>
//                                    </div>
//                                </div>
//                            </Link>
//                        ))}
//                    </div>

//                    {/* ── Pagination Bar (QuantumAI style) ── */}
//                    <div className="flex border-t border-gray-200 dark:border-gray-700 mt-0">

//                        {/* Prev arrow */}
//                        <button
//                            onClick={() => goTo(currentPage - 1)}
//                            disabled={currentPage === 1}
//                            onMouseEnter={() => setHoveredPrev(true)}
//                            onMouseLeave={() => setHoveredPrev(false)}
//                            className="flex items-center justify-center w-14 border-r border-gray-200 dark:border-gray-700 py-5 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//                            style={{
//                                backgroundColor: hoveredPrev && currentPage > 1
//                                    ? (isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb')
//                                    : 'transparent'
//                            }}
//                            aria-label="Previous page"
//                        >
//                            <div
//                                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
//                                style={{
//                                    backgroundColor: hoveredPrev && currentPage > 1 ? '#072B61' : 'transparent',
//                                    color: hoveredPrev && currentPage > 1 ? '#ffffff' : (isDark ? '#6b7280' : '#9ca3af'),
//                                    transform: hoveredPrev && currentPage > 1 ? 'scale(1.1)' : 'scale(1)'
//                                }}
//                            >
//                                <Icon icon="ic:round-arrow-back" className="text-lg" />
//                            </div>
//                        </button>

//                        {/* Page counter */}
//                        <div className="flex-1 flex items-center justify-center py-5">
//                            <span
//                                className="text-sm font-bold uppercase tracking-widest"
//                                style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
//                            >
//                                {currentPage} / {totalPages}
//                            </span>
//                        </div>

//                        {/* Next arrow */}
//                        <button
//                            onClick={() => goTo(currentPage + 1)}
//                            disabled={currentPage === totalPages}
//                            onMouseEnter={() => setHoveredNext(true)}
//                            onMouseLeave={() => setHoveredNext(false)}
//                            className="flex items-center justify-center w-14 border-l border-gray-200 dark:border-gray-700 py-5 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//                            style={{
//                                backgroundColor: hoveredNext && currentPage < totalPages
//                                    ? (isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb')
//                                    : 'transparent'
//                            }}
//                            aria-label="Next page"
//                        >
//                            <div
//                                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
//                                style={{
//                                    backgroundColor: hoveredNext && currentPage < totalPages ? '#072B61' : 'transparent',
//                                    color: hoveredNext && currentPage < totalPages ? '#ffffff' : (isDark ? '#6b7280' : '#9ca3af'),
//                                    transform: hoveredNext && currentPage < totalPages ? 'scale(1.1)' : 'scale(1)'
//                                }}
//                            >
//                                <Icon icon="ic:round-arrow-forward" className="text-lg" />
//                            </div>
//                        </button>

//                    </div>

//                </div>
//            </section>

//            {/* CTA Section */}
//            <section className="pb-24 bg-white dark:bg-darkmode">
//                <div className="container px-4">
//                    <div
//                        className="relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
//                        style={{ backgroundImage: 'url("/images/CTA%20csi.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
//                        data-aos="zoom-in"
//                    >
//                        <div className="absolute inset-0 bg-[#011120]/70 mix-blend-multiply rounded-3xl"></div>
//                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
//                            <div className="space-y-5 max-w-2xl text-center lg:text-left">
//                                <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
//                                    Want to Collaborate on a<br className="hidden md:block" /> CSI Initiative?
//                                </h2>
//                                <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
//                                    Our team is ready to design an impact strategy tailored to the needs of your community.
//                                </p>
//                            </div>
//                            <div>
//                                <Link
//                                    href="/contact"
//                                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold shadow-lg text-white text-lg transition-all duration-300 group/cta"
//                                    style={{ backgroundColor: '#072B61' }}
//                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#05204a')}
//                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#072B61')}
//                                >
//                                    Contact Us Today
//                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 transition-transform duration-300 group-hover/cta:translate-x-1">
//                                        <Icon icon="ic:round-arrow-forward" className="text-lg" />
//                                    </span>
//                                </Link>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </section>
//        </main>
//    );
//}
