import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-gray-900 min-h-[650px] flex items-center">
            <Image
                src="/images/hero/heroBG1.png"
                alt="hero-bg"
                fill
                className="absolute inset-0 -z-10 object-cover object-right md:object-center"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-black/70"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-8 lg:gap-16">
                    <div className="lg:col-span-6">
                        <h1
                            className="py-4 text-white"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Connecting Possibilities, Empowering Futures
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-gray-200 font-normal md:pb-14 pb-6 max-w-lg"
                        >
                            We foster a culture of continuous innovation, constantly exploring new technologies and ideas to deliver the best solutions for our clients.
                        </p>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="lg:col-span-6 lg:flex hidden items-center gap-3"
                    >
                        <div className="bg-slate-900 relative rounded-tl-166 rounded-br-166 w-full overflow-hidden">
                            <Image
                                src="/images/hero/john.png"
                                alt="hero"
                                width={400}
                                height={500}
                                quality={100}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32 overflow-hidden">
                            <Image
                                src="/images/hero/maria.png"
                                alt="hero"
                                width={400}
                                height={500}
                                quality={100}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;