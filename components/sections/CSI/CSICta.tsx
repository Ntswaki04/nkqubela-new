// sections/CSI/CSICta.tsx
"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function CSICta() {
    return (
        <section className="pb-24 bg-white dark:bg-darkmode">
            <div className="container px-4">
                <div
                    className="relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
                    style={{
                        backgroundImage: 'url("/images/CTA%20csi.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    data-aos="zoom-in"
                >
                    <div className="absolute inset-0 bg-[#011120]/70 mix-blend-multiply rounded-3xl" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-5 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
                                Want to Collaborate on a<br className="hidden md:block" /> CSI Initiative?
                            </h2>
                            <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
                                Our team is ready to design an impact strategy tailored to the needs of your community.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold shadow-lg text-white text-lg transition-all duration-300 group/cta"
                                style={{ backgroundColor: '#072B61' }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#05204a')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#072B61')}
                            >
                                Contact Us Today
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 transition-transform duration-300 group-hover/cta:translate-x-1">
                                    <Icon icon="ic:round-arrow-forward" className="text-lg" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}