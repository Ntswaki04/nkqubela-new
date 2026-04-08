import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <footer className="footer-container">
        {/* Logo Overlapping Top */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column !items-center !text-center">
            <Link href="/" className="inline-flex items-center justify-center">
              <Image
                src="/images/logo/Nkqubela-Technologies-Logo.png"
                alt="Nkqubela Logo"
                width={220}
                height={70}
                className="h-auto w-[180px] sm:w-[220px] object-contain"
              />
            </Link>
            <p className="footer-link-item mt-4 max-w-[220px]">
              Simplifying Complexity
            </p>
            <div className="mt-5 flex w-full justify-center">
              <a
                href="https://www.linkedin.com/company/nkqubela-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </div>
          </div>

          <div className="footer-v-divider hidden lg:block"></div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-link-list">
              <li>
                <Link href="/" className="footer-link-item">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link-item">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link-item">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link-item">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-v-divider hidden lg:block"></div>

          {/* Contact Us Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Get In Touch</h3>
            <ul className="footer-link-list">
              <li>
                <a href="tel:+27430500821" className="footer-link-item">
                  +27 43 050 0821
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@nkqubela.co.za"
                  className="footer-link-item"
                >
                  Info@nkqubela.co.za
                </a>
              </li>
              <li>
                <span className="footer-link-item">
                  Chestnut House <br></br> Palm Square Business Park <br></br>{" "}
                  Beacon Bay <br></br> East London <br></br> 5201
                </span>
              </li>
            </ul>
          </div>
          {/*<div className="footer-v-divider hidden lg:block"></div>*/}

          {/* Search Column */}
          {/*<div className="footer-search-container">*/}
          {/*    <div className="footer-search-box">*/}
          {/*        <input*/}
          {/*            type="text"*/}
          {/*            placeholder="Search.."*/}
          {/*            className="footer-search-input"*/}
          {/*        />*/}
          {/*        <Icon icon="ic:round-search" className="footer-search-icon" />*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {year} Nkqubela Technologies. All Rights Reserved.{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
