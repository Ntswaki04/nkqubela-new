"use client";

import { useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface RelatedItem {
    slug: string;
    img: string;
    title: string;
    date: string;
}

interface CSIArticleLayoutProps {
    tag: string;
    tagColor: string;
    title: string;
    date: string;
    readTime: string;
    featuredImage: string;
    featuredImageAlt: string;
    children: ReactNode;
    articleTags?: string[];
    prevLink?: string;
    prevTitle?: string;
    nextLink?: string;
    nextTitle?: string;
    relatedItems?: RelatedItem[];
}

export default function CSIArticleLayout({
    tag,
    tagColor,
    title,
    date,
    readTime,
    featuredImage,
    featuredImageAlt,
    children,
    articleTags,
    prevLink,
    prevTitle,
    nextLink,
    nextTitle,
    relatedItems,
}: CSIArticleLayoutProps) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main className="pt-32 pb-20">
            {/* Back Button */}
            <section className="container max-w-5xl mx-auto px-4 pt-10 pb-4">
                <Link
                    href="/csi"
                    className="inline-flex items-center gap-2 border border-[#00296D] bg-white text-[#00296D] hover:bg-[#00296D] hover:text-white font-bold py-2.5 px-8 rounded-full transition-colors text-sm"
                >
                    <Icon icon="ic:round-arrow-back" className="text-base" />
                    Back
                </Link>
            </section>

            {/* Article Header */}
            <section className="container max-w-5xl mx-auto px-4 pt-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full mb-6" style={{ backgroundColor: '#F4F8FE' }}>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{tag}</span>
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white leading-tight mb-8"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/logo/Nkqubela-Technologies-Logo.png"
                                alt="Author"
                                className="w-8 h-8 rounded-full border border-gray-200 p-0.5 bg-white object-contain"
                            />
                            <span className="font-bold text-gray-900 dark:text-white">Nkqubela Team</span>
                        </div>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <div>{date}</div>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <div>{readTime}</div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-16" data-aos="zoom-in">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featuredImage} alt={featuredImageAlt} className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Content Layout */}
            <section className="container max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-12">
                    {/* Main Content */}
                    <div className="flex-grow border-b border-gray-100 dark:border-gray-800 pb-16">
                        <article className="article-content article-drop-cap" data-aos="fade-up">
                            {children}
                        </article>

                        {/* Tags */}
                        {articleTags && (
                            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold dark:text-white mb-4">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {articleTags.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Prev/Next Navigation */}
            <section className="container max-w-4xl mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {prevLink && (
                        <Link href={prevLink} className="article-nav-button-prev border border-[#00296D] bg-white text-[#00296D] hover:bg-[#00296D] hover:text-white font-bold py-2.5 px-10 rounded-full text-center transition-colors text-sm min-w-[200px]">
                            Previous Initiative
                        </Link>
                    )}
                    {nextLink && (
                        <Link href={nextLink} className="article-nav-button-next bg-[#00296D] text-white hover:bg-white hover:text-black border border-[#00296D] font-bold py-2.5 px-10 rounded-full text-center transition-colors text-sm min-w-[200px]">
                            Next Initiative
                        </Link>
                    )}
                </div>
            </section>
        </main>
    );
}
