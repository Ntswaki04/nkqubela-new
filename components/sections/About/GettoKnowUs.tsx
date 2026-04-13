// sections/About/GettoKnowUs.tsx
"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function GettoKnowUs() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }, []);

    return (
        <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-20">
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Get to Know Us</span>
                        </div>
                        <h2 className="text-5xl font-bold dark:text-white leading-tight">
                            Simplifying <br />
                            Complexity for Two <br />
                            Decades
                        </h2>

                        <div className="space-y-6 text-xl text-SlateBlueText dark:text-darktext leading-relaxed font-medium">
                            <p>
                                Nkqubela Technologies is a leading systems integrator with a deep-rooted history
                                of helping clients navigate the complex landscape of information technology.
                                Since our inception, we have been committed to delivering high-quality,
                                scalable solutions that drive business growth.
                            </p>
                            <p>
                                Based in South Africa, we have grown from a specialized ICT resourcing firm
                                into a full-scale technology partner, providing everything from software
                                development and information security to infrastructure management.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <div className="group relative w-full h-auto cursor-pointer overflow-hidden rounded-[2rem]">
                            <img
                                src="/images/get to know us.png"
                                alt="Get to Know Us"
                                className="w-full h-auto rounded-[2rem] shadow-2xl opacity-0"
                            />
                            <div className="absolute top-0 left-0 overflow-hidden rounded-tl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/get to know us.png" alt="" className="absolute top-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute top-0 right-0 overflow-hidden rounded-tr-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/get to know us.png" alt="" className="absolute top-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 overflow-hidden rounded-bl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/get to know us.png" alt="" className="absolute bottom-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 overflow-hidden rounded-br-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/get to know us.png" alt="" className="absolute bottom-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}