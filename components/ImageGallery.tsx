"use client";

import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ImageGalleryProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openGallery = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, nextImage, prevImage]);

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                        onClick={() => openGallery(index)}
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                    >
                        <div className="relative h-72 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Icon icon="lucide:zoom-in" className="text-white text-3xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={closeGallery}
                >
                    {/* Dynamic Blurred Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={images[currentIndex].src}
                            alt="Background Blur"
                            className="w-full h-full object-cover blur-[100px] scale-110 opacity-60 dark:opacity-40"
                        />
                        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-3xl"></div>
                    </div>

                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[10000] p-2 bg-white/10 rounded-full"
                        onClick={closeGallery}
                    >
                        <Icon icon="lucide:x" className="text-3xl" />
                    </button>

                    <button
                        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-white transition-colors z-[10000] p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        <Icon icon="lucide:chevron-left" className="text-4xl" />
                    </button>

                    <div
                        className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                            />
                        </div>

                        <div className="text-center text-white space-y-2 drop-shadow-lg drop-shadow-black">
                            <p className="text-lg font-bold">{images[currentIndex].alt}</p>
                            <p className="text-sm text-white/80">{currentIndex + 1} / {images.length}</p>
                        </div>
                    </div>

                    <button
                        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-white transition-colors z-[10000] p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        <Icon icon="lucide:chevron-right" className="text-4xl" />
                    </button>

                    {/* thumbnails */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 p-2 bg-black/20 rounded-2xl backdrop-blur-md max-w-[90vw] overflow-x-auto no-scrollbar border border-white/10">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all ${idx === currentIndex ? 'ring-2 ring-primary scale-110' : 'opacity-40 hover:opacity-100'}`}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
