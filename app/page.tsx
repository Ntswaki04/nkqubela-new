// app/page.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import type SwiperType from 'swiper';
import ServicesCarousel from '@/components/sections/Home/ServicesCarousel';
import LeadershipTeam from '@/components/sections/Home/LeadershipTeam';
import CompanyHighlights from '@/components/sections/Home/CompanyHighlights';
import Testimonials from '@/components/sections/Home/Testimonials';
import FinalCTA from '@/components/sections/Home/FinalCTA';
import VideoModal from '@/components/VideoModals/VideoModal';
import HeroNew from '@/components/sections/Home/HeroNew';

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    // Refs to store Swiper instances for cleanup with proper types
    const swiperInstances = useRef<{
        conference?: SwiperType;
        highlight?: SwiperType;
        testimonial?: SwiperType;
    }>({});

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);
    }, []);

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

    // Don't render anything until client-side to prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-primary">Loading...</p>
                </div>
            </div>
        );
    }

    // app/page.tsx (just the return section)
    return (
        <>
            <main>
                {/* Hero Section */}
                <HeroNew />

                {/* Services Carousel - New Component */}
                <ServicesCarousel />

                {/* Solutions Carousel */}
                {/*<SolutionsCarousel swiperInstance={swiperInstances} />*/}

                {/* Leadership Team */}
                <LeadershipTeam />

                {/* Company Highlights */}
                <CompanyHighlights
                    swiperInstance={swiperInstances}
                    openVideoModal={openVideoModal}
                />

                {/* Testimonials */}
                <Testimonials swiperInstance={swiperInstances} />

                {/* Final CTA */}
                <FinalCTA />
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