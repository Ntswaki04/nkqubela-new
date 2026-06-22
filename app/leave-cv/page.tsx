import type { Metadata } from "next";
import LeaveCV from "./LeaveCV";

export const metadata: Metadata = {
  title: "Leave Your CV | Nkqubela Technologies",
  description:
    "Drop your CV with Nkqubela Technologies. Create a quick profile and our HR team will keep your CV on file for current and future opportunities.",
  alternates: {
    canonical: "/leave-cv",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeaveCVPage() {
  return <LeaveCV />;
}
