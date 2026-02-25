"use client";

import Link from 'next/link';
import { menuData } from './menuData';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    return (
        <div className={`mobile-menu lg:hidden ${isOpen ? 'open' : 'closed'}`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
                {menuData.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}