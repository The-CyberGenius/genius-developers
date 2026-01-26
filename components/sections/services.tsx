"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Palette,
    LineChart,
    Smartphone,
    Globe,
    Database
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance websites built with Next.js, React, and modern web technologies.",
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Cross-platform mobile applications that provide intuitive user experiences on iOS and Android.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Premium, user-centric interfaces designed to engage and convert your audience.",
    },
    {
        icon: Database,
        title: "Backend Systems",
        description: "Scalable server architectures, API design, and database management for complex apps.",
    },
    {
        icon: LineChart,
        title: "SEO & Performance",
        description: "Optimization strategies to boost your visibility and ensure lightning-fast load times.",
    },
    {
        icon: Code2,
        title: "Technical Consulting",
        description: "Expert advice on tech stack selection, architecture planning, and code quality.",
    },
];

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
                        Our Expertise
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We deliver comprehensive digital solutions tailored to your business needs, from design to deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/5"
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
