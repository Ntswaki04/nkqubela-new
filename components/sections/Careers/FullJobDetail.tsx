// sections/Careers/FullJobDetail.tsx
"use client";

import { Icon } from '@iconify/react';
import { Job } from './Jobdata';

interface FullJobDetailProps {
    job: Job;
    onBack: () => void;
}

export default function FullJobDetail({ job, onBack }: FullJobDetailProps) {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto mb-20 px-6 sm:px-10 py-10 md:py-16 text-gray-900 dark:text-gray-100 font-sans">

            {/* Top Navigation */}
            <div className="mb-8">
                <button
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors uppercase tracking-widest"
                >
                    <Icon icon="ic:round-arrow-back" className="text-lg group-hover:-translate-x-1 transition-transform" />
                    Back to open roles
                </button>
            </div>

            {/* Header Section */}
            <div className="mb-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    <span>{job.location}</span>
                    <span className="opacity-30">/</span>
                    <span>{job.type}</span>
                </div>

                <h1 className="text-5xl md:text-[4.5rem] font-bold leading-tight mb-6 tracking-tighter">
                    {job.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-normal max-w-3xl">
                    Lead our brand and sales operations into the next generation. We are looking for a strategic leader to define and execute our growth roadmap.
                </p>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-100 dark:border-gray-800 mb-12" />

            {/* Content Sections */}
            <div className="space-y-16">

                {/* About the Position (Job Purpose) */}
                <section>
                    <h2 className="text-3xl md:text-[2rem] font-bold mb-6 tracking-tight">About the position</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                            The Head of Sales and Marketing is responsible for developing and implementing the overall sales and marketing strategy to drive revenue growth, market share expansion, and brand positioning. This role provides strategic leadership to the sales and marketing teams, ensuring alignment with business goals and customer needs.
                        </p>
                    </div>
                </section>

                {/* Info Grid */}
                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 border-y border-gray-100 dark:border-gray-800">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Department</h4>
                        <p className="text-lg font-bold">Sales & Marketing</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Reports To</h4>
                        <p className="text-lg font-bold">Chief Executive Officer</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                        <p className="text-lg font-bold">Head Office (East London)</p>
                    </div>
                </section>

                {/* Job responsibilities */}
                <section>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                        <h2 className="text-3xl font-bold dark:text-white">Job responsibilities</h2>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700">
                        {[
                            {
                                title: 'Strategic Leadership',
                                items: [
                                    'Develop and execute integrated sales and marketing strategies to achieve business objectives.',
                                    'Conduct regular market analysis to identify trends, customer needs, and competitive positioning.',
                                    'Drive strategic planning for product launches, campaigns, and sales growth initiatives.',
                                    'Oversee brand management and ensure consistency in messaging across all channels.'
                                ]
                            },
                            {
                                title: 'Sales Management',
                                items: [
                                    'Set sales targets and KPIs and ensure the team meets or exceeds them.',
                                    'Lead and support the sales team in pipeline development, negotiations, and closing key deals.',
                                    'Monitor sales performance, produce reports, and adjust tactics where necessary.',
                                    'Establish and manage customer relationship strategies to drive retention and satisfaction.'
                                ]
                            },
                            {
                                title: 'Marketing Management',
                                items: [
                                    'Lead the marketing team in the development and execution of campaigns (digital, print, events, etc.).',
                                    'Manage digital marketing efforts, including search engine optimization (SEO), social media, and email marketing.',
                                    'Coordinate market research and customer feedback to refine product offerings and messaging.',
                                    'Develop and manage the marketing budget, ensuring cost-effective execution.'
                                ]
                            },
                            {
                                title: 'Team Leadership & Development',
                                items: [
                                    'Recruit, mentor, and lead high-performing sales and marketing teams.',
                                    'Provide regular coaching, performance reviews, and professional development opportunities.',
                                    'Foster a results-driven and collaborative culture across departments.'
                                ]
                            }
                        ].map((category, i) => (
                            <div key={i}>
                                {category.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-stretch border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                                    >
                                        {/* Category Label - Only show on desktop and for the first item of the category */}
                                        <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 border-r border-gray-200 dark:border-gray-700">
                                            <span className="text-base font-semibold group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors pr-4">
                                                {idx === 0 ? category.title : ""}
                                            </span>
                                        </div>

                                        {/* Responsibility Value */}
                                        <div className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10">
                                            <div className="space-y-1">
                                                {/* Mobile category label */}
                                                <span className="md:hidden block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                                                    {category.title}
                                                </span>
                                                <p className="text-lg md:text-xl font-bold dark:text-white group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                            <Icon icon="lucide:arrow-right" className="text-gray-300 group-hover:text-[#072B61] transition-colors text-xl flex-shrink-0 ml-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {/* KPIs */}
                <section>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                        <h2 className="text-3xl font-bold dark:text-white">Key Performance Indicators</h2>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700">
                        {[
                            'Revenue growth and market share targets',
                            'Sales conversion rates and pipeline health',
                            'Customer acquisition and retention metrics',
                            'ROI on marketing campaigns',
                            'Brand awareness and engagement metrics'
                        ].map((kpi, i) => (
                            <div
                                key={i}
                                className="flex items-stretch border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                            >
                                <div className="hidden md:flex w-32 lg:w-40 flex-shrink-0 items-center py-7 border-r border-gray-200 dark:border-gray-700">
                                    <span className="text-base font-semibold text-gray-400 group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors">
                                        Metric 0{i + 1}
                                    </span>
                                </div>
                                <div className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10">
                                    <span className="text-lg md:text-xl font-bold dark:text-white group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors">
                                        {kpi}
                                    </span>
                                    <Icon icon="lucide:arrow-right" className="text-gray-300 group-hover:text-[#072B61] transition-colors text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Qualifications */}
                <section>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1.5 h-8 bg-[#072B61] rounded-full"></div>
                        <h2 className="text-3xl font-bold dark:text-white">Qualifications</h2>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700">
                        {[
                            { label: "Bachelor's degree", detail: "in Marketing, Business Administration, or related field" },
                            { label: "8–10 years", detail: "of progressive experience in senior leadership roles" }
                        ].map((q, i) => (
                            <div
                                key={i}
                                className="flex items-stretch border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                            >
                                <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-center py-7 border-r border-gray-200 dark:border-gray-700">
                                    <span className="text-base font-semibold group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors">
                                        {q.label}
                                    </span>
                                </div>
                                <div className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10">
                                    <span className="text-lg md:text-xl font-bold dark:text-white group-hover:text-[#072B61] dark:group-hover:text-primary transition-colors">
                                        {q.detail}
                                    </span>
                                    <Icon icon="lucide:arrow-right" className="text-gray-300 group-hover:text-[#072B61] transition-colors text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* In-detail CTA RESTORED */}
                <div
                    className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
                    style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    data-aos="zoom-in"
                >
                    <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-4 max-w-xl text-center lg:text-left">
                            <h4 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight">
                                Ready to take the <br className="hidden md:block" /> lead?
                            </h4>
                            <div className="space-y-2">
                                <p className="text-lg md:text-xl text-white/90 font-medium">
                                    Reply to{' '}
                                    <a href="mailto:NokwandaB@Nkqubela.co.za" className="text-white underline font-bold hover:text-IcyBreeze transition-colors">
                                        NokwandaB@Nkqubela.co.za
                                    </a>
                                </p>
                                <p className="text-white/80">
                                    Deadline: <span className="font-bold text-white">Monday 15 March 2026</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-end gap-4">
                            <a
                                href="mailto:NokwandaB@Nkqubela.co.za"
                                className="bg-[#07367c] text-white hover:bg-[#07367c]/90 transition-colors px-10 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap text-lg md:text-xl"
                            >
                                Apply via Email
                            </a>
                            <p className="text-sm text-white/70 italic">
                                Questions? Contact Nokwanda Badli – 073 515 0889
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
