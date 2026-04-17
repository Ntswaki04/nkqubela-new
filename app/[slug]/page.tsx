// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Aboutpage from "../Aboutpage";
import Careerpage from "../Careerpage";
import Contactpage from "../Contactpage";
import CSIpage from "../CSIpage";
import Servicespage from "../Servicespage";
import CSIArticleTemplate from "@/components/sections/CSI/CSIArticleTemplate";

import { initiatives } from "@/components/sections/CSI/csiData";

const metadataMap: Record<string, { title: string; description: string }> = {
  about: {
    title: "About Nkqubela Technologies | Our Story & Mission",
    description:
      "Learn about Nkqubela Technologies, our mission, vision, values, and journey in digital transformation. Discover our commitment to innovative ICT solutions.",
  },
  services: {
    title: "ICT Services | Nkqubela Technologies",
    description:
      "Explore our comprehensive range of ICT services including cloud solutions, enterprise software, digital transformation, and technology consulting.",
  },
  careers: {
    title: "Careers at Nkqubela Technologies | Join Our Team",
    description:
      "Discover exciting career opportunities at Nkqubela Technologies. View open positions in technology, business, and operations.",
  },
  contact: {
    title: "Contact Nkqubela Technologies | Get in Touch",
    description:
      "Contact Nkqubela Technologies for inquiries, support, or partnership opportunities. Find our office location and reach out today.",
  },
  csi: {
    title: "Corporate Social Initiatives | Nkqubela Technologies",
    description:
      "Learn about Nkqubela Technologies' corporate social responsibility initiatives, community programs, and social impact projects.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const defaultOgImage = "/images/logo/Nkqubela%20Tech%20emblem.png";

  // Check if it's a known main page
  if (metadataMap[slug]) {
    const meta = metadataMap[slug];
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `/${slug}`,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "website",
        url: `https://nkqubela.co.za/${slug}`,
        images: [
          {
            url: defaultOgImage,
            width: 1200,
            height: 630,
            alt: "Nkqubela Technologies",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
        images: [defaultOgImage],
      },
    };
  }

  // Check if it's a CSI initiative
  const csiInitiative = initiatives.find((init) => init.slug === `/${slug}`);
  if (csiInitiative) {
    return {
      title: `${csiInitiative.title} | Nkqubela Technologies`,
      description: csiInitiative.desc,
      alternates: {
        canonical: csiInitiative.slug,
      },
      openGraph: {
        title: csiInitiative.title,
        description: csiInitiative.desc,
        type: "article",
        url: `https://nkqubela.co.za${csiInitiative.slug}`,
        images: [
          {
            url: csiInitiative.img,
            width: 1200,
            height: 630,
            alt: csiInitiative.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: csiInitiative.title,
        description: csiInitiative.desc,
        images: [csiInitiative.img || defaultOgImage],
      },
    };
  }

  // Not found
  return {
    title: "Page Not Found | Nkqubela Technologies",
  };
}

export function generateStaticParams() {
  // Generate statically for all basic pages
  const mainPages = [
    { slug: "about" },
    { slug: "careers" },
    { slug: "contact" },
    { slug: "csi" },
    { slug: "services" },
  ];

  // AND dynamically generate static paths for all CSI initiatives from the data!
  const csiPages = initiatives.map((init) => ({
    slug: init.slug.replace("/", ""), // remove leading slash
  }));

  return [...mainPages, ...csiPages];
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  // Check specific pages first
  switch (params.slug) {
    case "about":
      return <Aboutpage />;
    case "careers":
      return <Careerpage />;
    case "contact":
      return <Contactpage />;
    case "csi":
      return <CSIpage />;
    case "services":
      return <Servicespage />;
  }

  // If it's none of the core pages, check if it's a known CSI slug dynamically by looking at the data
  const isCsiSlug = initiatives.some((init) => init.slug === `/${params.slug}`);

  if (isCsiSlug) {
    // Automatically acts as a universal dynamic template generator
    return <CSIArticleTemplate slug={params.slug} />;
  }

  // If nothing matches, 404
  return notFound();
}
