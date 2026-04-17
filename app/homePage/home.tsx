// app/homePage/home.tsx
"use client";

import { useEffect, useRef, useState, Suspense } from 'react';
import type SwiperType from 'swiper';
import ServicesCarousel from '@/components/sections/Home/ServicesCarousel';
import LeadershipTeam from '@/components/sections/Home/LeadershipTeam';
import CompanyHighlights from '@/components/sections/Home/CompanyHighlights';
import FinalCTA from '@/components/sections/Home/FinalCTA';
import VideoModal from '@/components/VideoModals/VideoModal';
import HeroNew from '@/components/sections/Home/HeroNew';

// Loading fallback for interactive sections
const SectionSkeleton = () => (
    <div className="w-full h-96 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
);

export default function Home() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    // Refs to store Swiper instances for cleanup with proper types
    const swiperInstances = useRef<{
        conference?: SwiperType;
        highlight?: SwiperType;
        testimonial?: SwiperType;
    }>({});

    // Video Modal functions
    const openVideoModal = (url: string) => {
        setVideoUrl(url);
        setIsVideoModalOpen(true);
        document.body.style.overflow = 'hidden';

        // Set iframe src after modal is open
        setTimeout(() => {
            const frame = document.getElementById('videoFrame') as HTMLIFrameElement | null;
            if (frame) {
                frame.src = url;
            }
        }, 100);
    };

    const closeVideoModal = () => {
        const frame = document.getElementById('videoFrame') as HTMLIFrameElement | null;
        if (frame) {
            frame.src = '';
        }
        setIsVideoModalOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <main>
                {/* Hero Section */}
                <HeroNew />

                {/* Services Carousel - Wrapped in Suspense for better SSR streaming */}
                <Suspense fallback={<SectionSkeleton />}>
                    <ServicesCarousel />
                </Suspense>

                {/* Leadership Team */}
                <Suspense fallback={<SectionSkeleton />}>
                    <LeadershipTeam />
                </Suspense>

                {/* Company Highlights */}
                <Suspense fallback={<SectionSkeleton />}>
                    <CompanyHighlights
                        swiperInstance={swiperInstances}
                        openVideoModal={openVideoModal}
                    />
                </Suspense>

                {/* Final CTA */}
                <Suspense fallback={<SectionSkeleton />}>
                    <FinalCTA />
                </Suspense>
            </main>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <VideoModal
                    isOpen={isVideoModalOpen}
                    videoUrl={videoUrl}
                    onClose={closeVideoModal}
                />
            )}
        </>
    );
}