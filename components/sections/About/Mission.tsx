// sections/About/Mission.tsx
"use client";

export default function Mission() {
    return (
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
                    <div className="group relative w-full h-auto cursor-pointer">
                        <img
                            src="/images/mission.png"
                            alt="Our Mission"
                            className="w-full h-auto rounded-[2rem] shadow-2xl opacity-0"
                        />
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 overflow-hidden rounded-tl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg">
                            <img src="/images/mission.png" alt="" className="absolute top-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                        </div>
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden rounded-tr-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 z-10 shadow-lg">
                            <img src="/images/mission.png" alt="" className="absolute top-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden rounded-bl-[2rem] transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:translate-y-3 z-10 shadow-lg">
                            <img src="/images/mission.png" alt="" className="absolute bottom-0 left-0 w-[200%] h-[200%] max-w-none object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden rounded-br-[2rem] transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-10 shadow-lg">
                            <img src="/images/mission.png" alt="" className="absolute bottom-0 right-0 w-[200%] h-[200%] max-w-none object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}