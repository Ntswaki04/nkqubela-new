// sections/Contact/page.tsx
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactInfoTable from "@/components/sections/Contact/ContactInfoTable";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactMap from "@/components/sections/Contact/ContactMap";

export default function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });

    // Detect dark mode (class strategy)
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Hero Section */}
      <section className="video-hero mt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banner.png"
          alt="Contact"
          className="video-hero-bg"
        />
        {/* <div className="video-hero-overlay"></div> */}
        <div className="video-hero-content text-center px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)]" data-aos="fade-up">
            CONTACT US
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-loose max-w-3xl mx-auto" style={{ color: '#ffffff' }} data-aos="fade-up" data-aos-delay="100">
            GROW WITH US
          </p>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="container overflow-hidden">
          <ContactInfoTable isDark={isDark} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-12 xl:gap-10 2xl:gap-14 items-stretch">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  );
}
