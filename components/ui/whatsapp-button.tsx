"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/918955256878?text=Hi%20Genius%20Developers%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl">
                    Chat with us!
                </div>
            </div>

            {/* Button */}
            <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow duration-300">
                <MessageCircle className="w-8 h-8 text-white fill-white" />

                {/* Ping Animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
            </div>
        </motion.a>
    );
};
