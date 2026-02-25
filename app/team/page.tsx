"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    img: string;
    reverse?: boolean;
}

function TeamMember({ name, role, bio, img, reverse }: TeamMemberProps) {
    return (
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-[400px] flex-shrink-0 flex justify-center" data-aos={reverse ? "fade-left" : "fade-right"}>
                <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-8 border-white dark:border-darklight shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex-grow space-y-6" data-aos={reverse ? "fade-right" : "fade-left"}>
                <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold dark:text-white leading-tight">{name}</h3>
                    <p className="text-primary font-bold text-xl uppercase tracking-wider">{role}</p>
                </div>
                <div className="text-lg md:text-xl text-SlateBlueText dark:text-gray-400 leading-relaxed text-justify whitespace-pre-line font-medium">
                    {bio}
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    const executiveTeam = [
        {
            name: "Mawethu Sidzamba",
            role: "Chief Executive Officer",
            img: "/images/team/mawethu-sidzamba.png",
            bio: "Mawethu Sivuyile Sidzamba was born in Sterkspruit in the Eastern Cape. He obtained his BCom degree from Vista University and Post Graduate Diploma in Compliance Management from the University of Johannesburg.\n\nHe has an audit career spanning over 16 years and completed his articles at Ngubane & Co. Chartered Accountants in Johannesburg. He has worked for a government agency, the National Regulator for Compulsory Specifications (NRCS) where he also acted as a Chief Audit Executive and reported directly to the Board and CEO.\n\nHe moved to Foskor (Pty) Ltd as Senior Internal Auditor and later Ford Motor Company of Southern Africa as an Internal Controls Analyst."
        },
        {
            name: "Andile Kenqu",
            role: "Chief Operations Officer",
            img: "/images/team/andile-kenqu.png",
            bio: "Andile Cyril Kenqu was born in South Africa's second biggest township (Mdantsane) in East London the Eastern Cape. He obtained his National Diploma in Information Technology specializing in Intelligent Industrial System at the Tshwane University of Technology in Pretoria and a post graduate certificate in Specialized Application Development at the Centre for Development of Advanced Computing Institute in Noida India.\n\nHis employment journey began at the Eastern Cape Provincial Treasury as a Junior Data and Budget Systems Analysts for 5 years where he was responsible for data analyses and data mining provincial departments transversal systems (BAS, LOGIS, PerSal). He had offered Data Analyses Services for a period of four (4) years to the ECDoE. In 2021, he started as a Senior Business Analysts for Nkqubela Technologies until he was promoted to Chief Operations Officer on the 1st of September 2023."
        }
    ];

    const managementTeam = [
        {
            name: "Melikhaya Phangwa",
            role: "Head of Business Solutions",
            img: "/images/management/melikhaya.png",
            bio: "Melikhaya is the strategic engine behind our business solutions. With a keen eye for Identifying opportunities, he expertly bridges the gap between complex technical capabilities and client requirements, ensuring every solution delivers tangible business value."
        },
        {
            name: "Siyabulela Jindela",
            role: "Senior Account Manager",
            img: "/images/management/siyabulela.png",
            bio: "Siyabulela ensures that we deliver on our promises. He manages our clients accounts to ensure seamless delivery with precision, maintaining strict service level agreements and ensuring that every client interaction reflects our commitment to reliability and quality."
        },
        {
            name: "Fezeka Mntonintshi",
            role: "Head of Human Resources",
            img: "/images/management/fezeka.png",
            bio: "Fezeka champions our most valuable asset: our people. She fosters a culture of innovation and excellence, supervising specialized talent acquisition and ensuring that Nkqubela Technologies remains a workplace where professionals thrive."
        },
        {
            name: "Thando Mtombeni",
            role: "Executive Personal Assistant",
            img: "/images/management/thando.png",
            bio: "As the backbone of our executive office, Thando ensures seamless operations at the highest level. Her ability to manage complex schedules and provide strategic support to leadership allows our executives to focus on steering the company forward."
        },
        {
            name: "Mpondokazi Zweni",
            role: "Service Desk Manager",
            img: "/images/management/mpondokazi.png",
            bio: "At the frontline of our support operations, Mpondokazi leads with empathy and technical expertise. She oversees the resolution of incidents, ensuring that our clients receive prompt, effective support whenever they encounter challenges."
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="video-hero mt-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero%20bg%20all.png"
                    alt="Meet The Team"
                    className="video-hero-bg"
                />
                <div className="video-hero-overlay"></div>
                <div className="video-hero-content text-center px-4 max-w-4xl absolute inset-0 flex flex-col justify-center items-center pointer-events-none mt-20">
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em] pointer-events-auto" data-aos="fade-up">
                        MEET THE TEAM
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90 pointer-events-auto" data-aos="fade-up" data-aos-delay="100">
                        OUR PEOPLE
                    </p>
                </div>
            </section>

            {/* Executive Team Content */}
            <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
                <div className="container">
                    <div className="text-center mb-24" data-aos="fade-up">
                        <div className="mb-6">
                            <span className="pillar-badge bg-primary/10 text-primary px-4 py-2 font-bold rounded-full">Executive Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold dark:text-white max-w-4xl mx-auto leading-tight mt-6">
                            Visionary leaders driving Nkqubela Technologies towards a brighter, more connected future.
                        </h2>
                    </div>

                    <div className="space-y-32">
                        {executiveTeam.map((member, i) => (
                            <TeamMember
                                key={member.name}
                                {...member}
                                reverse={i % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Banner */}
            <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/Core%20Management%20Team.png"
                    alt="Core Management Team"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-aos="fade-up">
                        Core Management Team
                    </h2>
                    <p className="text-lg md:text-xl text-white font-medium" data-aos="fade-up" data-aos-delay="100">
                        Our managers who ensure operational excellence across every department.
                    </p>
                </div>
            </section>

            {/* Core Management Team List */}
            <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
                <div className="container">
                    <div className="space-y-32">
                        {managementTeam.map((member, i) => (
                            <TeamMember
                                key={member.name}
                                {...member}
                                reverse={i % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
