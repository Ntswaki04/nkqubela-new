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
  metadataBase: new URL("https://nkqubela.co.za"),
  title: {
    default: "Nkqubela Technologies | ICT Solutions",
    template: "%s | Nkqubela Technologies",
  },
  description:
    "Innovative ICT solutions designed to accelerate growth and modernize operations. Digital transformation, cloud services, and enterprise technology.",
  keywords: [
    "ICT solutions",
    "digital transformation",
    "technology services",
    "South Africa",
    "enterprise software",
    "cloud services",
  ],
  authors: [
    {
      name: "Nkqubela Technologies",
      url: "https://nkqubela.co.za",
    },
  ],
  creator: "Nkqubela Technologies",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://nkqubela.co.za",
    images: [
      {
        url: "/images/logo/Nkqubela%20Tech%20emblem.png",
        width: 1200,
        height: 630,
        alt: "Nkqubela Technologies",
      },
    ],
    siteName: "Nkqubela Technologies",
    title: "Nkqubela Technologies | ICT Solutions",
    description:
      "Innovative ICT solutions designed to accelerate growth and modernize operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nkqubela Technologies | ICT Solutions",
    description:
      "Innovative ICT solutions designed to accelerate growth and modernize operations.",
    images: ["/images/logo/Nkqubela%20Tech%20emblem.png"],
  },
  icons: {
    icon: "/images/logo/Nkqubela%20Tech%20emblem.png",
    shortcut: "/images/logo/Nkqubela%20Tech%20emblem.png",
    apple: "/images/logo/Nkqubela%20Tech%20emblem.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        className={`${dmSans.variable} ${inter.variable} ${poppins.variable} dark:bg-darkmode`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
