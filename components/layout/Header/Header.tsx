"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation/Navigation'; 
import MobileMenu from '@/components/layout/Navigation/MobileMenu';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'header-sticky py-2' : 'bg-transparent py-4'
            }`}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <Image
                        src="/images/logo.png"
                        alt="Nkqubela Technologies"
                        width={150}
                        height={50}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <Navigation />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden mobile-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu */}
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
}