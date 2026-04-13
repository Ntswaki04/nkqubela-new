// sections/Team/ManagementBanner.tsx
"use client";

export default function ManagementBanner() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">

            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/Core%20Management%20Team.png"
                alt="Core Management Team"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Shading removed for clear background */}

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    data-aos="fade-up"
                >
                    Core Management Team
                </h2>
                <p
                    className="text-lg md:text-xl text-white font-medium"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Our managers who ensure operational excellence across every department.
                </p>
            </div>
        </section>
    );
}