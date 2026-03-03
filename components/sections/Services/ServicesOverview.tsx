// sections/Services/ServicesOverview.tsx
"use client";

export default function ServicesOverview() {
    return (
        <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 items-center gap-20">

                    {/* Image */}
                    <div data-aos="fade-right">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/services%20image.png"
                            alt="Six Pillars"
                            className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl"
                        />
                    </div>

                    {/* Copy */}
                    <div className="space-y-8" data-aos="fade-left">
                        <div className="inline-block px-5 py-2 border border-primary/30 rounded-full bg-primary/5">
                            <span className="text-primary text-sm font-bold tracking-wide">Our Services</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white leading-tight">
                            What We Do{' '}
                            <span className="text-primary whitespace-nowrap">"Six pillars"</span>.<br />
                            One trusted partner.
                        </h2>
                        <p className="text-xl text-SlateBlueText dark:text-gray-400 leading-relaxed font-medium">
                            At Nkqubela Technologies, we offer a comprehensive suite of ICT services designed to
                            simplify the complex and empower your business to grow. From securing your digital
                            environment to building robust infrastructure, our solutions are tailored to meet the
                            demands of modern enterprises across South Africa and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}