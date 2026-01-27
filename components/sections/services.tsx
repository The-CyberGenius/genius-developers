"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GlitchText } from "@/components/ui/glitch-text";

export function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <GlitchText text="Our Expertise" />
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We deliver comprehensive digital solutions tailored to your business needs, from design to deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <SpotlightCard
                            key={index}
                            className="p-8 h-full flex flex-col items-start"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {service.description}
                            </p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
