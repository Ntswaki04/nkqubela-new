// app/Teampage.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ExecutiveTeam from "@/components/sections/Team/ExecutiveTeam";
import ManagementBanner from "@/components/sections/Team/ManagementBanner";
import ManagementTeam from "@/components/sections/Team/ManagementTeam";

export default function TeamPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="video-hero mt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banner.png"
          alt="Meet The Team"
          className="video-hero-bg"
        />
        {/* <div className="video-hero-overlay" /> */}
        <div className="video-hero-content text-center px-4 max-w-4xl absolute inset-0 flex flex-col justify-center items-center pointer-events-none mt-20">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)] pointer-events-auto"
            data-aos="fade-up"
          >
            MEET THE TEAM
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 font-medium leading-loose max-w-3xl mx-auto pointer-events-auto"
            style={{ color: '#ffffff' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            OUR PEOPLE
          </p>
        </div>
      </section>

      {/* ── EXECUTIVE TEAM ── */}
      <ExecutiveTeam />

      {/* ── MANAGEMENT BANNER DIVIDER ── */}
      <ManagementBanner />

      {/* ── CORE MANAGEMENT TEAM ── */}
      <ManagementTeam />
    </main>
  );
}
