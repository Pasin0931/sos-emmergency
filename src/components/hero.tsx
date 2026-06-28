"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card"

function BentoCard({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`relative rounded-[1.75rem] border-[3px] border-[#2b1d13] overflow-hidden p-6 flex flex-col shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06),inset_0_0_26px_rgba(0,0,0,0.35)] ${className ?? ""}`}
            style={{
                backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 3px, transparent 3px, transparent 22px)",
            }}
        >
            {/* <div className="absolute inset-x-0 top-[20%] h-3 z-0 bg-gradient-to-b from-[#d9dbdc] via-[#6a7075] to-[#1c1f22] shadow-md">
                <div className="absolute inset-0 flex items-center justify-between px-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-[#15171a]" />
                    ))}
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-[20%] h-3 z-0 bg-gradient-to-b from-[#d9dbdc] via-[#6a7075] to-[#1c1f22] shadow-md">
                <div className="absolute inset-0 flex items-center justify-between px-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-[#15171a]" />
                    ))}
                </div>
            </div> */}

            {children}
        </div>
    );
}

function AnotherBentoCard({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`relative rounded-[1.75rem] border-[3px] border-[#2b1d13] overflow-hidden p-6 flex flex-col shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06),inset_0_0_26px_rgba(0,0,0,0.35)] ${className ?? ""}`}
        >
            {children}
        </div>
    );
}

export default function HeroSection() {
    return (
        <div className="relative min-h-screen px-6 md:px-10 py-16">
            <Image
                className="fixed inset-0 opacity-15 z-0 w-full h-full object-cover select-none"
                src="/wm_dot.png"
                alt="worldmapbg"
                fill
                priority
                draggable={false}
            />

            {/* Title */}
            <div className="flex flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
                <Image src="/logo.svg" alt="Logo" loading="eager" width={330} height={330} />
                <p className="font-heading text-[#6E4220] text-base md:text-xl font-bold max-w-md leading-relaxed">
                    Welcome to the 15th SOS camp, a preparation camp for SKE24 students.
                    We&apos;ll take you through Python programming fundamentals.
                </p>
            </div>

            {/* Bento grid */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3 md:[grid-template-rows:repeat(3,minmax(140px,1fr))]">
                {/* Problems — big feature card */}
                <Link href="/problems" className="md:[grid-column:1/3] md:[grid-row:1/3]">
                    <BentoCard className="h-85 justify-center bg-[#9C5F33] hover:bg-[#6E4220] transition-colors group">
                        <motion.div
                            className="absolute right-20 bottom-0 pointer-events-none"
                            animate={{ y: [0, -8, 0], rotate: [-10, -6, -10] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image src="/croc.png" alt="" width={120} height={120} className="w-20 md:w-28 h-auto opacity-90" />
                        </motion.div>
                        <motion.div
                            className="absolute right-2 bottom-2 pointer-events-none"
                            animate={{ y: [0, -8, 0], rotate: [10, 6, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        >
                            <Image src="/monkey.png" alt="" width={110} height={110} className="w-16 md:w-24 h-auto opacity-90" />
                        </motion.div>

                        <h2 className="font-heading text-2xl md:text-3xl text-[#F8ECCD] relative z-10">Problems</h2>
                        <p className="text-[#F8ECCD]/80 text-md mt-2 max-w-xl relative z-10">
                            A Python exercise introducing core programming concepts and syntax. Sail through four days of
                            beginner-friendly challenges, from your first print statement to building real programs.
                        </p>
                        <span className="mt-4 text-sm font-heading text-[#F8ECCD] group-hover:underline relative z-10">
                            Explore the map →
                        </span>
                    </BentoCard>
                </Link>

                {/* Schedule */}
                <Link href="/schedule" className="md:[grid-column:3/4] md:[grid-row:1/2]">
                    <BentoCard className="h-full justify-center bg-[#9C5F33] hover:bg-[#58361B] transition-colors">
                        <h2 className="font-heading text-xl text-[#F8ECCD] relative z-10">Schedule</h2>
                        <p className="text-[#F8ECCD]/70 text-sm mt-1 relative z-10">Our journy start from July 20–23</p>
                    </BentoCard>
                </Link>

                {/* FAQs */}
                <Link href="/faq" className="md:[grid-column:3/4] md:[grid-row:2/3]">
                    <BentoCard className="h-full justify-center bg-[#9C5F33] hover:bg-[#6E4220] transition-colors">
                        <h2 className="font-heading text-xl text-[#F8ECCD] relative z-10">FAQs</h2>
                        <p className="text-[#F8ECCD]/70 text-sm mt-1 relative z-10">Frequently Asked Question for SKE students</p>
                    </BentoCard>
                </Link>

                {/* Ship */}
                <div className="md:[grid-column:4/5] md:[grid-row:1/4]">
                    <AnotherBentoCard className="z-0 h-full items-center justify-center bg-[#C08A52] border border-black border-3 opacity-100">
                        <motion.div
                            className="relative opacity-100 "
                            style={{ transformOrigin: "50% 85%" }}
                            animate={{ rotate: [-1, 1, -1] }}
                            transition={{
                                duration: 6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                times: [0, 0.14, 0.33, 0.61, 0.84, 1],
                            }}
                        >
                            <Image src="/ship.png" alt="Pirate ship" loading="eager" width={500} height={500} style={{ width: "37vw", height: "auto" }} />
                        </motion.div>
                        {/* <span className="mt-4 font-heading text-[#F8ECCD]/70 text-sm relative z-10">SOS15</span> */}
                    </AnotherBentoCard>
                </div>

                {/* Contact — wide strip */}
                <div className="md:[grid-column:1/4] md:[grid-row:3/4]">
                    <BentoCard className="h-full flex-row items-center justify-between px-10 bg-[#9C5F33]">
                        <h2 className="font-heading text-xl text-[#F8ECCD] relative z-10">Contact us</h2>
                        <div className="flex items-center gap-3 relative z-10">
                            <a href="https://www.facebook.com/iupku/" target="_blank" rel="noopener noreferrer">
                                <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
                            </a>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </div>
    );
}