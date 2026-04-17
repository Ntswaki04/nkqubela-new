import type { Metadata } from "next";

import TeamPage from "../Teampage";

export const metadata: Metadata = {
  title: "Our Leadership Team | Nkqubela Technologies",
  description:
    "Meet the expert leadership team driving innovation at Nkqubela Technologies. Discover the executives and specialists behind our success.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Leadership Team | Nkqubela Technologies",
    description:
      "Meet the expert leadership team driving innovation at Nkqubela Technologies. Discover the executives and specialists behind our success.",
    type: "website",
    url: "https://nkqubela.co.za/team",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Leadership Team | Nkqubela Technologies",
    description:
      "Meet the expert leadership team driving innovation at Nkqubela Technologies. Discover the executives and specialists behind our success.",
  },
};

export default TeamPage;
