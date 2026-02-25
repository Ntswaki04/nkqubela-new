"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuData } from './menuData';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-8">
            {menuData.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'text-primary' : ''}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}