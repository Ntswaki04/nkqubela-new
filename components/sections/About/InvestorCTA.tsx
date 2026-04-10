// sections/About/InvestorCTA.tsx
"use client";

import Link from 'next/link';

export default function InvestorCTA() {
    return (
        <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
            <div className="container">
                <div
                    className="relative rounded-[2rem] overflow-hidden px-10 py-20 md:px-20 text-center"
                    style={{
                        background: 'linear-gradient(135deg, #001C55 0%, #102C46 50%, #043072 100%)',
                    }}
                >
                    {/* Subtle grid pattern overlay */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8">
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                                Partner with us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Invest in the{' '}
                            <span className="text-[#2F73F2]">future</span>{' '}
                            of ICT
                        </h2>

                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
                            We partner with purpose-driven investors and organisations who believe in
                            technology as a force for growth across South Africa and beyond. If you&apos;re
                            ready to explore a partnership, we&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-[#2F73F2] text-white hover:bg-white hover:text-[#002d5e] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Get in touch
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
