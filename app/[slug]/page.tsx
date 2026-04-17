// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Aboutpage from "../Aboutpage";
import Careerpage from "../Careerpage";
import Contactpage from "../Contactpage";
import CSIpage from "../CSIpage";
import Servicespage from "../Servicespage";
import TeamPage from "../Teampage";
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
  team: {
    title: "Our Leadership Team | Nkqubela Technologies",
    description:
      "Meet the expert leadership team driving innovation at Nkqubela Technologies. Discover the executives and specialists behind our success.",
  },
  teams: {
    title: "Our Leadership Team | Nkqubela Technologies",
    description:
      "Meet the expert leadership team driving innovation at Nkqubela Technologies. Discover the executives and specialists behind our success.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  // Check if it's a known main page
  if (metadataMap[slug]) {
    const meta = metadataMap[slug];
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "website",
        url: `https://nkqubela.co.za/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
      },
    };
  }

  // Check if it's a CSI initiative
  const csiInitiative = initiatives.find(
    (init) => init.slug === `/${slug}`
  );
  if (csiInitiative) {
    return {
      title: `${csiInitiative.title} | Nkqubela Technologies`,
      description: csiInitiative.desc,
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
        images: [csiInitiative.img],
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
    { slug: "team" },
    { slug: "teams" },
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
    case "team":
      return <TeamPage />;
    case "teams":
      return <TeamPage />;
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
