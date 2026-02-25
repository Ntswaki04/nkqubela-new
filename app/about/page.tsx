// app/about/page.tsx
"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {
    useEffect(() => {
        // Initialize AOS (Animate on Scroll)
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <main className="pt-32">
                {/* Hero Section */}
                <section className="video-hero">
                    <video autoPlay muted loop playsInline className="video-hero-bg">
                        <source src="/videos/7414133-hd_1920_1080_24fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-hero-overlay"></div>
                    <div className="container video-hero-content" data-aos="zoom-out">
                        <h1 className="font-bold text-white mb-6 text-5xl lg:text-7xl">Our Story</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                            Over 20 years of delivering excellence in systems integration and ICT solutions.
                        </p>
                    </div>
                </section>

                {/* Company Overview */}
                <section className="py-24">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div data-aos="fade-right">
                                <h2 className="font-bold dark:text-white mb-8 text-3xl md:text-4xl">Simplifying Complexity for Two Decades</h2>
                                <div className="space-y-6 text-lg text-SlateBlueText dark:text-darktext leading-relaxed">
                                    <p>
                                        Nkqubela Technologies is a leading systems integrator with a deep-rooted history of
                                        helping clients navigate the complex landscape of information technology. Since our
                                        inception, we have been committed to delivering high-quality, scalable solutions that
                                        drive business growth.
                                    </p>
                                    <p>
                                        Based in South Africa, we have grown from a specialized ICT resourcing firm into a
                                        full-scale technology partner, providing everything from software development and
                                        information security to infrastructure management.
                                    </p>
                                </div>
                            </div>
                            <div className="relative lg:block hidden" data-aos="fade-left">
                                <div className="flex items-center justify-center gap-6">
                                    {/* Left Card (Man) */}
                                    <div className="relative z-10">
                                        <div className="w-64 h-80 bg-[#4CC9F0] rounded-tl-[100px] rounded-br-[100px] relative overflow-visible shadow-2xl group hover:scale-105 transition-transform duration-500">
                                            <div className="absolute bottom-0 left-0 w-full h-[115%] overflow-hidden rounded-tl-[100px] rounded-br-[100px]">
                                                <Image
                                                    src="/images/hero/hero-man.png"
                                                    alt="Hero Man"
                                                    width={256}
                                                    height={320}
                                                    className="w-full h-full object-cover object-top scale-110 translate-y-2"
                                                />
                                            </div>
                                            <div className="absolute top-10 -left-12 bg-[#FEE440] text-slate-800 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                                                <div className="bg-white/30 p-2 rounded-full">
                                                    <span className="iconify text-xl" data-icon="ic:round-star"></span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm leading-none">20+ Years</h4>
                                                    <p className="text-[10px] font-bold opacity-75 uppercase tracking-wide">Experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Card (Woman) */}
                                    <div className="relative mt-24 z-0">
                                        <div className="w-64 h-80 bg-[#4361EE] rounded-tr-[100px] rounded-bl-[100px] relative overflow-visible shadow-2xl group hover:scale-105 transition-transform duration-500">
                                            <div className="absolute bottom-0 left-0 w-full h-[115%] overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
                                                <Image
                                                    src="/images/hero/hero-woman.png"
                                                    alt="Hero Woman"
                                                    width={256}
                                                    height={320}
                                                    className="w-full h-full object-cover object-top scale-110 translate-y-2"
                                                />
                                            </div>
                                            <div className="absolute top-12 -right-16 bg-[#4ade80] text-slate-900 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse-slow">
                                                <div className="bg-white/30 p-2 rounded-full">
                                                    <span className="iconify text-xl" data-icon="ic:round-verified"></span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm leading-none">100%</h4>
                                                    <p className="text-[10px] font-bold opacity-75 uppercase tracking-wide">Commitment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-gray-50 dark:bg-darkmode">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 bg-white dark:bg-darklight rounded-22 shadow-lg border border-gray-100 dark:border-dark_border"
                                data-aos="fade-up">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                    <span className="iconify text-3xl" data-icon="ic:round-rocket"></span>
                                </div>
                                <h3 className="font-bold dark:text-white mb-4 text-2xl">Our Mission</h3>
                                <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed">
                                    Helping clients solve problems and achieve business goals efficiently and cost-effectively
                                    through innovative technology and expert consultation.
                                </p>
                            </div>
                            <div className="p-12 bg-white dark:bg-darklight rounded-22 shadow-lg border border-gray-100 dark:border-dark_border"
                                data-aos="fade-up" data-aos-delay="200">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                    <span className="iconify text-3xl" data-icon="ic:round-visibility"></span>
                                </div>
                                <h3 className="font-bold dark:text-white mb-4 text-2xl">Our Vision</h3>
                                <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed">
                                    To be the most trusted technology partner in Africa, empowering organizations with
                                    cutting-edge digital integration and fostering a culture of continuous innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24">
                    <div className="container">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="font-bold dark:text-white text-3xl md:text-4xl">Our Core Values</h2>
                            <p className="text-SlateBlueText dark:text-darktext max-w-2xl mx-auto mt-4 text-lg">
                                The principles that guide everything we do.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Value 1: Innovation */}
                            <div className="text-center p-8 space-y-4" data-aos="zoom-in" data-aos-delay="0">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                                    <span className="iconify text-4xl" data-icon="ic:round-lightbulb"></span>
                                </div>
                                <h4 className="font-bold dark:text-white text-xl">Innovation</h4>
                                <p className="text-SlateBlueText dark:text-darktext">Constantly pushing boundaries to find better ways.</p>
                            </div>
                            {/* Value 2: Excellence */}
                            <div className="text-center p-8 space-y-4" data-aos="zoom-in" data-aos-delay="100">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                                    <span className="iconify text-4xl" data-icon="ic:round-star"></span>
                                </div>
                                <h4 className="font-bold dark:text-white text-xl">Excellence</h4>
                                <p className="text-SlateBlueText dark:text-darktext">Delivering the highest quality in every project.</p>
                            </div>
                            {/* Value 3: Collaboration */}
                            <div className="text-center p-8 space-y-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                                    <span className="iconify text-4xl" data-icon="ic:round-groups"></span>
                                </div>
                                <h4 className="font-bold dark:text-white text-xl">Collaboration</h4>
                                <p className="text-SlateBlueText dark:text-darktext">Working together to achieve shared goals.</p>
                            </div>
                            {/* Value 4: Solutions */}
                            <div className="text-center p-8 space-y-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                                    <span className="iconify text-4xl" data-icon="ic:round-settings-suggest"></span>
                                </div>
                                <h4 className="font-bold dark:text-white text-xl">Solutions</h4>
                                <p className="text-SlateBlueText dark:text-darktext">Tailored approaches for unique business needs.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}