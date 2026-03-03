// sections/Contact/ContactInfoTable.tsx
"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { contactDetails } from './contactData';

interface ContactInfoTableProps {
    isDark: boolean;
}

export default function ContactInfoTable({ isDark }: ContactInfoTableProps) {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);

    return (
        <div data-aos="fade-up" className="mb-20">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                <h2 className="text-3xl font-bold dark:text-white">Get In Touch</h2>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700">
                {contactDetails.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-stretch border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
                        style={{
                            backgroundColor: hoveredRow === item.label
                                ? (isDark ? 'rgba(255,255,255,0.05)' : '#f8f9fc')
                                : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredRow(item.label)}
                        onMouseLeave={() => setHoveredRow(null)}
                    >
                        {/* Label column — desktop only */}
                        <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
                            <span
                                className="text-base font-semibold transition-colors duration-200"
                                style={{
                                    color: hoveredRow === item.label
                                        ? (isDark ? '#ffffff' : '#072B61')
                                        : undefined,
                                    fontFamily: 'var(--font-dm-sans), sans-serif'
                                }}
                            >
                                {item.label}
                            </span>
                        </div>

                        {/* Value column */}
                        <div className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10 gap-4">
                            <div className="space-y-1">
                                {/* Mobile label */}
                                <span
                                    className="md:hidden inline-block text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-200"
                                    style={{
                                        color: hoveredRow === item.label
                                            ? (isDark ? '#ffffff' : '#072B61')
                                            : '#6b7280'
                                    }}
                                >
                                    {item.label}
                                </span>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200 block"
                                        style={{
                                            color: hoveredRow === item.label
                                                ? (isDark ? '#ffffff' : '#072B61')
                                                : undefined
                                        }}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p
                                        className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200 dark:text-white"
                                        style={{
                                            color: hoveredRow === item.label
                                                ? (isDark ? '#ffffff' : '#072B61')
                                                : undefined
                                        }}
                                    >
                                        {item.value}
                                    </p>
                                )}
                            </div>

                            {/* Arrow icon */}
                            <div
                                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
                                style={{
                                    backgroundColor: hoveredRow === item.label ? '#072B61' : 'transparent',
                                    color: hoveredRow === item.label ? '#ffffff' : '#9ca3af',
                                    transform: hoveredRow === item.label ? 'scale(1.1)' : 'scale(1)'
                                }}
                            >
                                <Icon icon="ic:round-arrow-forward" className="text-xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}