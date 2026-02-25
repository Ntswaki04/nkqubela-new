"use client";

import Image from 'next/image';

interface HeroCardProps {
    type: 'man' | 'woman';
}

export default function HeroCards({ type }: HeroCardProps) {
    if (type === 'man') {
        return (
            <div className="relative z-10">
                <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 bg-[#4CC9F0] rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[90px] lg:rounded-tl-[100px] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[90px] lg:rounded-br-[100px] relative overflow-visible shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <div className="absolute bottom-0 left-0 w-full h-[115%] overflow-hidden rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[90px] lg:rounded-tl-[100px] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[90px] lg:rounded-br-[100px]">
                        <Image
                            src="/images/hero/hero-man.png"
                            alt="Hero Man"
                            width={256}
                            height={320}
                            className="w-full h-full object-cover object-top scale-110 translate-y-2"
                        />
                    </div>
                    <div className="absolute top-6 sm:top-8 md:top-9 lg:top-10 -left-8 sm:-left-10 md:-left-11 lg:-left-12 bg-[#FEE440] text-slate-800 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 animate-bounce-slow">
                        <div className="bg-white/30 p-1 sm:p-1.5 md:p-2 rounded-full">
                            <span className="iconify text-sm sm:text-base md:text-lg lg:text-xl" data-icon="ic:round-star"></span>
                        </div>
                        <div>
                            <h4 className="font-bold text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-none">20+ Years</h4>
                            <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold opacity-75 uppercase tracking-wide">Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 z-0">
            <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 bg-[#4361EE] rounded-tr-[60px] sm:rounded-tr-[80px] md:rounded-tr-[90px] lg:rounded-tr-[100px] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[90px] lg:rounded-bl-[100px] relative overflow-visible shadow-2xl group hover:scale-105 transition-transform duration-500">
                <div className="absolute bottom-0 left-0 w-full h-[115%] overflow-hidden rounded-tr-[60px] sm:rounded-tr-[80px] md:rounded-tr-[90px] lg:rounded-tr-[100px] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[90px] lg:rounded-bl-[100px]">
                    <Image
                        src="/images/hero/hero-woman.png"
                        alt="Hero Woman"
                        width={256}
                        height={320}
                        className="w-full h-full object-cover object-top scale-110 translate-y-2"
                    />
                </div>
                <div className="absolute top-8 sm:top-10 md:top-11 lg:top-12 -right-10 sm:-right-12 md:-right-14 lg:-right-16 bg-[#4ade80] text-slate-900 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 animate-pulse-slow">
                    <div className="bg-white/30 p-1 sm:p-1.5 md:p-2 rounded-full">
                        <span className="iconify text-sm sm:text-base md:text-lg lg:text-xl" data-icon="ic:round-verified"></span>
                    </div>
                    <div>
                        <h4 className="font-bold text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-none">100%</h4>
                        <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold opacity-75 uppercase tracking-wide">Commitment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}