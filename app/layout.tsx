import type { Metadata } from "next";
import { DM_Sans, Inter, Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nkqubela Technologies",
  description: "Where Technology Meets Tomorrow",
  icons: {
    icon: "/images/logo/Nkqubela%20Tech%20emblem.png",
    shortcut: "/images/logo/Nkqubela%20Tech%20emblem.png",
    apple: "/images/logo/Nkqubela%20Tech%20emblem.png",
  },
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
      <body
        className={`${dmSans.variable} ${inter.variable} ${poppins.variable} font-sans dark:bg-darkmode`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
