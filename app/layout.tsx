import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Using Outfit for that modern tech look
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius Developers | Technical Services & Portfolio",
  description: "High-end web development, technical services, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(outfit.className, "min-h-screen bg-background text-foreground antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
