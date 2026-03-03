// sections/Team/ManagementTeam.tsx
"use client";

import TeamMember from './TeamMember';
import { managementTeam } from './TeamData';

export default function ManagementTeam() {
    return (
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
    );
}