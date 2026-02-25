import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#102C46] text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <Image
                            src="/images/logo/Nkqubela-Technologies-Logo.png"
                            alt="Nkqubela Technologies"
                            width={150}
                            height={50}
                            className="mb-6 h-auto w-auto"
                        />
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            Delivering innovative ICT solutions and fostering a culture of continuous innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-black-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Our Services</Link></li>
                            <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors text-sm">Leadership Team</Link></li>
                            <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services#ict" className="text-gray-300 hover:text-white transition-colors text-sm">ICT Resourcing</Link></li>
                            <li><Link href="/services#infrastructure" className="text-gray-300 hover:text-white transition-colors text-sm">Infrastructure</Link></li>
                            <li><Link href="/services#security" className="text-gray-300 hover:text-white transition-colors text-sm">Security Solutions</Link></li>
                            <li><Link href="/services#software" className="text-gray-300 hover:text-white transition-colors text-sm">Software Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="iconify mt-1 flex-shrink-0 text-gray-400" data-icon="mdi:map-marker"></span>
                                <span>123 Business Park, Johannesburg, South Africa</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="iconify flex-shrink-0 text-gray-400" data-icon="mdi:phone"></span>
                                <span>+27 11 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <span className="iconify flex-shrink-0 text-gray-400" data-icon="mdi:email"></span>
                                <span>info@nkqubela.co.za</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nkqubela Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}