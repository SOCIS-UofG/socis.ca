import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Provider from "@/lib/trpc/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SOCIS | About",
  description:
    "The Society of Computing and Information Science (SOCIS) is a student organization at the University of Guelph.",
  authors: [
    {
      name: "SOCIS",
      url: "https://socis.ca",
    },
  ],
  keywords: [
    "socis",
    "society",
    "computing",
    "information",
    "science",
    "uog",
    "guelph",
    "university",
    "of",
    "guelph",
    "computer science",
    "software engineering",
    "data science",
    "cybersecurity",
    "web development",
    "programming",
    "club",
    "student",
    "organization",
    "engineering",
    "events",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
