"use client";

import Link from "next/link";
// import image from "next/image"

import { motion } from "framer-motion"

const links = [
    { href: "/", label: "Home" },
    { href: "/problems", label: "Problems" },
    { href: "/schedule", label: "Schedule" },
    { href: "/faq", label: "FAQs" },
];

export default function Navbar() {
    return (
        <div className="flex flex-col">
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#9C5F33]/95 backdrop-blur-sm border-b border-white/10">
                <motion.div
                    whileHover={{
                        rotate: [0, -8, 8, -8, 0],
                        scale: 1.05,
                    }}
                    transition={{
                        rotate: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.2, ease: "easeOut" },
                    }}
                >
                    <Link href="/" className="font-heading text-white tracking-wider text-2xl">
                        SOS15
                    </Link>
                </motion.div>

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
            <div className="bg-[#8f5a2f] w-full h-2"></div>
        </div>
    );
}