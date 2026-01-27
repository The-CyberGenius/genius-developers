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

import { BackgroundEffects } from "@/components/ui/background-effects";
import { Loader } from "@/components/ui/loader";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

import { ThemeProvider } from "@/components/theme-provider";

import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { FloatingParticles } from "@/components/ui/floating-particles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.className, "min-h-screen bg-background text-foreground antialiased relative")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MouseSpotlight />
          <FloatingParticles />
          <BackgroundEffects />
          <Loader />
          <WhatsAppButton />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
