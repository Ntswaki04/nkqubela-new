/* eslint-disable react-hooks/immutability */
"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type SwiperType from 'swiper';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

interface TestimonialsProps {
  swiperInstance: React.MutableRefObject<{
    conference?: SwiperType;
    highlight?: SwiperType;
    testimonial?: SwiperType;
  }>;
}

export default function Testimonials({ swiperInstance }: TestimonialsProps) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const localSwiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && !localSwiperRef.current) {
      const swiper = new Swiper('.testimonialSwiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        speed: 800,
        autoplay: { delay: 5000 },
        pagination: { el: '.swiper-pagination', clickable: true },
      });
      
      localSwiperRef.current = swiper;
      
      // Safely update the parent ref without triggering ESLint
      if (swiperInstance.current) {
        swiperInstance.current.testimonial = swiper;
      }
    }

    // Cleanup
    return () => {
      if (localSwiperRef.current) {
        localSwiperRef.current.destroy();
        localSwiperRef.current = null;
        
        // Safely clear the parent ref
        if (swiperInstance.current) {
          swiperInstance.current.testimonial = undefined;
        }
      }
    };
  }, [swiperInstance]);

  return (
    <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-bold dark:text-white">What Our Clients Say</h2>
        </div>
        <div 
          ref={swiperRef}
          className="swiper testimonialSwiper"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
                <div className="text-YellowRating flex justify-center text-2xl gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="iconify" data-icon="ic:round-star"></span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium italic dark:text-white leading-relaxed">
                  Nkqubela Technologies provided us with a seamless systems integration that
                  significantly improved our operational efficiency. Their expertise is unmatched.
                </h3>
                <div className="flex items-center justify-center gap-4 pt-6">
                  <Image
                    src="/images/upcoming/profile-1.png"
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-4 border-primary/20"
                  />
                  <div className="text-left">
                    <h4 className="font-bold dark:text-white text-lg">Phumzile Mthembu</h4>
                    <p className="text-SlateBlueText dark:text-darktext">Operations Manager @ Corporate SA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination !bottom-0"></div>
        </div>
      </div>
    </section>
  );
}