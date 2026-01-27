"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 mb-6 mx-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider">Available for New Projects</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Let's Discuss Your Idea
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Ready to take your business online?
                        <br className="hidden md:block" />
                        Call us directly or drop a message on WhatsApp for instant response.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg shadow-green-500/20" onClick={() => window.open('https://wa.me/918955256878?text=Hi%20Genius%20Developers%2C%20I%20want%20to%20discuss%20a%20project.', '_blank')}>
                            <MessageSquare className="w-5 h-5" />
                            WhatsApp: +91 89552 56878
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2" onClick={() => window.location.href = 'tel:+918955256878'}>
                            <Phone className="w-5 h-5" />
                            Call Us Directly
                        </Button>
                    </div>
                </motion.div>

                <ContactForm />
            </div>
        </section>
    );
}

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        // Validation check (basic)
        const formData = new FormData(formRef.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        setStatus("idle");

        try {
            // NOTE: Replace these with your actual EmailJS keys in .env.local or directly here for testing
            // Service ID: service_xxxxx
            // Template ID: template_xxxxx
            // Public Key: xxxxxxxx

            // Simulating API call if no env vars present to prevent crash during demo
            // In real app use: await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_KEY!);

            // For now alerting user to setup keys
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            if (!serviceId) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
                alert("EmailJS keys are missing. Please check the Guide to setup email sending.");
                setIsLoading(false);
                return;
            }

            // Actual implementation
            await emailjs.sendForm(serviceId, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY });

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto bg-card border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
            {status === "success" ? (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send Another</Button>
                </div>
            ) : (
                <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="user_name" className="text-sm font-medium">Name</label>
                            <input name="user_name" placeholder="John Doe" required className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="text-sm font-medium">Email</label>
                            <input name="user_email" type="email" placeholder="john@example.com" required className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea name="message" rows={4} placeholder="Tell us about your project..." required className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                    </div>
                    <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                        {isLoading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                    </Button>
                    {status === "error" && (
                        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or WhatsApp us.</p>
                    )}
                </form>
            )}
        </motion.div>
    );
}
