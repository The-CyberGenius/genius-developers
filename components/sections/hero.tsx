"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { GlitchText } from "@/components/ui/glitch-text";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Elements removed to use key global BackgroundEffects */}
            {/* Floating Tech Icons */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] opacity-20 hidden md:block"
            >
                <Code className="w-24 h-24 text-primary" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 left-[10%] opacity-20 hidden md:block"
            >
                <Sparkles className="w-16 h-16 text-purple-500" />
            </motion.div>

            <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Professional Web Development Services
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                >
                    Turning Ideas Into <br />
                    <span className="text-primary cursor-default"><GlitchText text="Digital Reality" /></span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
                >
                    We build high-performance websites, web applications, and digital experiences that help your business grow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Button size="lg" className="w-full sm:w-auto gap-2 min-w-[200px]" onClick={() => window.open('https://wa.me/918955256878?text=Hi%20Genius%20Developers%2C%20I%20want%20to%20discuss%20a%20project.', '_blank')}>
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 min-w-[200px]" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                            <Code className="w-4 h-4" />
                            View Our Work
                        </Button>
                    </div>

                    {/* Trust Indicator */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 h-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 4 }}
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.1
                                    }}
                                    className="w-1 bg-primary rounded-full"
                                />
                            ))}
                        </div>
                        <span className="font-medium">100% Client Satisfaction</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section >
    );
}
