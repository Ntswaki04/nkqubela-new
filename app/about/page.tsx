// app/about/page.tsx
"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
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
                    alt="Our Story"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-aos="fade-up">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="100">
                        Over 20 years of delivering excellence in systems integration and ICT solutions.
                    </p>
                </div>
            </section>

            {/* Our Story / Get to Know Us */}
            <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-20">
                        <div className="space-y-8" data-aos="fade-right">
                            <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Get to Know Us</span>
                            </div>
                            <h2 className="text-5xl font-bold dark:text-white leading-tight">
                                Simplifying <br />
                                Complexity for Two <br />
                                Decades
                            </h2>

                            <div className="space-y-6 text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                                <p>
                                    Nkqubela Technologies is a leading systems integrator with a deep-rooted history
                                    of helping clients navigate the complex landscape of information technology.
                                    Since our inception, we have been committed to delivering high-quality,
                                    scalable solutions that drive business growth.
                                </p>
                                <p>
                                    Based in South Africa, we have grown from a specialized ICT resourcing firm
                                    into a full-scale technology partner, providing everything from software
                                    development and information security to infrastructure management.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/get to know us.png"
                                alt="Get to Know Us"
                                className="w-full h-auto rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-20">
                        <div data-aos="fade-right">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/vision.png"
                                alt="Our Vision"
                                className="w-full h-auto rounded-[2rem] shadow-2xl"
                            />
                        </div>
                        <div className="space-y-8" data-aos="fade-left">
                            <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Vision</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold dark:text-white leading-tight">Vision</h2>
                            <p className="text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                                Our vision is to pioneer excellence in systems integration, redefining industry standards and
                                setting new benchmarks for seamless connectivity and optimized functionality. Through
                                innovation, strategic partnerships, and a relentless pursuit of excellence, we aim to
                                revolutionize the landscape of system integration, delivering unparalleled value to our
                                clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-20">
                        <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right">
                            <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Mission</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold dark:text-white leading-tight uppercase">MISSION</h2>
                            <p className="text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                                At Nkqubela Technologies, our mission is to embody our core values of innovation, disruption,
                                and agility. By aligning our resources strategically, we optimize the quality of our
                                end-products and deliver a superior customer service experience. We foster a culture of
                                creativity and forward-thinking, challenging norms, and adapting swiftly to evolving needs.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/mission.png"
                                alt="Our Mission"
                                className="w-full h-auto rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
                <div className="container px-4">
                    <div className="mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Our Core Values</h2>
                        <p className="text-SlateBlueText dark:text-darktext text-xl">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    <div className="value-card-container">
                        {[
                            {
                                title: 'Innovation',
                                desc: 'We foster a culture of continuous innovation, constantly exploring new technologies and ideas to deliver the best solutions for our clients.',
                                image: '/images/about us hands 2.jpg'
                            },
                            {
                                title: 'Collaboration',
                                desc: 'We believe in the power of collaboration, working closely with our clients to understand their unique needs and create tailored solutions.',
                                image: '/images/about us1.jpg'
                            },
                            {
                                title: 'Solutions',
                                desc: 'We deliver innovative, end-to-end solutions that empower businesses to overcome complex challenges and drive sustainable growth through cutting-edge technology.',
                                image: '/images/about us 3.png'
                            },
                        ].map((val, i) => (
                            <div
                                key={val.title}
                                className="value-card-pill"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <div className="value-card-image-wrapper">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={val.image} alt={val.title} />
                                </div>
                                <div className="value-card-content">
                                    <h3 className="value-card-title">{val.title}</h3>
                                    <p className="value-card-description">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="py-24">
                <div className="container">
                    <div className="bg-primary rounded-22 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-white font-bold max-w-2xl mx-auto leading-tight">
                                Let's Build Something Great Together
                            </h2>
                            <p className="text-white/80 text-xl max-w-xl mx-auto">
                                Partner with Nkqubela Technologies for cutting-edge ICT solutions.
                            </p>
                            <Link
                                href="/contact"
                                className="bg-white text-primary px-10 py-4 font-bold rounded-lg hover:bg-IcyBreeze transition-colors shadow-xl inline-block"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    );
}