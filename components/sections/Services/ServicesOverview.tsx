// sections/Services/ServicesOverview.tsx
"use client";

export default function ServicesOverview() {
    return (
        <section className="bg-gray-50 dark:bg-darklight py-32 overflow-hidden">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 items-center gap-20">

                    {/* Image — split-effect on hover */}
                    <div data-aos="fade-right">
                        <div className="group relative w-full h-[600px] cursor-pointer overflow-hidden rounded-[2rem]">
                            <img
                                src="/images/services%20image.png"
                                alt="Six Pillars"
                                className="w-full h-full object-cover rounded-[2rem] shadow-2xl opacity-0"
                            />
                            <div className="absolute top-0 left-0 overflow-hidden rounded-tl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/services%20image.png" alt="" className="absolute top-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute top-0 right-0 overflow-hidden rounded-tr-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/services%20image.png" alt="" className="absolute top-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 overflow-hidden rounded-bl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/services%20image.png" alt="" className="absolute bottom-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 overflow-hidden rounded-br-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/services%20image.png" alt="" className="absolute bottom-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Copy */}
                    <div className="space-y-8" data-aos="fade-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-5 py-2 bg-primary/5">
                            <span className="text-primary text-sm font-bold tracking-wide">Our Services</span>
                        </div>

                        {/* Heading — Quantum-style large, bold */}
                        <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white leading-[1.08]">
                            What We Do.{' '}
                            <br />
                            <span className="text-gray-900 dark:text-white">&ldquo;Six pillars&rdquo;.</span>
                            <br />
                            One trusted{' '}
                            <span className="italic font-extrabold">partner.</span>
                        </h2>

                        {/* Divider */}
                        <div className="w-16 h-0.5 bg-primary/40 rounded-full" />

                        {/* Body */}
                        <p className="text-base leading-relaxed font-normal text-black dark:text-gray-400 max-w-xl" style={{ fontFamily: 'var(--font-poppins)' }}>
                            At Nkqubela Technologies, we offer a comprehensive suite of ICT services designed to
                            simplify the complex and empower your business to grow. From securing your digital
                            environment to building robust infrastructure, our solutions are tailored to meet the
                            demands of modern enterprises across South Africa and beyond.
                        </p>

                        {/* Quick-stats row */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {[
                                { value: '20+', label: 'Years of experience' },
                                { value: '6', label: 'Core service pillars' },
                                { value: '100+', label: 'Clients served' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-3xl font-extrabold text-primary leading-none">{stat.value}</span>
                                    <span className="text-sm font-medium mt-1 text-black dark:text-gray-400" style={{ fontFamily: 'var(--font-poppins)' }}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}