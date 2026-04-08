// sections/Careers/CurrentOpenings.tsx
"use client";

import { Icon } from '@iconify/react';
import { Job, groupedJobs } from './Jobdata';

interface CurrentOpeningsProps {
    hoveredJob: string | null;
    isDark: boolean;
    onHover: (title: string | null) => void;
    onSelect: (job: Job) => void;
}

export default function CurrentOpenings({ hoveredJob, isDark, onHover, onSelect }: CurrentOpeningsProps) {
    return (
        <div id="openings" className="pt-20" data-aos="fade-up">
            <h2 className="text-center font-bold dark:text-white mb-4">Current Openings</h2>
            <p className="text-center text-SlateBlueText dark:text-darktext text-lg mb-16 max-w-2xl mx-auto">
                Explore our open positions below. We're always looking for passionate people to join our growing team.
            </p>

            {/* Department Table */}
            <div className="border-t border-gray-200 dark:border-gray-700">
                {groupedJobs.map((group, gIdx) => (
                    <div
                        key={group.department}
                        className="border-b border-gray-200 dark:border-gray-700"
                        data-aos="fade-up"
                        data-aos-delay={gIdx * 80}
                    >
                        {group.jobs.map((job, jIdx) => (
                            <div
                                key={job.title}
                                className={`flex items-stretch border-b border-gray-200 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors duration-200 ${hoveredJob === job.title
                                    ? 'bg-gray-50 dark:bg-darklight'
                                    : 'bg-white dark:bg-transparent'
                                    }`}
                                onClick={() => job.hasDetail && onSelect(job)}
                                onMouseEnter={() => onHover(job.title)}
                                onMouseLeave={() => onHover(null)}
                            >
                                {/* Department label — only show on first job in group */}
                                <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-start pt-7 pb-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
                                    {jIdx === 0 && (
                                        <span
                                            className="text-base font-semibold transition-colors duration-200"
                                            style={{
                                                color: hoveredJob && group.jobs.some(j => j.title === hoveredJob)
                                                    ? (isDark ? '#ffffff' : '#072B61')
                                                    : undefined,
                                                fontFamily: 'var(--font-dm-sans), sans-serif'
                                            }}
                                        >
                                            {group.department}
                                        </span>
                                    )}
                                </div>

                                {/* Job Info */}
                                <div
                                    className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10 gap-4"
                                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                                >
                                    <div className="space-y-1.5">
                                        {/* Mobile: show department */}
                                        {jIdx === 0 && (
                                            <span
                                                className="md:hidden inline-block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-200"
                                                style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
                                            >
                                                {group.department}
                                            </span>
                                        )}
                                        <p
                                            className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200"
                                            style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
                                        >
                                            {job.title}
                                        </p>
                                        <div
                                            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                                            style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
                                        >
                                            <span>{job.location}</span>
                                            <span className="w-px h-3 bg-gray-300 dark:bg-gray-600 hidden sm:inline-block"></span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div
                                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: hoveredJob === job.title ? '#072B61' : 'transparent',
                                            color: hoveredJob === job.title ? '#ffffff' : '#9ca3af',
                                            transform: hoveredJob === job.title ? 'scale(1.1)' : 'scale(1)'
                                        }}
                                    >
                                        <Icon icon="ic:round-arrow-forward" className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8 italic">
                Click on a position with full details to view the complete job description.
            </p>
        </div>
    );
}