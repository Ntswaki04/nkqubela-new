import type { Metadata } from "next";
import Policy from "./policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Nkqubela Technologies",
  description:
    "Read Nkqubela Technologies' Privacy Policy to understand how we collect, use, and protect your personal information and data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <Policy />;
}
