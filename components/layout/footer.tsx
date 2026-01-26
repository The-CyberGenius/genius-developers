import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground mb-4 block">
                            Genius<span className="text-primary">Devs</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Building the future of the web, one pixel at a time. Professional web development services for ambitious brands.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#work" className="text-muted-foreground hover:text-primary transition-colors">Work</Link></li>
                            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Genius Developers. All rights reserved.</p>
                    <p>Designed & Built with ❤️ by Shiva</p>
                </div>
            </div>
        </footer>
    );
}
