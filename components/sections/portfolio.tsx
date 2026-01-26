"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Apno Digital Studio",
        category: "Photography Portfolio",
        description: "A cinematic, dark-themed portfolio website with advanced scrolling animations and gallery interactions.",
        image: "/project-1.jpg", // Placeholder
        tags: ["GSAP", "Locomotive Scroll", "Vanilla JS"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "E-Commerce Dashboard",
        category: "Web Application",
        description: "Full-stack admin dashboard for managing products, orders, and analytics with real-time data.",
        image: "/project-2.jpg", // Placeholder
        tags: ["Next.js", "TailwindCSS", "Supabase"],
        links: { demo: "#", code: "#" },
    },
    {
        title: "Travel Companion App",
        category: "Mobile App",
        description: "Interactive travel planning application with map integration and itinerary management.",
        image: "/project-3.jpg", // Placeholder
        tags: ["React Native", "Firebase", "Maps API"],
        links: { demo: "#", code: "#" },
    },
];

export function Portfolio() {
    return (
        <section id="work" className="py-20 md:py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Featured Work
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            A selection of our most recent projects, featuring custom designs and robust engineering.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        View Github <Github className="w-4 h-4" />
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video w-full bg-secondary/30 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-bold">
                                    {project.title[0]}
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button size="sm" variant="primary" className="gap-2">
                                        Demo <ExternalLink className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="secondary" className="gap-2">
                                        Code <Github className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
