"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { isDayUnlocked, unlockLabel } from "@/lib/daylib"

const days = [
    { day: 1, subtitle: "Day 1", img: "/map_day1.png", left: "8%", top: "20%" },
    { day: 2, subtitle: "Day 2", img: "/map_day2.png", left: "35%", top: "75%" },
    { day: 3, subtitle: "Day 3", img: "/map_day3.png", left: "65%", top: "20%" },
    { day: 4, subtitle: "Day 4", img: "/map_day4.png", left: "92%", top: "75%" },
];

export default function NavigateSection() {
    return (
        <section id="problems" className="relative bg-[#F8ECCD] h-screen px-6 overflow-hidden">
            <Image
                src="/wm_dot.png"
                alt=""
                fill
                className="absolute inset-0 opacity-15 object-cover pointer-events-none select-none"
            />

            <motion.div className="relative z-10 max-w-6xl mx-auto text-center pt-15"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="font-bold text-5xl md:text-6xl text-[#AD5A2C]">Chart Your Course</h2>
                <p className="mt-3 text-lg md:text-xl text-[#6E4220] font-medium pb-8">
                    Four days, four stops - every code pirate sails the same route.
                </p>

                <div className="relative hidden md:block mt-16 h-[420px]">
                    <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                        <path
                            d="M 80 80 C 200 40, 260 300, 350 300 C 440 300, 500 40, 650 80 C 760 110, 850 300, 920 300"
                            fill="none"
                            stroke="#58361B"
                            strokeWidth="3"
                            strokeDasharray="10 10"
                            strokeLinecap="round"
                            opacity="0.5"
                        />
                    </svg>

                    {days.map((d, i) => {
                        const unlocked = isDayUnlocked(d.day)

                        return (
                            <motion.div
                                key={d.day}
                                className="absolute"
                                style={{ left: d.left, top: d.top }}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.15, ease: "easeOut" }}
                                whileHover={
                                    unlocked
                                        ? {
                                              y: [0, -4, 0, -4, 0],
                                              transition: { duration: 1.4, ease: "easeInOut", repeat: Infinity },
                                          }
                                        : undefined
                                }
                            >
                                {unlocked ? (
                                    <Link
                                        href={`/problems/${d.day}`}
                                        className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group transition-[filter] hover:[filter:drop-shadow(0_0_6px_white)_drop-shadow(0_0_12px_white)]"
                                    >
                                        <div className="relative border border-[#58361B] border-3 rounded-xl pl-20 bg-[#EBD3A7] w-40 h-40">
                                            <Image
                                                src={d.img}
                                                alt={d.subtitle}
                                                fill
                                                sizes="128px"
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <span className="mt-2 px-6 py-1 rounded-md bg-[#9C5F33] border-3 border-[#58361B] text-[#F8ECCD] text-sm font-bold whitespace-nowrap shadow-lg group-hover:bg-[#6E4220] transition-colors">
                                            {d.subtitle}
                                        </span>
                                    </Link>
                                ) : (
                                    <div
                                        className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-not-allowed select-none"
                                        title={`Unlocks ${unlockLabel(d.day)}`}
                                    >
                                        <div className="relative flex flex-col items-center justify-center w-40 h-40 rounded-xl border-3 border-[#242424] bg-black text-gray-500 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="mt-2 px-6 py-1 rounded-md bg-black border-3 border-[#242424] text-gray-500 text-sm font-bold whitespace-nowrap shadow-lg">
                                            {d.subtitle}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

            </motion.div>
        </section>
    );
}