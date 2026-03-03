import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-24">
            <div className="container">
                <div
                    className="bg-primary rounded-22 p-12 md:p-24 text-center text-white relative overflow-hidden"
                    data-aos="zoom-in"
                >
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ElectricAqua/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-white font-bold max-w-2xl mx-auto leading-tight">
                            Ready to Transform Your Business with Technology?
                        </h2>
                        <p className="text-white/80 text-xl max-w-xl mx-auto">
                            Partner with Nkqubela Technologies for cutting-edge ICT solutions tailored to your unique needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-white text-primary px-10 py-4 font-bold rounded-lg hover:bg-IcyBreeze transition-colors shadow-xl"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/services"
                                className="border-2 border-white/30 text-white px-10 py-4 font-bold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Our Offerings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}