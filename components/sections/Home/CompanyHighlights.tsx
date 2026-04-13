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
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-8 lg:pt-10 relative z-10">
        <div className="grid lg:grid-cols-2 items-start gap-8 sm:gap-10 lg:gap-20">
          <div
            className="order-2 lg:order-1 min-w-0 w-full space-y-5 sm:space-y-6 lg:space-y-8 rounded-[28px] bg-white/80 px-4 pt-6 pb-3 sm:px-7 sm:pt-8 sm:pb-4 lg:pt-8 lg:pb-8 text-center shadow-lg ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Driving Digital{" "}
              <span className="text-primary text-opacity-100">Excellence</span>
            </h2>
            <p className="mx-auto text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              For over two decades, Nkqubela Technologies has been at the
              forefront of ICT innovation, delivering scalable systems and
              strategic solutions that empower South African businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2 sm:pt-4 lg:pt-6">
              <div className="min-w-0 space-y-0.5 lg:space-y-1 rounded-22 bg-white px-4 sm:px-5 py-3 lg:py-4 text-center shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                <h3 className="text-2xl lg:text-3xl text-primary font-bold leading-none">
                  20+
                </h3>
                <p className="font-medium leading-snug text-gray-800 dark:text-white">
                  Years Experience
                </p>
              </div>
              <div className="min-w-0 space-y-0.5 lg:space-y-1 rounded-22 bg-white px-4 sm:px-5 py-3 lg:py-4 text-center shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
                <h3 className="text-2xl lg:text-3xl text-primary font-bold leading-none">
                  500+
                </h3>
                <p className="font-medium leading-snug text-gray-800 dark:text-white">
                  Solutions Delivered
                </p>
              </div>
            </div>
          </div>
          <div
            className="order-1 lg:order-2 relative min-w-0 w-full max-w-none"
            data-aos="fade-left"
          >
            <div
              ref={swiperRef}
              className="swiper highlightSwiper w-full max-w-full rounded-[28px] shadow-2xl overflow-hidden glass p-3 sm:p-4"
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide relative group cursor-pointer"
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
                    className="w-full h-[210px] sm:h-[300px] lg:h-[350px] object-cover rounded-14"
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
