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
                    {/* Dark shade removed for clear image background */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-6 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                                Need a Custom Solution?
                            </h2>
                            <p className="text-xl font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                Our team is ready to design an ICT strategy tailored to your business needs.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/contact"
                                className="bg-[#00296D] text-white border border-[#00296D] hover:bg-white hover:text-black transition-colors px-10 py-2.5 rounded-full font-bold shadow-lg block whitespace-nowrap text-sm"
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