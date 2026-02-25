"use client";

import { useEffect, useRef } from 'react';

const stats = [
    { target: 35, label: 'Projects' },
    { target: 12, label: 'Clients' },
    { target: 13, label: 'Services' },
];

export default function Statistics() {
    const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        countersRef.current.forEach((counter) => {
                            if (!counter) return;

                            const target = Number(counter.dataset.target);
                            const speed = 50;
                            let count = 0;

                            const updateCount = () => {
                                const inc = Math.ceil(target / speed);
                                if (count < target) {
                                    count = Math.min(count + inc, target);
                                    counter.innerText = count.toString();
                                    requestAnimationFrame(updateCount);
                                } else {
                                    counter.innerText = target.toString();
                                }
                            };

                            updateCount();
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-20 py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="flex-1 min-w-[200px] bg-white dark:bg-darkmode rounded-2xl md:rounded-3xl border-2 border-[#102C46] dark:border-white/20 shadow-xl py-6 md:py-8 px-4 text-center group hover:-translate-y-2 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <h3
                                ref={(el) => { countersRef.current[index] = el; }}
                                className="counter-number text-4xl md:text-5xl lg:text-6xl font-bold text-[#102C46] dark:text-white mb-1 font-serif group-hover:scale-110 transition-transform duration-300"
                                data-target={stat.target}
                            >
                                0
                            </h3>
                            <p className="text-[#102C46]/80 dark:text-white/80 font-medium text-base md:text-lg uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}