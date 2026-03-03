"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

{/* Mission Section */ }
<section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
    <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-20">
            <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right">
                <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Mission</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold dark:text-white leading-tight uppercase">MISSION</h2>
                <p className="text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                    At Nkqubela Technologies, our mission is to embody our core values of innovation, disruption,
                    and agility. By aligning our resources strategically, we optimize the quality of our
                    end-products and deliver a superior customer service experience. We foster a culture of
                    creativity and forward-thinking, challenging norms, and adapting swiftly to evolving needs.
                </p>
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/mission.png"
                    alt="Our Mission"
                    className="w-full h-auto rounded-[2rem] shadow-2xl"
                />
            </div>
        </div>
    </div>
</section>