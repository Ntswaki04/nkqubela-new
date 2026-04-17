// sections/CSI/CSIInitiativesGrid.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { initiatives, ITEMS_PER_PAGE } from './csiData';

interface CSIInitiativesGridProps {
    isDark: boolean;
}

export default function CSIInitiativesGrid({ isDark }: CSIInitiativesGridProps) {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredPrev, setHoveredPrev] = useState(false);
    const [hoveredNext, setHoveredNext] = useState(false);

    const totalPages = Math.ceil(initiatives.length / ITEMS_PER_PAGE);
    const pagedItems = initiatives.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const hoverColour = isDark ? '#ffffff' : '#072B61';

    const goTo = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        document
            .getElementById('initiatives-section')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="initiatives-section" className="py-24 bg-white dark:bg-darkmode overflow-hidden">
            <div className="container">

                {/* Section header */}
                <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
                    <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: '#072B61' }} />
                    <h2 className="text-3xl font-bold dark:text-white">Our Initiatives</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-14" data-aos="fade-up" data-aos-delay="60">
                    A look at the programmes and projects we&apos;ve invested in across our communities.
                </p>

                {/* Card grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-0 border-t border-l border-gray-200 dark:border-gray-700">
                    {pagedItems.map((init, i) => (
                        <Link
                            key={`${init.slug}-${i}`}
                            href={init.slug}
                            className="block border-r border-b border-gray-200 dark:border-gray-700 group overflow-hidden transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            onMouseEnter={() => setHoveredCard(init.slug + i)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                backgroundColor: hoveredCard === init.slug + i
                                    ? (isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb')
                                    : 'transparent'
                            }}
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden border-b border-gray-200 dark:border-gray-700">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={init.img}
                                    alt={init.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        backgroundColor: '#072B61',
                                        opacity: hoveredCard === init.slug + i ? 0.15 : 0,
                                    }}
                                />
                            </div>

                            {/* Card body */}
                            <div className="p-8 space-y-4">
                                <h3
                                    className="text-xl font-bold leading-snug transition-colors duration-200 dark:text-white"
                                    style={{ color: hoveredCard === init.slug + i ? hoverColour : undefined, fontFamily: 'var(--font-inter)' }}
                                >
                                    {init.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                                    {init.desc}
                                </p>

                                {/* Meta row */}
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{init.date}</span>
                                    <div className="inline-block px-3 py-1 border border-primary/20 rounded-full" style={{ backgroundColor: '#F4F8FE' }}>
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{init.tag}</span>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-end pt-2">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: hoveredCard === init.slug + i ? '#072B61' : 'transparent',
                                            color: hoveredCard === init.slug + i ? '#ffffff' : '#9ca3af',
                                            transform: hoveredCard === init.slug + i ? 'scale(1.12)' : 'scale(1)',
                                            border: hoveredCard === init.slug + i ? 'none' : '1.5px solid #d1d5db',
                                        }}
                                    >
                                        <Icon icon="ic:round-arrow-forward" className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── Pagination Bar ── */}
                <div className="flex border-t border-gray-200 dark:border-gray-700 mt-0">

                    {/* Prev */}
                    <button
                        onClick={() => goTo(currentPage - 1)}
                        disabled={currentPage === 1}
                        onMouseEnter={() => setHoveredPrev(true)}
                        onMouseLeave={() => setHoveredPrev(false)}
                        className="flex items-center justify-center w-14 border-r border-gray-200 dark:border-gray-700 py-5 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                        style={{
                            backgroundColor: hoveredPrev && currentPage > 1
                                ? (isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb')
                                : 'transparent'
                        }}
                        aria-label="Previous page"
                    >
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{
                                backgroundColor: hoveredPrev && currentPage > 1 ? '#072B61' : 'transparent',
                                color: hoveredPrev && currentPage > 1 ? '#ffffff' : (isDark ? '#6b7280' : '#9ca3af'),
                                transform: hoveredPrev && currentPage > 1 ? 'scale(1.1)' : 'scale(1)',
                            }}
                        >
                            <Icon icon="ic:round-arrow-back" className="text-lg" />
                        </div>
                    </button>

                    {/* Counter */}
                    <div className="flex-1 flex items-center justify-center py-5">
                        <span
                            className="text-sm font-bold uppercase tracking-widest"
                            style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                        >
                            {currentPage} / {totalPages}
                        </span>
                    </div>

                    {/* Next */}
                    <button
                        onClick={() => goTo(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        onMouseEnter={() => setHoveredNext(true)}
                        onMouseLeave={() => setHoveredNext(false)}
                        className="flex items-center justify-center w-14 border-l border-gray-200 dark:border-gray-700 py-5 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                        style={{
                            backgroundColor: hoveredNext && currentPage < totalPages
                                ? (isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb')
                                : 'transparent'
                        }}
                        aria-label="Next page"
                    >
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{
                                backgroundColor: hoveredNext && currentPage < totalPages ? '#072B61' : 'transparent',
                                color: hoveredNext && currentPage < totalPages ? '#ffffff' : (isDark ? '#6b7280' : '#9ca3af'),
                                transform: hoveredNext && currentPage < totalPages ? 'scale(1.1)' : 'scale(1)',
                            }}
                        >
                            <Icon icon="ic:round-arrow-forward" className="text-lg" />
                        </div>
                    </button>
                </div>

            </div>
        </section>
    );
}