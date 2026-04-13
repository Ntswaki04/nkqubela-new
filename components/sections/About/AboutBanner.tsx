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
            <div className="video-hero-overlay"></div>
            <div className="video-hero-content text-center px-4 max-w-4xl">
                <h1
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]"
                    data-aos="fade-up"
                >
                    OUR STORY
                </h1>
                <p
                    className="text-xl md:text-2xl text-white/90 font-medium leading-loose max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Over 20 years of delivering excellence in systems integration and ICT solutions.
                </p>
            </div>
        </section>
    );
}
