// sections/Team/TeamMember.tsx
"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    img: string;
    reverse?: boolean; // We are re-adding support for reverse layout
}

export default function TeamMember({ name, role, bio, img, reverse }: TeamMemberProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`group flex flex-col lg:flex-row items-center border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer py-10 md:py-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >

            {/* Image Section */}
            <div
                className={`w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 flex justify-center mb-8 lg:mb-0 ${reverse ? 'lg:pl-12' : 'lg:pr-12'}`}
                data-aos={reverse ? 'fade-left' : 'fade-right'}
            >
                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden relative border-8 border-white dark:border-darklight shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={img}
                        alt={name}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${reverse ? 'scale-x-[-1]' : ''}`}
                        style={reverse ? { transform: 'scaleX(1)' } : {}} // Reset transform if flipped naturally
                    />
                </div>
            </div>

            {/* Content Section */}
            <div
                className={`flex-grow flex flex-col justify-center ${reverse ? 'lg:pl-10 text-center lg:text-right' : 'pr-0 lg:pr-10 text-center lg:text-left'}`}
                data-aos={reverse ? 'fade-right' : 'fade-left'}
                data-aos-delay="100"
            >
                <h3 className="text-3xl md:text-[2.2rem] font-medium text-gray-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors">
                    {name}
                </h3>

                <div className={`text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0 ${reverse ? 'lg:ml-auto' : ''}`}>
                    <p className={`transition-all duration-300 ${isExpanded ? 'whitespace-pre-line' : 'line-clamp-3 lg:line-clamp-2'}`}>
                        {bio}
                    </p>
                </div>

                <div className={`text-[0.65rem] md:text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2 flex items-center justify-center lg:justify-start gap-2 ${reverse ? 'lg:justify-end' : ''}`}>
                    <span>{role}</span>
                    {/* <span className="opacity-40">/</span>
                    <span className="text-gray-600 dark:text-gray-300">Xhanti</span> */}
                </div>
            </div>

            {/* Right Arrow Box */}
            <div
                className={`hidden lg:flex flex-shrink-0 items-center justify-center ${reverse ? 'mr-auto pr-6' : 'ml-auto pl-6'}`}
                data-aos={reverse ? 'fade-right' : 'fade-left'}
            >
                <div className="w-14 h-14 border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors group-hover:border-gray-400 dark:group-hover:border-gray-500 bg-white dark:bg-darkmode group-hover:bg-[#072B61] dark:group-hover:bg-primary group-hover:text-white">
                    <Icon
                        icon="lucide:chevron-right"
                        className={`text-gray-400 dark:text-gray-500 text-xl transition-all duration-300 group-hover:text-white ${isExpanded ? 'rotate-90' : ''} ${reverse && !isExpanded ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
}