import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import './globals.css';

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Nkqubela Technologies',
    description: 'Where Technology Meets Tomorrow',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://code.iconify.design/3/3.1.0/iconify.min.js"
                    strategy="beforeInteractive"
                />
            </head>
            <body className={`${dmSans.variable} font-sans dark:bg-darkmode`}>
                <Header />
                <main className="min-h-screen pt-32">{children}</main>
                <Footer />
            </body>
        </html>
    );
}