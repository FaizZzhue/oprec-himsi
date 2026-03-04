import { Instagram, Mail, Linkedin } from "lucide-react";
import { navlink } from "@/constans";

const Footer = () => {
    return (
        <footer className="border-t border-border/50 py-12 px-4">
            <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div className="shrink-0 text-center md:text-left order-2 md:order-none">
                    <p className="text-xs text-foreground mt-1">
                        © 2026 HIMSI UMDP. All rights reserved.
                    </p>
                </div>

                <nav
                    aria-label="Footer navigation"
                    className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm order-1 md:order-none"
                >
                    {navlink.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-foreground hover:text-[#2464A8] font-semibold transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex justify-center gap-4 md:justify-end order-3 md:order-none">
                    <a
                        href="https://www.instagram.com/himsi.umdp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-[#2464A8] border hover:border-[#2464A8] transition-colors"
                        aria-label="Instagram HIMSI UMDP"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>

                    <a
                        href="mailto:himsi@mhs.mdp.ac.id"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-[#2464A8] border hover:border-[#2464A8] transition-colors"
                        aria-label="Email HIMSI UMDP"
                    >
                        <Mail className="w-5 h-5" />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/himpunan-mahasiswa-sistem-informasi-universitas-multi-data-palembang/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-[#2464A8] border hover:border-[#2464A8] transition-colors"
                        aria-label="LinkedIn HIMSI UMDP"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;