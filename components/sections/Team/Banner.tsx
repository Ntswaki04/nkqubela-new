// sections/Team/Banner.tsx
"use client";

export default function TeamBanner() {
    return (
        <section className="video-hero mt-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/hero bg all.png"
                alt="Meet The Team"
                className="video-hero-bg"
            />
            <div className="video-hero-overlay"></div>
            <div className="video-hero-content text-center px-4 max-w-4xl absolute inset-0 flex flex-col justify-center items-center pointer-events-none mt-20">
                <h1
                    className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em] pointer-events-auto"
                    data-aos="fade-up"
                >
                    MEET THE TEAM
                </h1>
                <p
                    className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em] opacity-90 pointer-events-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    OUR PEOPLE
                </p>
            </div>
        </section>
    );
}
