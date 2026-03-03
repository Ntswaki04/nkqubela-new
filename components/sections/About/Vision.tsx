"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

{/* Vision Section */ }
<section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
    <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-20">
            <div data-aos="fade-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/vision.png"
                    alt="Our Vision"
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                />
            </div>
            <div className="space-y-8" data-aos="fade-left">
                <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Vision</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold dark:text-white leading-tight uppercase">VISION</h2>
                <p className="text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                    Our vision is to pioneer excellence in systems integration, redefining industry standards and
                    setting new benchmarks for seamless connectivity and optimized functionality. Through
                    innovation, strategic partnerships, and a relentless pursuit of excellence, we aim to
                    revolutionize the landscape of system integration, delivering unparalleled value to our
                    clients.
                </p>
            </div>
        </div>
    </div>
</section>