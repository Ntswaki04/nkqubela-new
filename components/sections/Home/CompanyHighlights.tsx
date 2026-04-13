/* eslint-disable react-hooks/immutability */
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type SwiperType from "swiper";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

interface CompanyHighlightsProps {
  swiperInstance: React.MutableRefObject<{
    conference?: SwiperType;
    highlight?: SwiperType;
    testimonial?: SwiperType;
  }>;
  openVideoModal: (url: string) => void;
}

export default function CompanyHighlights({
  swiperInstance,
  openVideoModal,
}: CompanyHighlightsProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current.highlight) {
      swiperInstance.current.highlight = new Swiper(".highlightSwiper", {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: { el: ".swiper-pagination", clickable: true },
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
    <section className="bg-IcyBreeze dark:bg-darklight py-12 lg:py-20 overflow-hidden relative">
      {/* Blending gradient from leadership section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-darkmode to-transparent dark:to-transparent pointer-events-none"></div>
      <div className="container relative z-10 px-4 sm:px-6 pt-8 lg:pt-10">
        <div className="grid lg:grid-cols-2 items-stretch gap-8 sm:gap-10 lg:gap-20">
          <div
            className="order-2 lg:order-1 min-w-0 w-full space-y-5 sm:space-y-6 lg:space-y-8 rounded-[28px] bg-white/80 px-4 py-6 sm:px-7 sm:py-8 text-center lg:text-left shadow-lg ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Driving Digital{" "}
              <span className="text-primary text-opacity-100">Excellence</span>
            </h2>
            <p className="mx-auto lg:mx-0 text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              For over two decades, Nkqubela Technologies has been at the
              forefront of ICT innovation, delivering scalable systems and
              strategic solutions that empower South African businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2 sm:pt-4 lg:pt-6">
              <div className="min-w-0 space-y-1 rounded-22 bg-white px-4 sm:px-5 py-4 text-left shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                <h3 className="text-2xl sm:text-3xl text-primary font-bold">
                  20+
                </h3>
                <p className="font-medium text-gray-800 dark:text-white">
                  Years Experience
                </p>
              </div>
              <div className="min-w-0 space-y-1 rounded-22 bg-white px-4 sm:px-5 py-4 text-left shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                <h3 className="text-2xl sm:text-3xl text-primary font-bold">
                  500+
                </h3>
                <p className="font-medium text-gray-800 dark:text-white">
                  Solutions Delivered
                </p>
              </div>
            </div>
          </div>
          <div
            className="order-1 lg:order-2 relative min-w-0 w-full max-w-full sm:max-w-2xl mx-auto lg:h-full"
            data-aos="fade-left"
          >
            <div
              ref={swiperRef}
              className="swiper highlightSwiper w-full max-w-full rounded-[28px] shadow-2xl overflow-hidden glass p-3 sm:p-4 lg:h-full"
            >
              <div className="swiper-wrapper lg:h-full">
                <div
                  className="swiper-slide relative group cursor-pointer lg:h-full"
                  onClick={() =>
                    openVideoModal(
                      "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
                    )
                  }
                >
                  <Image
                    src="/images/highlight/slide-1.png"
                    alt="Highlight"
                    width={800}
                    height={350}
                    className="w-full h-[210px] sm:h-[300px] lg:h-full object-cover rounded-14"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span
                        className="iconify text-xl sm:text-3xl"
                        data-icon="ic:round-play-arrow"
                      ></span>
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
