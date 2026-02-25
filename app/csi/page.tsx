"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const initiatives = [
    {
        slug: '/csi-zwelandile',
        img: '/images/csi_zwelandile.png',
        title: 'Zwelandile Senior Secondary School Computer Lab',
        desc: 'Donated a brand-new computer lab to Zwelandile Senior Secondary School at Cofimvaba, celebrating their 100% matric pass rate.',
        tag: 'Education',
        tagColor: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        date: 'Jan 2024',
    },
    {
        slug: '/csi-youth-exhibition',
        img: '/images/csi-youth-exhibition.png',
        title: 'AGC Nkqubela – Youth Exhibition',
        desc: 'Participated in a Youth Seminar and Career Exhibition organized by the African Gospel Church.',
        tag: 'Youth Development',
        tagColor: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
        date: 'Oct 2023',
    },
    {
        slug: '/csi-mec-awards',
        img: '/images/mec-awards-golf-group.jpg',
        title: 'MEC Excellence Awards & Golf Day',
        desc: 'Sponsored two vehicles for schools as part of the MEC Golf Day and Excellence Awards.',
        tag: 'Sponsorship',
        tagColor: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
        date: 'Jun 2025',
    },
    {
        slug: '/csi-food-sponsorship',
        img: '/images/csi-food-1.jpg',
        title: 'Food Sponsorship for Grade 12 Learners',
        desc: 'Donated stationery, nutritious snacks and grocery contributions for Grade 12 learners during final exams.',
        tag: 'Community Support',
        tagColor: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
        date: 'Oct 2024',
    },
];

export default function CSI() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero bg all.png"
                    alt="CSI Programmes"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
                        CSI Programmes
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
                        Inspiring Change
                    </p>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="bg-IcyBreeze dark:bg-darklight py-20 overflow-hidden">
                <div className="container">
                    <div className="grid sm:grid-cols-3 gap-8">
                        {[
                            { title: 'Education', desc: 'Bridging the digital divide through computer labs and skills training.' },
                            { title: 'Youth Empowerment', desc: 'Career guidance, internships, and skill development for young adults.' },
                            { title: 'Community Support', desc: 'Direct contributions to improve the lives of those in need.' },
                        ].map((area, i) => (
                            <div
                                key={area.title}
                                className="bg-white dark:bg-darkmode p-10 rounded-22 shadow-lg text-center space-y-6 hover:-translate-y-2 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="inline-block">
                                    <span className="pillar-badge bg-primary/10 text-primary px-4 py-2 font-bold rounded-full">{area.title}</span>
                                </div>
                                <p className="text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiative Cards */}
            <section className="py-32 overflow-hidden">
                <div className="container">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Our Initiatives</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {initiatives.map((init, i) => (
                            <Link
                                key={init.slug}
                                href={init.slug}
                                className="group bg-white dark:bg-darklight rounded-22 overflow-hidden shadow-lg border border-gray-100 dark:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={init.img}
                                        alt={init.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${init.tagColor}`}>
                                            {init.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <p className="text-sm text-gray-400">{init.date}</p>
                                    <h4 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">
                                        {init.title}
                                    </h4>
                                    <p className="text-SlateBlueText dark:text-darktext">{init.desc}</p>
                                    <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <Icon icon="ic:round-arrow-forward" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24">
                <div className="container px-4">
                    <div className="cta-section-custom relative overflow-hidden rounded-3xl"
                        style={{ backgroundImage: 'url("/images/CTA%20csi.png")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '6rem 3rem' }}
                        data-aos="zoom-in">
                        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="space-y-6 max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Want to Collaborate on a CSI Initiative?
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
