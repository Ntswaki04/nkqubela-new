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
        <div className="animate-fade-in px-4 max-w-5xl mx-auto mb-20 bg-white dark:bg-darklight rounded-[2.5rem] p-10 md:p-16 border border-gray-100 dark:border-transparent shadow-2xl">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                <h3 className="text-4xl md:text-6xl font-bold dark:text-white tracking-tight">{job.title}</h3>
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all"
                >
                    <Icon icon="ic:round-arrow-back" /> Back to open roles
                </button>
            </div>

            <div className="space-y-16 text-gray-700 dark:text-gray-300">

                {/* Meta Grid */}
                <div className="grid md:grid-cols-2 gap-12 pb-12 border-b dark:border-gray-800 border-gray-100">
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Department</p>
                        <p className="text-xl font-bold dark:text-white">Sales and Marketing</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Reports To</p>
                        <p className="text-xl font-bold dark:text-white">Chief Executive Officer</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Location</p>
                        <p className="text-xl font-bold dark:text-white">Head Office (East London)</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Job Type</p>
                        <p className="text-xl font-bold dark:text-white">Full-Time / Limited Duration Contract</p>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Job Purpose */}
                    <section className="space-y-6">
                        <h4 className="text-3xl font-bold dark:text-white flex items-center gap-3">
                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                            Job Purpose
                        </h4>
                        <p className="text-xl leading-relaxed font-medium">
                            The Head of Sales and Marketing is responsible for developing and implementing the overall
                            sales and marketing strategy to drive revenue growth, market share expansion, and brand
                            positioning. This role provides strategic leadership to the sales and marketing teams,
                            ensuring alignment with business goals and customer needs.
                        </p>
                    </section>

                    {/* Key Responsibilities */}
                    <section className="space-y-8">
                        <h4 className="text-3xl font-bold dark:text-white flex items-center gap-3">
                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                            Key Responsibilities
                        </h4>
                        <div className="grid gap-10">
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
                            ].map((box) => (
                                <div key={box.title} className="p-8 rounded-22 bg-gray-50 dark:bg-darkmode border border-gray-100 dark:border-transparent transition-all hover:shadow-lg">
                                    <h5 className="text-xl font-bold dark:text-white mb-6 text-primary uppercase tracking-tight">{box.title}</h5>
                                    <ul className="space-y-4">
                                        {box.items.map((li, idx) => (
                                            <li key={idx} className="flex gap-4 items-start">
                                                <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <p className="font-medium">{li}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* KPIs & Qualifications */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        <section className="space-y-6">
                            <h4 className="text-2xl font-bold dark:text-white">Key Performance Indicators</h4>
                            <ul className="space-y-4">
                                {[
                                    'Revenue growth and market share targets',
                                    'Sales conversion rates and pipeline health',
                                    'Customer acquisition and retention metrics',
                                    'ROI on marketing campaigns',
                                    'Brand awareness and engagement metrics'
                                ].map((kpi, i) => (
                                    <li key={i} className="flex gap-4 items-center p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10">
                                        <Icon icon="ic:round-check-circle" className="text-primary text-xl flex-shrink-0" />
                                        <span className="font-bold">{kpi}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h4 className="text-2xl font-bold dark:text-white">Qualifications</h4>
                            <ul className="space-y-4 text-lg">
                                <li className="flex gap-4 items-start">
                                    <Icon icon="ic:round-school" className="text-primary text-2xl flex-shrink-0 mt-1" />
                                    <p><span className="font-bold">Bachelor's degree</span> in Marketing, Business Administration, or related field</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Icon icon="ic:round-workspace-premium" className="text-primary text-2xl flex-shrink-0 mt-1" />
                                    <p><span className="font-bold">8–10 years</span> of progressive experience in senior leadership roles</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* In-detail CTA */}
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