// sections/About/AboutBanner.tsx
"use client";

export default function AboutBanner() {
    return (
        <section className="video-hero mt-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/banner.png"
                alt="Our Story"
                className="video-hero-bg"
            />
            <div className="video-hero-content text-center px-4 max-w-4xl">
                <h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                    data-aos="fade-up"
                >
                    OUR STORY
                </h1>
                <p
                    className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Over 20 years of delivering excellence in systems integration and ICT solutions.
                </p>
            </div>
        </section>
    );
}
