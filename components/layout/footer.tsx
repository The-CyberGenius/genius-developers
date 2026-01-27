import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Massive Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.02]">
                <h1 className="text-[14vw] font-bold text-center tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent">
                    GENIUS DEVS
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-foreground block">
                            Genius<span className="text-primary">Devs</span>
                        </Link>
                        <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                            Crafting premium digital experiences that merge creativity with code.
                            We build the future, pixel by pixel.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <SocialButton icon={Github} href="https://github.com/The-CyberGenius" label="GitHub" />
                            <SocialButton icon={Twitter} href="#" label="Twitter" />
                            <SocialButton icon={Instagram} href="#" label="Instagram" />
                            <SocialButton icon={Linkedin} href="#" label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h3 className="font-semibold text-lg mb-6 text-foreground">Explore</h3>
                        <ul className="space-y-4">
                            {['Services', 'Work', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GitHub Card */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-lg mb-6 text-foreground">Open Source</h3>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                            <Github className="w-8 h-8 text-foreground mb-4 group-hover:text-primary transition-colors" />
                            <h4 className="font-semibold mb-2">View Source Code</h4>
                            <p className="text-xs text-muted-foreground mb-4">
                                Transparent development. Check out this project's repository on GitHub.
                            </p>
                            <a
                                href="https://github.com/The-CyberGenius/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-2"
                            >
                                Visit Repository &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Genius Developers. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed & Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> by Shiva
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialButton({ icon: Icon, href, label }: any) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:scale-110 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label={label}
        >
            <Icon className="w-4 h-4" />
        </a>
    )
}
