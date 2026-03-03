// sections/Team/ExecutiveTeam.tsx
"use client";

import TeamMember from './TeamMember';
import { executiveTeam } from './TeamData';

export default function ExecutiveTeam() {
    return (
        <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
            <div className="container">

                {/* Section heading */}
                <div className="text-center mb-24" data-aos="fade-up">
                    <div className="mb-6">
                        <span className="pillar-badge bg-primary/10 text-primary px-4 py-2 font-bold rounded-full">
                            Executive Team
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold dark:text-white max-w-4xl mx-auto leading-tight mt-6">
                        VISIONARY LEADERS.
                    </h2>
                </div>

                {/* Members */}
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
    );
}