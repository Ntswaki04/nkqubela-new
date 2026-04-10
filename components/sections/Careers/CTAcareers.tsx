// sections/Careers/CTAcareers.tsx
"use client";

export default function CTAcareers() {
    return (
        <section className="pb-24">
            <div className="container px-4">
                <div
                    className="cta-section-custom relative overflow-hidden rounded-3xl p-10 md:py-16 md:px-16"
                    style={{ backgroundImage: 'url("/images/CTA%20jobs.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    data-aos="zoom-in"
                >
                    <div className="absolute inset-0 bg-[#232323]/70 mix-blend-multiply rounded-3xl"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="space-y-5 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
                                Want to Collaborate on a <br className="hidden md:block" /> New Role?
                            </h2>
                            <p className="text-white/90 text-[1.1rem] font-medium max-w-xl">
                                Our team is always looking for talent. If you don't see a fit, send your CV anyway!
                            </p>
                        </div>
                        <div>
                            <a
                                href="mailto:Info@nkqubela.co.za"
                                className="bg-[#00296D] text-white border border-[#00296D] hover:bg-white hover:text-black transition-colors px-10 py-2.5 rounded-full font-bold shadow-lg block whitespace-nowrap text-sm"
                            >
                                Send your CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}