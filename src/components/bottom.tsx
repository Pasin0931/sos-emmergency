import Link from "next/link"
import { Anchor, Mail } from "lucide-react"

import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Voyage Map", href: "#problems" },
    { label: "FAQ", href: "#faq" },
    { label: "Sponsors", href: "#sponsors" },
];

export default function BottomSection() {
    return (
        <footer className="relative bg-[#58361B] text-[#F8ECCD] pt-12 pb-8 px-6">
            <div
                className="absolute top-0 inset-x-0 h-px opacity-25"
            // style={{
            //   backgroundImage:
            //     "repeating-linear-gradient(90deg, transparent, transparent 6px, #F8ECCD 6px, #F8ECCD 10px)",
            // }}
            />

            <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-2">
                    <Anchor className="w-6 h-6" />
                    <span className="font-bold text-2xl">SOS Tutorial Camp</span>
                </div>

                <p className="max-w-md text-sm text-[#F8ECCD]/80">
                    A pirate-themed coding camp for first-year Software and Knowledge Engineering students at Kasetsart University.
                </p>

                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
                    {navLinks.map((l) => (
                        <Link key={l.label} href={l.href} className="hover:underline">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/iupku/" target="_blank" rel="noopener noreferrer">
                        <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
                    </a>
                    <a href="https://www.instagram.com/ske.updates/" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
                    </a>
                    {/* <a href="mailto:contact@example.com" aria-label="Email" className="hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a> */}
                </div>

                <p className="text-xs text-[#F8ECCD]/60 pt-2">
                    © {new Date().getFullYear()} SOS Tutorial Camp · Kasetsart University · Fair winds, fellow sailor.
                </p>
            </div>
        </footer>
    );
}