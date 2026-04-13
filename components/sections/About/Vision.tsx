// sections/About/Vision.tsx
"use client";

export default function Vision() {
    return (
        <section className="bg-white dark:bg-darkmode py-32 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-20">
                    <div data-aos="fade-right">
                        <div className="group relative w-full h-auto cursor-pointer overflow-hidden rounded-[2rem]">
                            <img
                                src="/images/vision.png"
                                alt="Our Vision"
                                className="w-full h-auto rounded-[2rem] shadow-2xl opacity-0"
                            />
                            <div className="absolute top-0 left-0 overflow-hidden rounded-tl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/vision.png" alt="" className="absolute top-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute top-0 right-0 overflow-hidden rounded-tr-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/vision.png" alt="" className="absolute top-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 overflow-hidden rounded-bl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/vision.png" alt="" className="absolute bottom-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 overflow-hidden rounded-br-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-10 shadow-lg" style={{ width: 'calc(50% + 1px)', height: 'calc(50% + 1px)' }}>
                                <img src="/images/vision.png" alt="" className="absolute bottom-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8" data-aos="fade-left">
                        <div className="inline-block px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5">
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Vision</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold dark:text-white leading-tight uppercase">VISION</h2>
                        <p className="text-base leading-relaxed font-normal text-black dark:text-darktext" style={{ fontFamily: 'var(--font-poppins)' }}>
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
    );
}