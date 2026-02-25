/* eslint-disable react-hooks/immutability */
"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type SwiperType from 'swiper';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

interface CompanyHighlightsProps {
    swiperInstance: React.MutableRefObject<{
        conference?: SwiperType;
        highlight?: SwiperType;
        testimonial?: SwiperType;
    }>;
    openVideoModal: (url: string) => void;
}

export default function CompanyHighlights({ swiperInstance, openVideoModal }: CompanyHighlightsProps) {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current && !swiperInstance.current.highlight) {
            swiperInstance.current.highlight = new Swiper('.highlightSwiper', {
                modules: [Pagination],
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: { el: '.swiper-pagination', clickable: true },
            });
        }

        // Cleanup
        return () => {
            if (swiperInstance.current.highlight) {
                swiperInstance.current.highlight.destroy();
                swiperInstance.current.highlight = undefined;
            }
        };
    }, [swiperInstance]);

    return (
        <section className="bg-IcyBreeze dark:bg-darklight py-32 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-20">
                    <div className="space-y-8" data-aos="fade-right">
                        <h2 className="font-bold dark:text-white leading-tight">
                            Driving Digital <span className="text-primary text-opacity-100">Excellence</span>
                        </h2>
                        <p className="text-lg text-SlateBlueText dark:text-darktext leading-relaxed">
                            For over two decades, Nkqubela Technologies has been at the forefront of ICT innovation,
                            delivering scalable systems and strategic solutions that empower South African businesses.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="space-y-2">
                                <h3 className="text-primary font-bold">20+</h3>
                                <p className="font-medium dark:text-white">Years Experience</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-primary font-bold">500+</h3>
                                <p className="font-medium dark:text-white">Solutions Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div
                            ref={swiperRef}
                            className="swiper highlightSwiper rounded-22 shadow-2xl overflow-hidden glass p-4"
                        >
                            <div className="swiper-wrapper">
                                <div
                                    className="swiper-slide relative group cursor-pointer"
                                    onClick={() => openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}
                                >
                                    <Image
                                        src="/images/highlight/slide-1.png"
                                        alt="Highlight"
                                        width={800}
                                        height={350}
                                        className="w-full h-[350px] object-cover rounded-14"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <span className="iconify text-3xl" data-icon="ic:round-play-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}