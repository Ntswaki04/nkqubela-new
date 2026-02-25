/* eslint-disable react-hooks/immutability */
"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type SwiperType from 'swiper';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

interface SolutionsCarouselProps {
    swiperInstance: React.MutableRefObject<{
        conference?: SwiperType;
        highlight?: SwiperType;
        testimonial?: SwiperType;
    }>;
}

export default function SolutionsCarousel({ swiperInstance }: SolutionsCarouselProps) {
    const swiperRef = useRef<HTMLDivElement>(null);
    const localSwiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (swiperRef.current && !localSwiperRef.current) {
            const swiper = new Swiper('.conferenceSwiper', {
                modules: [Pagination, Autoplay],
                loop: true,
                autoplay: { delay: 3000 },
                pagination: { el: '.swiper-pagination', clickable: true },
            });

            localSwiperRef.current = swiper;

            if (swiperInstance.current) {
                swiperInstance.current.conference = swiper;
            }
        }

        return () => {
            if (localSwiperRef.current) {
                localSwiperRef.current.destroy();
                localSwiperRef.current = null;

                if (swiperInstance.current) {
                    swiperInstance.current.conference = undefined;
                }
            }
        };
    }, [swiperInstance]);

    return (
        <section className="bg-IcyBreeze dark:bg-darklight py-12 md:py-16">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-12">
                    {/* Left Column - Carousel */}
                    <div className="order-2 lg:order-1" data-aos="zoom-in">
                        <div
                            ref={swiperRef}
                            className="swiper conferenceSwiper rounded-xl shadow-lg overflow-hidden border-4 border-white dark:border-dark_border"
                            style={{ height: '280px' }}
                        >
                            <div className="swiper-wrapper" style={{ height: '100%' }}>
                                <div className="swiper-slide" style={{ height: '100%' }}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/hero/hero.png"
                                            alt="Hero"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ height: '100%' }}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/hero/hero-man.png"
                                            alt="Hero Man"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ height: '100%' }}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/hero/hero-woman.png"
                                            alt="Hero Woman"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 space-y-4" data-aos="fade-left">
                        <h2 className="font-bold dark:text-white leading-tight text-xl md:text-2xl lg:text-3xl">
                            Leading Systems Integration Experts
                        </h2>
                        <p className="text-sm text-SlateBlueText dark:text-darktext leading-relaxed">
                            As a leading systems integrator with over 20 years of experience, we provide customised
                            solutions that help our clients solve complex problems and achieve their business goals.
                        </p>
                        <div className="space-y-2 pt-2">
                            {[
                                "ICT Resourcing & Software Solutions",
                                "Serverroom & Infrastructure Facilities",
                                "Electronic Security & Connectivity"
                            ].map((text, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="iconify text-xs" data-icon="ic:round-check"></span>
                                    </span>
                                    <span className="text-MidnightNavyText dark:text-white font-medium text-xs sm:text-sm">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}