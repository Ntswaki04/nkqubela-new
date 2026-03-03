//"use client";

//import { useEffect, useState } from 'react';
//import { Icon } from '@iconify/react';
//import AOS from 'aos';
//import 'aos/dist/aos.css';

//interface Job {
//    title: string;
//    location: string;
//    type: string;
//    department: string;
//    hasDetail?: boolean;
//}

//const jobs: Job[] = [
//    // Sales & Marketing
//    { title: 'Head Of Sales and Marketing', location: 'East London, ZA', type: 'Full-Time / Contract', department: 'Sales & Marketing', hasDetail: true },
//    { title: 'Business Analyst Assistance', location: 'East London, ZA', type: 'Full-Time', department: 'Sales & Marketing' },
//    // Operations
//    { title: 'Project Manager', location: 'East London, ZA', type: 'Full-Time', department: 'Operations' },
//    { title: 'Cleaner', location: 'East London, ZA', type: 'Full-Time', department: 'Operations' },
//    // Technology
//    { title: 'Frontend Specialist', location: 'Remote / East London, ZA', type: 'Contract', department: 'Business Solutions' },
//];

//// Group jobs by department preserving insertion order
//const groupedJobs: { department: string; jobs: Job[] }[] = [];
//jobs.forEach((job) => {
//    const existing = groupedJobs.find((g) => g.department === job.department);
//    if (existing) {
//        existing.jobs.push(job);
//    } else {
//        groupedJobs.push({ department: job.department, jobs: [job] });
//    }
//});

//export default function Careers() {
//    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//    const [hoveredJob, setHoveredJob] = useState<string | null>(null);
//    const [isDark, setIsDark] = useState(false);

//    useEffect(() => {
//        AOS.init({ duration: 1000, once: true, offset: 50 });
//        // Detect dark mode (class strategy)
//        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
//        check();
//        const observer = new MutationObserver(check);
//        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
//        return () => observer.disconnect();
//    }, []);

//    return (
//        <main>
//            {/* Hero Section */}
//            <section className="video-hero mt-24">
//                {/* eslint-disable-next-line @next/next/no-img-element */}
//                <img
//                    src="/images/hero%20bg%20all.png"
//                    alt="Careers"
//                    className="video-hero-bg"
//                />
//                <div className="video-hero-overlay"></div>
//                <div className="video-hero-content text-center px-4 max-w-4xl">
//                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]" data-aos="fade-up">
//                        CAREERS
//                    </h1>
//                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90" data-aos="fade-up" data-aos-delay="100">
//                        JOIN OUR TEAM
//                    </p>
//                </div>
//            </section>

//            {/* Page Content */}
//            <section className="py-24 bg-white dark:bg-darkmode">
//                <div className="container overflow-hidden">
//                    {/* Why Join Us */}
//                    {/*<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">*/}
//                    {/*    {[*/}
//                    {/*        { title: 'Innovation Culture', desc: 'Work on cutting-edge projects that push the boundaries of technology.' },*/}
//                    {/*        { title: 'Growth Opportunities', desc: 'Continuous learning and career advancement within a dynamic environment.' },*/}
//                    {/*        { title: 'Inclusive Workplace', desc: 'A diverse and supportive team that values every perspective.' },*/}
//                    {/*    ].map((item, i) => (*/}
//                    {/*        <div*/}
//                    {/*            key={item.title}*/}
//                    {/*            className="bg-white dark:bg-darklight p-8 rounded-22 shadow-lg border border-gray-100 dark:border-transparent hover:-translate-y-2 transition-all duration-300 space-y-6 flex flex-col items-center text-center"*/}
//                    {/*            data-aos="fade-up"*/}
//                    {/*            data-aos-delay={i * 100}*/}
//                    {/*        >*/}
//                    {/*            <div className="inline-block px-6 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">*/}
//                    {/*                <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">*/}
//                    {/*                    {item.title}*/}
//                    {/*                </h4>*/}
//                    {/*            </div>*/}
//                    {/*            <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed">{item.desc}</p>*/}
//                    {/*        </div>*/}
//                    {/*    ))}*/}
//                    {/*</div>*/}

//                    {/* Current Openings */}
//                    {!selectedJob ? (
//                        <div id="openings" className="pt-20" data-aos="fade-up">
//                            <h2 className="text-center font-bold dark:text-white mb-4">Current Openings</h2>
//                            <p className="text-center text-SlateBlueText dark:text-darktext text-lg mb-16 max-w-2xl mx-auto">
//                                Explore our open positions below. We're always looking for passionate people to join our growing team.
//                            </p>

//                            {/* Department Table */}
//                            <div className="border-t border-gray-200 dark:border-gray-700">
//                                {groupedJobs.map((group, gIdx) => (
//                                    <div
//                                        key={group.department}
//                                        className="border-b border-gray-200 dark:border-gray-700"
//                                        data-aos="fade-up"
//                                        data-aos-delay={gIdx * 80}
//                                    >
//                                        {group.jobs.map((job, jIdx) => (
//                                            <div
//                                                key={job.title}
//                                                className={`flex items-stretch border-b border-gray-200 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors duration-200 ${hoveredJob === job.title
//                                                    ? 'bg-gray-50 dark:bg-darklight'
//                                                    : 'bg-white dark:bg-transparent'
//                                                    }`}
//                                                onClick={() => job.hasDetail && setSelectedJob(job)}
//                                                onMouseEnter={() => setHoveredJob(job.title)}
//                                                onMouseLeave={() => setHoveredJob(null)}
//                                            >
//                                                {/* Department label — only show on first job in group */}
//                                                <div className="hidden md:flex w-48 lg:w-56 flex-shrink-0 items-start pt-7 pb-7 pl-0 pr-8 border-r border-gray-200 dark:border-gray-700">
//                                                    {jIdx === 0 && (
//                                                        <span
//                                                            className="text-base font-semibold transition-colors duration-200"
//                                                            style={{
//                                                                color: hoveredJob && group.jobs.some(j => j.title === hoveredJob) ? (isDark ? '#ffffff' : '#072B61') : undefined,
//                                                                fontFamily: 'var(--font-dm-sans), sans-serif'
//                                                            }}
//                                                        >
//                                                            {group.department}
//                                                        </span>
//                                                    )}
//                                                </div>

//                                                {/* Job Info */}
//                                                <div
//                                                    className="flex-1 flex items-center justify-between py-7 px-6 md:pl-10 gap-4"
//                                                    style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
//                                                >
//                                                    <div className="space-y-1.5">
//                                                        {/* Mobile: show department */}
//                                                        {jIdx === 0 && (
//                                                            <span
//                                                                className="md:hidden inline-block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-200"
//                                                                style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
//                                                            >
//                                                                {group.department}
//                                                            </span>
//                                                        )}
//                                                        <p
//                                                            className="text-lg md:text-xl font-bold leading-tight transition-colors duration-200"
//                                                            style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
//                                                        >
//                                                            {job.title}
//                                                        </p>
//                                                        <div
//                                                            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
//                                                            style={{ color: hoveredJob === job.title ? (isDark ? '#ffffff' : '#072B61') : undefined }}
//                                                        >
//                                                            <span>{job.location}</span>
//                                                            <span className="w-px h-3 bg-gray-300 dark:bg-gray-600 hidden sm:inline-block"></span>
//                                                            <span>{job.type}</span>
//                                                        </div>
//                                                    </div>

//                                                    {/* Arrow */}
//                                                    <div
//                                                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
//                                                        style={{
//                                                            backgroundColor: hoveredJob === job.title ? '#072B61' : 'transparent',
//                                                            color: hoveredJob === job.title ? '#ffffff' : '#9ca3af',
//                                                            transform: hoveredJob === job.title ? 'scale(1.1)' : 'scale(1)'
//                                                        }}
//                                                    >
//                                                        <Icon
//                                                            icon="ic:round-arrow-forward"
//                                                            className="text-xl"
//                                                        />
//                                                    </div>
//                                                </div>
//                                            </div>
//                                        ))}
//                                    </div>
//                                ))}
//                            </div>

//                            <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8 italic">
//                                Click on a position with full details to view the complete job description.
//                            </p>
//                        </div>
//                    ) : (
//                        /* Full Job Detail View */
//                        <div className="animate-fade-in px-4 max-w-5xl mx-auto mb-20 bg-white dark:bg-darklight rounded-[2.5rem] p-10 md:p-16 border border-gray-100 dark:border-transparent shadow-2xl">
//                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
//                                <h3 className="text-4xl md:text-6xl font-bold dark:text-white tracking-tight">{selectedJob.title}</h3>
//                                <button
//                                    onClick={() => setSelectedJob(null)}
//                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all"
//                                >
//                                    <Icon icon="ic:round-arrow-back" /> Back to open roles
//                                </button>
//                            </div>

//                            <div className="space-y-16 text-gray-700 dark:text-gray-300">
//                                <div className="grid md:grid-cols-2 gap-12 pb-12 border-b dark:border-gray-800 border-gray-100">
//                                    <div className="space-y-1">
//                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Department</p>
//                                        <p className="text-xl font-bold dark:text-white">Sales and Marketing</p>
//                                    </div>
//                                    <div className="space-y-1">
//                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Reports To</p>
//                                        <p className="text-xl font-bold dark:text-white">Chief Executive Officer</p>
//                                    </div>
//                                    <div className="space-y-1">
//                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Location</p>
//                                        <p className="text-xl font-bold dark:text-white">Head Office (East London)</p>
//                                    </div>
//                                    <div className="space-y-1">
//                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Job Type</p>
//                                        <p className="text-xl font-bold dark:text-white">Full-Time / Limited Duration Contract</p>
//                                    </div>
//                                </div>

//                                <div className="space-y-12">
//                                    <section className="space-y-6">
//                                        <h4 className="text-3xl font-bold dark:text-white flex items-center gap-3">
//                                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
//                                            Job Purpose
//                                        </h4>
//                                        <p className="text-xl leading-relaxed font-medium">The Head of Sales and Marketing is responsible for developing and implementing the overall sales and marketing strategy to drive revenue growth, market share expansion, and brand positioning. This role provides strategic leadership to the sales and marketing teams, ensuring alignment with business goals and customer needs.</p>
//                                    </section>

//                                    <section className="space-y-8">
//                                        <h4 className="text-3xl font-bold dark:text-white flex items-center gap-3">
//                                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
//                                            Key Responsibilities
//                                        </h4>

//                                        <div className="grid gap-10">
//                                            {[
//                                                {
//                                                    title: 'Strategic Leadership',
//                                                    items: [
//                                                        'Develop and execute integrated sales and marketing strategies to achieve business objectives.',
//                                                        'Conduct regular market analysis to identify trends, customer needs, and competitive positioning.',
//                                                        'Drive strategic planning for product launches, campaigns, and sales growth initiatives.',
//                                                        'Oversee brand management and ensure consistency in messaging across all channels.'
//                                                    ]
//                                                },
//                                                {
//                                                    title: 'Sales Management',
//                                                    items: [
//                                                        'Set sales targets and KPIs and ensure the team meets or exceeds them.',
//                                                        'Lead and support the sales team in pipeline development, negotiations, and closing key deals.',
//                                                        'Monitor sales performance, produce reports, and adjust tactics where necessary.',
//                                                        'Establish and manage customer relationship strategies to drive retention and satisfaction.'
//                                                    ]
//                                                },
//                                                {
//                                                    title: 'Marketing Management',
//                                                    items: [
//                                                        'Lead the marketing team in the development and execution of campaigns (digital, print, events, etc.).',
//                                                        'Manage digital marketing efforts, including search engine optimization (SEO), social media, and email marketing.',
//                                                        'Coordinate market research and customer feedback to refine product offerings and messaging.',
//                                                        'Develop and manage the marketing budget, ensuring cost-effective execution.'
//                                                    ]
//                                                },
//                                                {
//                                                    title: 'Team Leadership & Development',
//                                                    items: [
//                                                        'Recruit, mentor, and lead high-performing sales and marketing teams.',
//                                                        'Provide regular coaching, performance reviews, and professional development opportunities.',
//                                                        'Foster a results-driven and collaborative culture across departments.'
//                                                    ]
//                                                }
//                                            ].map((box) => (
//                                                <div key={box.title} className="p-8 rounded-22 bg-gray-50 dark:bg-darkmode border border-gray-100 dark:border-transparent transition-all hover:shadow-lg">
//                                                    <h5 className="text-xl font-bold dark:text-white mb-6 text-primary uppercase tracking-tight">{box.title}</h5>
//                                                    <ul className="space-y-4">
//                                                        {box.items.map((li, idx) => (
//                                                            <li key={idx} className="flex gap-4 items-start">
//                                                                <div className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
//                                                                <p className="font-medium">{li}</p>
//                                                            </li>
//                                                        ))}
//                                                    </ul>
//                                                </div>
//                                            ))}
//                                        </div>
//                                    </section>

//                                    <div className="grid lg:grid-cols-2 gap-12">
//                                        <section className="space-y-6">
//                                            <h4 className="text-2xl font-bold dark:text-white">Key Performance Indicators</h4>
//                                            <ul className="space-y-4">
//                                                {['Revenue growth and market share targets', 'Sales conversion rates and pipeline health', 'Customer acquisition and retention metrics', 'ROI on marketing campaigns', 'Brand awareness and engagement metrics'].map((kpi, i) => (
//                                                    <li key={i} className="flex gap-4 items-center p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10">
//                                                        <Icon icon="ic:round-check-circle" className="text-primary text-xl flex-shrink-0" />
//                                                        <span className="font-bold">{kpi}</span>
//                                                    </li>
//                                                ))}
//                                            </ul>
//                                        </section>

//                                        <section className="space-y-6">
//                                            <h4 className="text-2xl font-bold dark:text-white">Qualifications</h4>
//                                            <ul className="space-y-4 text-lg">
//                                                <li className="flex gap-4 items-start">
//                                                    <Icon icon="ic:round-school" className="text-primary text-2xl flex-shrink-0 mt-1" />
//                                                    <p><span className="font-bold">Bachelor's degree</span> in Marketing, Business Administration, or related field</p>
//                                                </li>
//                                                <li className="flex gap-4 items-start">
//                                                    <Icon icon="ic:round-workspace-premium" className="text-primary text-2xl flex-shrink-0 mt-1" />
//                                                    <p><span className="font-bold">8–10 years</span> of progressive experience in senior leadership roles</p>
//                                                </li>
//                                            </ul>
//                                        </section>
//                                    </div>
//                                </div>

//                                <div className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
//                                    style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
//                                    data-aos="zoom-in">
//                                    <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
//                                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
//                                        <div className="space-y-4 max-w-xl text-center lg:text-left">
//                                            <h4 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight">
//                                                Ready to take the <br className="hidden md:block" /> lead?
//                                            </h4>
//                                            <div className="space-y-2">
//                                                <p className="text-lg md:text-xl text-white/90 font-medium">
//                                                    Reply to <a href="mailto:NokwandaB@Nkqubela.co.za" className="text-white underline font-bold hover:text-IcyBreeze transition-colors">NokwandaB@Nkqubela.co.za</a>
//                                                </p>
//                                                <p className="text-white/80">
//                                                    Deadline: <span className="font-bold text-white">Monday 15 March 2026</span>
//                                                </p>
//                                            </div>
//                                        </div>
//                                        <div className="flex flex-col items-center lg:items-end gap-4">
//                                            <a href="mailto:NokwandaB@Nkqubela.co.za" className="bg-[#07367c] text-white hover:bg-[#07367c]/90 transition-colors px-10 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap text-lg md:text-xl">
//                                                Apply via Email
//                                            </a>
//                                            <p className="text-sm text-white/70 italic">
//                                                Questions? Contact Nokwanda Badli – 073 515 0889
//                                            </p>
//                                        </div>
//                                    </div>
//                                </div>
//                            </div>
//                        </div>
//                    )}
//                </div>
//            </section>

//            {/* Final CTA Section - Only show when NOT viewing job details */}
//            {!selectedJob && (
//                <section className="pb-24">
//                    <div className="container px-4">
//                        <div className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
//                            style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
//                            data-aos="zoom-in">
//                            <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
//                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
//                                <div className="space-y-5 max-w-2xl text-center lg:text-left">
//                                    <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
//                                        Want to Collaborate on a <br className="hidden md:block" /> New Role?
//                                    </h2>
//                                    <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
//                                        Our team is always looking for talent. If you don't see a fit, send your CV anyway!
//                                    </p>
//                                </div>
//                                <div>
//                                    <a href="mailto:Info@nkqubela.co.za" className="bg-[#052e69] text-white hover:bg-[#052e69]/90 transition-colors px-10 py-5 rounded-[1.5rem] font-bold shadow-lg block whitespace-nowrap text-lg">
//                                        Send your CV
//                                    </a>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </section>
//            )}
//        </main>
//    );
//}
