// sections/Team/TeamMember.tsx
"use client";

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    img: string;
    reverse?: boolean;
}

export default function TeamMember({ name, role, bio, img, reverse }: TeamMemberProps) {
    return (
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

            {/* Portrait */}
            <div
                className="w-full lg:w-[400px] flex-shrink-0 flex justify-center"
                data-aos={reverse ? 'fade-left' : 'fade-right'}
            >
                <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-8 border-white dark:border-darklight shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Copy */}
            <div
                className="flex-grow space-y-6"
                data-aos={reverse ? 'fade-right' : 'fade-left'}
            >
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