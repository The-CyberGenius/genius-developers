import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
