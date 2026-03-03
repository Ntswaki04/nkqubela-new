// sections/CSI/CSIFocusAreas.tsx
"use client";

import { focusAreas } from './csiData';

export default function CSIFocusAreas() {
    return (
        <section className="bg-white dark:bg-darkmode py-24 overflow-hidden">
            <div className="container">

                {/* Section header */}
                <div className="flex items-center gap-3 mb-10" data-aos="fade-up">
                    <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: '#072B61' }} />
                    <h2 className="text-3xl font-bold dark:text-white">Our Focus Areas</h2>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700" data-aos="fade-up">
                    {focusAreas.map((area, i) => (
                        <div
                            key={area.title}
                            className="flex items-stretch border-b border-gray-200 dark:border-gray-700 transition-colors duration-200"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                        >
                            {/* Label column — desktop only */}
                            <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
                                <span className="text-base font-semibold dark:text-white">
                                    {area.title}
                                </span>
                            </div>

                            {/* Value column */}
                            <div className="flex-1 flex items-center py-7 px-6 md:pl-10">
                                {/* Mobile label */}
                                <div className="md:hidden text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                    {area.title}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}