"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { CardSpotlight } from "@/components/ui/spotlight";

import { projects } from "@/data/projects";

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
                    <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/The-CyberGenius', '_blank')}>
                        View Github <Github className="w-4 h-4" />
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-card text-card-foreground relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border-border w-full h-auto rounded-xl p-6 border transition-all duration-300">
                                <CardSpotlight className="h-full">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-card-foreground"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-muted-foreground text-sm max-w-sm mt-2"
                                    >
                                        {project.category}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <div className="relative w-full aspect-video rounded-xl group-hover/card:shadow-xl overflow-hidden">
                                            <Image
                                                src={project.image}
                                                height={1000}
                                                width={1000}
                                                className="h-full w-full object-cover rounded-xl group-hover/card:scale-110 transition-transform duration-500"
                                                alt={project.title}
                                            />
                                            {project.links && (
                                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                    <Button size="sm" variant="primary" className="gap-2" onClick={() => window.open(project.links!.work, '_blank')}>
                                                        Visit Site <ExternalLink className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        translateZ="50"
                                        className="text-muted-foreground text-sm mt-4 line-clamp-2"
                                    >
                                        {project.description}
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-6">
                                        <CardItem
                                            translateZ={20}
                                            className="flex flex-wrap gap-2"
                                        >
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </CardItem>
                                    </div>
                                </CardSpotlight>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
