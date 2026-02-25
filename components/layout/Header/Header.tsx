"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

interface NavLink {
    to: string;
    label: string;
}

const navLinks: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/csi", label: "CSI Programmes" },
    { to: "/team", label: "Meet The Team" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
];

export default function Header() {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);
    const [hasMounted, setHasMounted] = useState(false);
    const pathname = usePathname();

    // Fix Hydration by only rendering state-dependent UI after mount
    useEffect(() => {
        setHasMounted(true);
        const savedTheme = localStorage.getItem("theme");
        if (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newDarkState = !isDark;
        setIsDark(newDarkState);
        if (newDarkState) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const onScroll = () => setIsSticky(window.scrollY >= 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        if (typeof document !== "undefined") {
            document.body.style.overflow = "";
        }
    }, [pathname]);

    const openMobile = () => {
        setMobileOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeMobile = () => {
        setMobileOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <header
                className={`fixed h-24 top-0 py-1 z-50 w-full bg-transparent transition-all duration-300 ${isSticky ? 'header-sticky' : ''
                    }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between py-6">
                        <Link href="/" className="flex items-center flex-shrink-0">
                            <Image
                                src="/images/logo/Nkqubela-Technologies-Logo.png"
                                alt="Nkqubela Logo"
                                width={200}
                                height={64}
                                className="h-16 w-auto dark:brightness-200 contrast-125 transition-all"
                                priority
                            />
                        </Link>

                        <ul className="hidden xl:flex flex-grow items-center justify-center space-x-6">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        href={link.to}
                                        className={`nav-link ${pathname === link.to ? 'active' : ''
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className={`custom-theme-toggle ${hasMounted && isDark ? 'dark' : ''}`}
                            >
                                <span className="toggle-track">
                                    <span className="toggle-thumb">
                                        <span className="toggle-dot"></span>
                                    </span>
                                </span>
                            </button>

                            <a
                                href="https://www.linkedin.com/company/nkqubela-technologies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-MidnightNavyText dark:text-white hover:text-primary transition-colors"
                            >
                                <Icon icon="fe:linkedin" className="text-2xl" />
                            </a>

                            <button
                                onClick={openMobile}
                                className={`mobile-toggle xl:hidden ${mobileOpen ? 'active' : ''}`}
                                aria-label="Toggle mobile menu"
                            >
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line mt-1.5"></span>
                                <span className="hamburger-line mt-1.5"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    onClick={closeMobile}
                    className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 backdrop-blur-sm transition-all duration-300"
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`mobile-menu ${mobileOpen ? 'open' : 'closed'} xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-2xl max-w-xs z-50`}
            >
                <div className="flex items-center justify-between p-6 border-b dark:border-dark_border">
                    <Image
                        src="/images/logo/Nkqubela-Technologies-Logo.png"
                        alt="Nkqubela Logo"
                        width={150}
                        height={48}
                        className="h-12 w-auto"
                    />
                    <button
                        onClick={closeMobile}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-dark_input rounded-full transition-colors"
                    >
                        <Icon icon="ic:round-close" className="text-2xl dark:text-white" />
                    </button>
                </div>
                <nav className="flex flex-col p-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link key={link.to} href={link.to} className="mobile-nav-link">
                            {link.label === 'Services' ? 'Our Services' : link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}