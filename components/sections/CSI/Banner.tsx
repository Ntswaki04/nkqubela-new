// sections/CSI/Banner.tsx
"use client";

export default function CSIBanner() {
    return (
        <section className="video-hero mt-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/banner.png"
                alt="CSI Programmes"
                className="video-hero-bg"
            />
            <div className="video-hero-content text-center px-4 max-w-5xl">
                <h1
                    className="text-5xl md:text-8xl font-bold text-white mb-4 uppercase tracking-[0.05em]"
                    data-aos="fade-up"
                >
                    CSI Programmes
                </h1>
                <p
                    className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Inspiring Change
                </p>
            </div>
        </section>
    );
}
