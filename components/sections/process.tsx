"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/spotlight";
import { processSteps as steps } from "@/data/process";

export function Process() {
    return (
        <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Our Workflow
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From concept to deployment, we follow a streamlined process to ensure your project's success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="h-full p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <span className="text-primary/40 text-sm">0{index + 1}</span>
                                        {step.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Connector Line (Desktop Only) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 -right-3 z-20">
                                            <ArrowRight className="w-6 h-6 text-muted-foreground/20" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
