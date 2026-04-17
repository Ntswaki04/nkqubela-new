import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nkqubela Technologies | ICT Solutions & Digital Transformation",
  description:
    "Innovative ICT solutions designed to accelerate growth and modernize operations. Discover our services in digital transformation, enterprise software, and technology consulting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nkqubela Technologies | ICT Solutions & Digital Transformation",
    description:
      "Innovative ICT solutions designed to accelerate growth and modernize operations.",
    type: "website",
    url: "https://nkqubela.co.za",
    images: [
      {
        url: "/images/logo/Nkqubela%20Tech%20emblem.png",
        width: 1200,
        height: 630,
        alt: "Nkqubela Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nkqubela Technologies | ICT Solutions & Digital Transformation",
    description:
      "Innovative ICT solutions designed to accelerate growth and modernize operations.",
    images: ["/images/logo/Nkqubela%20Tech%20emblem.png"],
  },
};

export { default } from "./homePage/home";
