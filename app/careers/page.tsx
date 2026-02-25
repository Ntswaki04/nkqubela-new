"use client";

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState('Head Of Sales and Marketing');
    const [showFullDetail, setShowFullDetail] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero%20bg%20all.png"
                    alt="Careers"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
                        CAREERS
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
                        JOIN OUR TEAM
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <section className="py-24">
                <div className="container overflow-hidden">
                    {/* Why Join Us */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: 'Innovation Culture', desc: 'Work on cutting-edge projects that push the boundaries of technology.' },
                            { title: 'Growth Opportunities', desc: 'Continuous learning and career advancement within a dynamic environment.' },
                            { title: 'Inclusive Workplace', desc: 'A diverse and supportive team that values every perspective.' },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className="bg-white dark:bg-darklight p-8 rounded-22 shadow-lg border border-gray-100 dark:border-transparent hover:-translate-y-2 transition-all duration-300 space-y-6 flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="inline-block px-6 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                                    <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Current Openings */}
                    <div id="openings" className="pt-20" data-aos="fade-up">
                        <h2 className="text-center font-bold dark:text-white mb-12">Current Openings</h2>

                        {/* Conditional Rendering: Grid or Full Details */}
                        {!showFullDetail ? (
                            <div className="max-w-4xl mx-auto space-y-4 mb-24">
                                {['Cleaner', 'Business Analyst Assistance', 'Head Of Sales and Marketing', 'Project Manager', 'Frontend Specialist'].map((role) => (
                                    <div key={role} className="group">
                                        <button
                                            onClick={() => {
                                                if (selectedJob === role) {
                                                    setSelectedJob(''); // Close if already open
                                                } else {
                                                    setSelectedJob(role);
                                                }
                                            }}
                                            className={`w-full flex items-center justify-between p-7 rounded-[1.5rem] transition-all border ${selectedJob === role
                                                ? 'bg-primary text-white border-primary shadow-xl scale-[1.02]'
                                                : 'bg-white dark:bg-darklight text-gray-700 dark:text-white border-gray-100 dark:border-transparent hover:border-primary/50 hover:shadow-lg'
                                                }`}
                                        >
                                            <span className="text-xl md:text-2xl font-bold tracking-tight">{role}</span>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedJob === role ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                                                <Icon
                                                    icon={selectedJob === role ? "ic:round-keyboard-arrow-up" : "ic:round-keyboard-arrow-down"}
                                                    className="text-2xl"
                                                />
                                            </div>
                                        </button>

                                        {/* Dropdown Preview Content */}
                                        {selectedJob === role && (
                                            <div className="mt-4 bg-[#f8fdff] dark:bg-darklight/30 rounded-[2rem] p-8 md:p-12 shadow-inner border border-primary/10 animate-slide-down">
                                                <div className="space-y-10">
                                                    <div className="grid sm:grid-cols-2 gap-10">
                                                        <div className="space-y-1">
                                                            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Department</p>
                                                            <p className="text-xl font-bold text-gray-900 dark:text-white">Sales and Marketing</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Reports To</p>
                                                            <p className="text-xl font-bold text-gray-900 dark:text-white">Chief Executive Officer</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Location</p>
                                                            <p className="text-xl font-bold text-gray-900 dark:text-white">Head Office (East London)</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Job Type</p>
                                                            <p className="text-xl font-bold text-gray-900 dark:text-white">Full-Time / Contract</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                                                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Job Purpose</p>
                                                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                                                            The Head of Sales and Marketing is responsible for developing and implementing the overall sales and marketing strategy to drive revenue growth, market share expansion, and brand positioning.
                                                        </p>
                                                    </div>

                                                    <div className="pt-4">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setShowFullDetail(true);
                                                            }}
                                                            className="cta-button-next !px-12 bg-primary text-white hover:bg-primary/90 transition-colors py-3 rounded-full font-bold"
                                                        >
                                                            Read More..
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Full Job Detail View */
                            <div className="animate-fade-in px-4 max-w-5xl mx-auto mb-20 bg-white dark:bg-darklight rounded-[2.5rem] p-10 md:p-16 border border-gray-100 dark:border-transparent shadow-2xl">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                                    <h3 className="text-4xl md:text-6xl font-bold dark:text-white tracking-tight">{selectedJob}</h3>
                                    <button
                                        onClick={() => setShowFullDetail(false)}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all"
                                    >
                                        <Icon icon="ic:round-arrow-back" /> Back to open roles
                                    </button>
                                </div>

                                <div className="space-y-16 text-gray-700 dark:text-gray-300">
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
                                        <section className="space-y-6">
                                            <h4 className="text-3xl font-bold dark:text-white flex items-center gap-3">
                                                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                                                Job Purpose
                                            </h4>
                                            <p className="text-xl leading-relaxed font-medium">The Head of Sales and Marketing is responsible for developing and implementing the overall sales and marketing strategy to drive revenue growth, market share expansion, and brand positioning. This role provides strategic leadership to the sales and marketing teams, ensuring alignment with business goals and customer needs.</p>
                                        </section>

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

                                        <div className="grid lg:grid-cols-2 gap-12">
                                            <section className="space-y-6">
                                                <h4 className="text-2xl font-bold dark:text-white">Key Performance Indicators</h4>
                                                <ul className="space-y-4">
                                                    {['Revenue growth and market share targets', 'Sales conversion rates and pipeline health', 'Customer acquisition and retention metrics', 'ROI on marketing campaigns', 'Brand awareness and engagement metrics'].map((kpi, i) => (
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
                                                        <p><span className="font-bold">Bachelor’s degree</span> in Marketing, Business Administration, or related field</p>
                                                    </li>
                                                    <li className="flex gap-4 items-start">
                                                        <Icon icon="ic:round-workspace-premium" className="text-primary text-2xl flex-shrink-0 mt-1" />
                                                        <p><span className="font-bold">8–10 years</span> of progressive experience in senior leadership roles</p>
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>

                                    <div className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
                                        style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        data-aos="zoom-in">
                                        <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
                                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                                            <div className="space-y-4 max-w-xl text-center lg:text-left">
                                                <h4 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight">
                                                    Ready to take the <br className="hidden md:block" /> lead?
                                                </h4>
                                                <div className="space-y-2">
                                                    <p className="text-lg md:text-xl text-white/90 font-medium">
                                                        Reply to <a href="mailto:NokwandaB@Nkqubela.co.za" className="text-white underline font-bold hover:text-IcyBreeze transition-colors">NokwandaB@Nkqubela.co.za</a>
                                                    </p>
                                                    <p className="text-white/80">
                                                        Deadline: <span className="font-bold text-white">Monday 15 March 2026</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:items-end gap-4">
                                                <a href="mailto:NokwandaB@Nkqubela.co.za" className="bg-[#07367c] text-white hover:bg-[#07367c]/90 transition-colors px-10 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap text-lg md:text-xl">
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
                        )}
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Only show when NOT viewing job details */}
            {!showFullDetail && (
                <section className="pb-24">
                    <div className="container px-4">
                        <div className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
                            style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            data-aos="zoom-in">
                            <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                                <div className="space-y-5 max-w-2xl text-center lg:text-left">
                                    <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
                                        Want to Collaborate on a <br className="hidden md:block" /> New Role?
                                    </h2>
                                    <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
                                        Our team is always looking for talent. If you don't see a fit, send your CV anyway!
                                    </p>
                                </div>
                                <div>
                                    <a href="mailto:Info@nkqubela.co.za" className="bg-[#052e69] text-white hover:bg-[#052e69]/90 transition-colors px-10 py-5 rounded-[1.5rem] font-bold shadow-lg block whitespace-nowrap text-lg">
                                        Send your CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
