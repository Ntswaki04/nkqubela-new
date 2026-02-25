import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-wrapper">
            <footer className="footer-container">
                {/* Logo Overlapping Top */}
                <div className="footer-grid">
                    {/* Social Icons */}
                    <div className="footer-social-column">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                            <Icon icon="mdi:linkedin" />
                        </a>
                        {/* <a href="#" className="footer-social-icon">
                            <Icon icon="mdi:twitter" />
                        </a> */}
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-link-list">
                            <li><Link href="/services" className="footer-link-item">UI design</Link></li>
                            <li><Link href="/services" className="footer-link-item">UX design</Link></li>
                            <li><Link href="/services" className="footer-link-item">Wireframing</Link></li>
                            <li><Link href="/services" className="footer-link-item">Diagramming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Brainstorming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Online whiteboard</Link></li>
                            <li><Link href="/services" className="footer-link-item">Team collaboration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Contact Us Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Contact Us</h3>
                        <ul className="footer-link-list">
                            <li><Link href="/services" className="footer-link-item">UI design</Link></li>
                            <li><Link href="/services" className="footer-link-item">UX design</Link></li>
                            <li><Link href="/services" className="footer-link-item">Wireframing</Link></li>
                            <li><Link href="/services" className="footer-link-item">Diagramming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Brainstorming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Online whiteboard</Link></li>
                            <li><Link href="/services" className="footer-link-item">Team collaboration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Use Cases Column */}
                    <div className="footer-column">
                        <h3 className="footer-column-title">Use cases</h3>
                        <ul className="footer-link-list">
                            <li><Link href="/services" className="footer-link-item">UI design</Link></li>
                            <li><Link href="/services" className="footer-link-item">UX design</Link></li>
                            <li><Link href="/services" className="footer-link-item">Wireframing</Link></li>
                            <li><Link href="/services" className="footer-link-item">Diagramming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Brainstorming</Link></li>
                            <li><Link href="/services" className="footer-link-item">Online whiteboard</Link></li>
                            <li><Link href="/services" className="footer-link-item">Team collaboration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-v-divider hidden lg:block"></div>

                    {/* Search Column */}
                    <div className="footer-search-container">
                        <div className="footer-search-box">
                            <input
                                type="text"
                                placeholder="Search.."
                                className="footer-search-input"
                            />
                            <Icon icon="ic:round-search" className="footer-search-icon" />
                        </div>
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