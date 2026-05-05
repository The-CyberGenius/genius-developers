import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shiva — Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer with 5+ years crafting elegant digital experiences. React, Next.js, TypeScript, Node.js.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Shiva",
    "The-CyberGenius",
  ],
  authors: [{ name: "Shiva", url: "https://github.com/The-CyberGenius" }],
  openGraph: {
    title: "Shiva — Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer crafting elegant digital experiences with React, Next.js & TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "font-sans min-h-screen bg-white text-[#1D1D1F] antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
