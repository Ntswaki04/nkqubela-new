// src/components/Home/ServicesCarousel/index.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Define TypeScript interfaces
interface Service {
    id: number;
    text: string;
    author: string;
    role: string;
    image: string;
}

interface ServicesCarouselProps {
    services?: Service[];
    autoPlayInterval?: number;
}

export default function ServicesCarousel({
    services: propServices,
    autoPlayInterval = 5000,
}: ServicesCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // Default services with your actual image paths
    const defaultServices: Service[] = [
        {
            id: 1,
            text: "The atmosphere was always relaxed, creative, and full of trust — you can just tell how passionate he is about photography. The resulting pictures are not only beautiful, but also convey emotion, personality, and genuine moments.",
            author: "Darleen Muffler",
            role: "MODEL",
            image: "/images/testimonials/building-globe.png",
        },
        {
            id: 2,
            text: "Absolutely stunning work! The attention to detail was incredible. The photographer captured the essence of our brand perfectly and made the entire process seamless from start to finish.",
            author: "Janine Vetsch",
            role: "CREATIVE DIRECTOR",
            image: "/images/testimonials/computer-lab.png",
        },
        {
            id: 3,
            text: "Working with this team was a pleasure from start to finish. They understood our vision and delivered beyond expectations. The final images exceeded everything we hoped for.",
            author: "Anthea and Sakis",
            role: "HAPPY COUPLE",
            image: "/images/testimonials/computer.png",
        },
    ];

    const services = propServices || defaultServices;

    // Create extended arrays to ensure we always have visible content
    const createExtendedColumn = (basePattern: string[], slideIndex: number) => {
        // Create an array with 9 items (3 visible + 3 above + 3 below) for continuous scrolling
        const extended = [];

        // Add 3 items before (for scrolling up)
        extended.push("pattern", "pattern", "pattern");

        // Add the 3 current items
        extended.push(...basePattern);

        // Add 3 items after (for scrolling down)
        extended.push("pattern", "pattern", "pattern");

        return extended;
    };

    // Define the exact 3-item base pattern for each slide
    const getBaseSlidePattern = (slideIndex: number) => {
        switch (slideIndex) {
            case 0: // SLIDE 1 - Image in middle of right column
                return {
                    left: ["pattern", "image", "pattern"],
                    right: ["pattern", "pattern", "image"],
                };
            case 1: // SLIDE 2 - Image in middle (center position)
                return {
                    left: ["pattern", "image", "pattern"],
                    right: ["pattern", "pattern", "pattern"],
                };
            case 2: // SLIDE 3 - Image in middle of right column
                return {
                    left: ["pattern", "pattern", "image"],
                    right: ["pattern", "image", "pattern"],
                };
            default:
                return {
                    left: ["pattern", "pattern", "pattern"],
                    right: ["pattern", "pattern", "pattern"],
                };
        }
    };

    // Get extended patterns with extra items for scrolling
    const getSlidePattern = (slideIndex: number) => {
        const base = getBaseSlidePattern(slideIndex);
        return {
            left: createExtendedColumn(base.left, slideIndex),
            right: createExtendedColumn(base.right, slideIndex),
        };
    };

    // Calculate transforms - we need to show the middle 3 items (indexes 3, 4, 5)
    const getLeftColumnTransform = (): string => {
        const itemHeight = 216; // 200px + 16px gap
        // Start position shows items 3, 4, 5 (middle of 9 items)
        const baseOffset = itemHeight * 3;

        // Adjust based on current slide
        let offset = baseOffset;

        if (currentIndex === 0) {
            // Slide 1: Pattern columns, image on right, move UP
            offset = baseOffset - itemHeight;
        } else if (currentIndex === 1) {
            // Slide 2: Image in middle of left column, NO MOVEMENT (center position)
            offset = baseOffset; // Stay centered
        } else if (currentIndex === 2) {
            // Slide 3: Pattern columns, image on right, move DOWN (opposite of slide 1)
            offset = baseOffset + itemHeight;
        }

        return `translateY(-${offset}px)`;
    };

    const getRightColumnTransform = (): string => {
        const itemHeight = 216;
        const baseOffset = itemHeight * 3;

        let offset = baseOffset;

        if (currentIndex === 0) {
            // Slide 1: Image in middle of right column, move DOWN
            offset = baseOffset + itemHeight;
        } else if (currentIndex === 1) {
            // Slide 2: Pattern columns, image on left, NO MOVEMENT (center position)
            offset = baseOffset; // Stay centered
        } else if (currentIndex === 2) {
            // Slide 3: Image in middle of right column, move UP (opposite of slide 1)
            offset = baseOffset - itemHeight;
        }

        return `translateY(-${offset}px)`;
    };

    // Auto-play functionality
    useEffect(() => {
        if (services.length <= 1) return;

        const interval = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, services.length, autoPlayInterval]);

    const handleNavigation = useCallback(
        (index: number): void => {
            if (isAnimating || index === currentIndex) return;

            setIsAnimating(true);
            setCurrentIndex(index);

            setTimeout(() => {
                setIsAnimating(false);
            }, 700);
        },
        [currentIndex, isAnimating],
    );

    const handlePrev = useCallback((): void => {
        const newIndex =
            currentIndex === 0 ? services.length - 1 : currentIndex - 1;
        handleNavigation(newIndex);
    }, [currentIndex, services.length, handleNavigation]);

    const handleNext = useCallback((): void => {
        const newIndex =
            currentIndex === services.length - 1 ? 0 : currentIndex + 1;
        handleNavigation(newIndex);
    }, [currentIndex, services.length, handleNavigation]);

    // Render pattern box
    const PatternBox = ({ className = "" }: { className?: string }) => (
        <div
            className={`relative bg-gray-100 dark:bg-gray-800/50 w-full h-40 lg:h-44 border border-gray-200/70 dark:border-gray-800 rounded-lg lg:rounded-xl overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 text-sm">
                    Pattern
                </span>
            </div>
        </div>
    );

    // Render image box
    const ImageBox = ({
        service,
        className = "",
    }: {
        service: Service;
        className?: string;
    }) => (
        <div
            className={`relative w-full h-40 lg:h-44 rounded-lg lg:rounded-xl overflow-hidden ring-2 ring-primary dark:ring-primary-light ${className}`}
        >
            <Image
                src={service.image}
                alt={service.author}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-semibold">{service.author}</p>
                <p className="text-white/80 text-xs">{service.role}</p>
            </div>
        </div>
    );

    // Get current slide pattern (extended version)
    const currentPattern = getSlidePattern(currentIndex);

    return (
        <section
            className="scroll-mt-24 bg-section dark:bg-darklight py-16 lg:py-20"
            id="services"
        >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="relative">
                    {/* Main Content Grid - Text on RIGHT side */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        {/* LEFT COLUMN: Image Gallery (7 columns on desktop) */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            {/* Dual Column Gallery Container - Increased height for scrolling */}
                            <div className="flex w-full gap-3 lg:gap-4 justify-center overflow-hidden h-[280px] lg:h-[500px]">
                                {/* LEFT GALLERY COLUMN - 9 items total */}
                                <div className="relative w-full max-w-[150px] lg:max-w-[140px]">
                                    <div
                                        className="relative w-full flex flex-col gap-3 lg:gap-4 transition-transform duration-700 ease-in-out"
                                        style={{ transform: getLeftColumnTransform() }}
                                    >
                                        {currentPattern.left.map((item, index) => (
                                            <div key={`left-${currentIndex}-${index}`}>
                                                {item === "image" ? (
                                                    <ImageBox service={services[currentIndex]} />
                                                ) : (
                                                    <PatternBox />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT GALLERY COLUMN - 9 items total */}
                                <div className="relative w-full max-w-[150px] lg:max-w-[140px]">
                                    <div
                                        className="flex w-full flex-col gap-3 lg:gap-4 transition-transform duration-700 ease-in-out"
                                        style={{ transform: getRightColumnTransform() }}
                                    >
                                        {currentPattern.right.map((item, index) => (
                                            <div key={`right-${currentIndex}-${index}`}>
                                                {item === "image" ? (
                                                    <ImageBox service={services[currentIndex]} />
                                                ) : (
                                                    <PatternBox />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Current service indicator */}
                            <div className="flex justify-center mt-4">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {currentIndex + 1} / {services.length}
                                </span>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Text Content (5 columns on desktop) */}
                        <div className="lg:col-span-5 order-1 lg:order-2">
                            <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out h-full"
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                        width: `${services.length * 100}%`,
                                    }}
                                >
                                    {services.map((service) => (
                                        <div
                                            key={service.id}
                                            className="w-full flex-shrink-0 p-4 lg:p-6 flex flex-col justify-center h-full"
                                        >
                                            {/* Service Text */}
                                            <blockquote className="text-lg lg:text-xl leading-relaxed italic text-gray-800 dark:text-gray-200 mb-6 lg:mb-8">
                                                "{service.text}"
                                            </blockquote>

                                            {/* Author Info */}
                                            <div className="mt-auto">
                                                <p className="font-bold text-xl lg:text-2xl text-SlateBlueText dark:text-white">
                                                    {service.author}
                                                </p>
                                                <p className="text-base text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-1">
                                                    {service.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex flex-col items-center mt-8 lg:mt-10">
                        {/* Navigation Dots */}
                        <div className="flex gap-2 mb-4">
                            {services.map((_, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigation(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-primary dark:bg-primary-light scale-110"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                                        }`}
                                    aria-label={`View service from ${services[index].author}`}
                                    disabled={isAnimating}
                                />
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrev}
                                className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Previous service"
                                disabled={services.length <= 1 || isAnimating}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleNext}
                                className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Next service"
                                disabled={services.length <= 1 || isAnimating}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}