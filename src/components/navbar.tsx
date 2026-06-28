"use client";

import Link from "next/link";
// import image from "next/image"

const links = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/problems", label: "Problems" },
    { href: "/faq", label: "FAQs" },
];

export default function Navbar() {
    return (
        <div className="flex flex-col">
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#9C5F33]/95 backdrop-blur-sm border-b border-white/10">
                <Link href="/" className="font-heading text-white tracking-wider text-2xl">
                    SOS15
                </Link>
                <div className="flex items-center gap-6 md:gap-8">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="font-heading text-white/80 hover:text-white transition-colors text-lg"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </nav>
            <div className="bg-[#8f5a2f] w-screen h-2"></div>
        </div>
    );
}