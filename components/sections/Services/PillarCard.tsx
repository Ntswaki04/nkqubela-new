// sections/Services/PillarCard.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Pillar } from './PillarData';

interface PillarCardProps {
    pillar: Pillar;
    index: number;
    isDark: boolean;
}

export default function PillarCard({ pillar, index, isDark }: PillarCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const hoverColour = isDark ? '#ffffff' : '#072B61';

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            id={pillar.id}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${index * 0.07}s, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${index * 0.07}s`,
            }}
        >
            {/* Pillar heading row */}
            <div className="flex items-center gap-3 py-5 border-t border-gray-200 dark:border-gray-700">
                <div className="w-1.5 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#072B61' }} />
                <h3 className="text-xl font-bold dark:text-white">{pillar.title}</h3>
            </div>

            {/* Service item rows */}
            {pillar.items.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-stretch border-t border-gray-200 dark:border-gray-700 transition-colors duration-200 cursor-default"
                    style={{
                        backgroundColor: hoveredItem === idx
                            ? (isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb')
                            : 'transparent'
                    }}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {/* Icon panel (left) */}
                    <div className="hidden sm:flex w-36 lg:w-44 flex-shrink-0 items-center justify-center border-r border-gray-200 dark:border-gray-700 py-8 px-4">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                            style={{
                                backgroundColor: hoveredItem === idx
                                    ? '#072B61'
                                    : (isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6'),
                                color: hoveredItem === idx
                                    ? '#ffffff'
                                    : (isDark ? '#9ca3af' : '#6b7280'),
                                transform: hoveredItem === idx ? 'scale(1.08)' : 'scale(1)',
                            }}
                        >
                            <Icon icon={item.icon} className="text-2xl" />
                        </div>
                    </div>

                    {/* Content (right) */}
                    <div className="flex-1 flex items-center justify-between py-8 px-6 md:pl-8 gap-4">
                        <div className="space-y-1.5">
                            {/* Mobile icon */}
                            <div className="sm:hidden flex items-center gap-2 mb-2">
                                <Icon
                                    icon={item.icon}
                                    className="text-xl"
                                    style={{ color: hoveredItem === idx ? hoverColour : '#9ca3af' }}
                                />
                            </div>
                            <h4
                                className="text-lg font-bold leading-tight transition-colors duration-200 dark:text-white"
                                style={{ color: hoveredItem === idx ? hoverColour : undefined }}
                            >
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                                {item.desc}
                            </p>
                        </div>

                        {/* Arrow button */}
                        <div
                            className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
                            style={{
                                backgroundColor: hoveredItem === idx ? '#072B61' : 'transparent',
                                color: hoveredItem === idx ? '#ffffff' : '#9ca3af',
                                transform: hoveredItem === idx ? 'scale(1.12)' : 'scale(1)',
                                border: hoveredItem === idx
                                    ? 'none'
                                    : `1.5px solid ${isDark ? '#374151' : '#d1d5db'}`,
                            }}
                        >
                            <Icon icon="ic:round-arrow-forward" className="text-base" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}