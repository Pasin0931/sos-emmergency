"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

const sponsors = [
    { name: "Scuba", logo: "/Scuba.png" },
    { name: "Lactasoy", logo: "/Lactasoy_logo.png" },
    { name: "Koh-Kae", logo: "/koh-kae.png" },
];

export default function SponsorSection() {
    return (
        <section id="sponsors" className="relative bg-[#AD5A2C] py-25 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-pirate font-bold text-4xl md:text-5xl text-[#F8ECCD]">
                    Our Crew&apos;s Sponsors
                </h2>
                <h3 className="text-2xl font-pirate font-bold text-md text-[#F8ECCD] pt-4">
                    Thank you to everyone who made SOS15 possible
                </h3>
                <div
                    className="mt-12 flex flex-wrap items-center justify-center gap-10">
                    {sponsors.map((s) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ rotate: 0, scale: 1.1 }}
                            key={s.name}
                            className="bg-[#F8ECCD] rounded-2xl border-2 border-[#58361B] flex flex-col items-center justify-center w-75 py-10"
                        >
                            <Image
                                src={s.logo}
                                alt={s.name}
                                width={400}
                                height={200}
                                className="h-30 w-auto"
                            />
                            <span className="font-heading text-2xl text-black text-center mt-5">
                                {s.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div
                    className="flex flex-col justify-center items-center mt-12 gap-3">
                    <p className="font-bold font-heading text-4xl md:text-5xl text-[#F8ECCD] leading-tight">
                        Best of luck SKE24
                    </p>
                    <p className="font-bold font-heading text-2xl md:text-2xl text-[#F8ECCD] leading-tight">
                        We're rooting for you at SOS15!
                    </p>
                </div>
            </div>
        </section>
    );
}