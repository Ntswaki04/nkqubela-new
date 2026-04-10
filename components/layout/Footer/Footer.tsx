import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-wrapper">
            <footer className="footer-container">
                <div className="footer-grid">
                    {/* Social Icons Column */}
                    <div className="footer-social-column">
                        <a 
                            href="https://www.linkedin.com/company/nkqubela-technologies" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-social-icon"
                        >
                            <Icon icon="mdi:linkedin" className="text-white" />
                        </a>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-link-list">
                            <li><Link href="/csi" className="footer-link-item">CSI Programmes</Link></li>
                            <li><Link href="/team" className="footer-link-item">Meet The Team</Link></li>
                            <li><Link href="/careers" className="footer-link-item">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Services Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Our Solutions</h3>
                        <ul className="footer-link-list">
                            <li><Link href="/services#ict-resourcing" className="footer-link-item">ICT Resourcing</Link></li>
                            <li><Link href="/services#software-solutions" className="footer-link-item">Software Solutions</Link></li>
                            <li><Link href="/services#security" className="footer-link-item">Security</Link></li>
                            <li><Link href="/services#connectivity" className="footer-link-item">Connectivity</Link></li>
                            <li><Link href="/services#infrastructure" className="footer-link-item">ICT Infrastructure</Link></li>
                            <li><Link href="/services#management" className="footer-link-item">Managed IT Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Contact Us Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Contact Us</h3>
                        <ul className="footer-link-list">
                            <li className="footer-info-item">
                                <Icon icon="lucide:map" className="footer-info-icon" />
                                <span className="footer-link-item">Office 1, Palm Square Business Park, <br/>Beacon Bay, East London, 5205</span>
                            </li>
                            <li className="footer-info-item">
                                <a href="tel:+27430500821" className="footer-info-link">
                                    <Icon icon="lucide:phone" className="footer-info-icon" />
                                    <span className="footer-link-item">+27 43 050 0821</span>
                                </a>
                            </li>
                            <li className="footer-info-item">
                                <a href="mailto:Info@nkqubela.co.za" className="footer-info-link">
                                    <Icon icon="lucide:mail" className="footer-info-icon" />
                                    <span className="footer-link-item">Info@nkqubela.co.za</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>© {year} Nkqubela Technologies. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}