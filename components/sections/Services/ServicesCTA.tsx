// sections/Services/ServicesCTA.tsx
"use client";

import Link from 'next/link';

export default function ServicesCTA() {
    return (
        <section className="py-24">
            <div className="container px-4">
                <div
                    className="cta-section-custom relative overflow-hidden rounded-3xl"
                    style={{
                        backgroundImage: 'url("/images/CTA Services.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '6rem 3rem',
                    }}
                    data-aos="zoom-in"
                >
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-6 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Need a Custom Solution?
                            </h2>
                            <p className="text-white/90 text-xl font-medium">
                                Our team is ready to design an ICT strategy tailored to your business needs.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className="bg-primary text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 rounded-full font-bold shadow-lg block whitespace-nowrap"
                            >
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}