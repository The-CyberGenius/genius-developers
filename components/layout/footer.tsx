import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#D2D2D7] py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6E6E73]">
        <p>© 2026 Shiva. Designed &amp; built in India.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/The-CyberGenius"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:sshivaprajapat@gmail.com"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            sshivaprajapat@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
