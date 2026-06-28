"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const days = [
    { day: 1, subtitle: "Day 1", mascot: "/croc.png", left: "8%", top: "20%" },
    { day: 2, subtitle: "Day 2", mascot: "/monkey.png", left: "35%", top: "75%" },
    { day: 3, subtitle: "Day 3", mascot: "/croc.png", left: "65%", top: "20%" },
    { day: 4, subtitle: "Day 4", mascot: "/monkey.png", left: "92%", top: "75%" },
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

            <div className="relative z-10 max-w-6xl mx-auto text-center pt-15">
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

                    <motion.div
                        className="absolute pointer-events-none"
                        style={{ width: 44, height: 44, marginLeft: -22, marginTop: -22 }}
                        animate={{
                            left: ["8%", "35%", "65%", "92%", "65%", "35%", "8%"],
                            top: ["20%", "75%", "20%", "75%", "20%", "75%", "20%"],
                            rotate: [0, 10, -10, 10, -10, 10, 0],
                        }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        {/* <Image src="/ship.png" alt="" width={44} height={44} className="select-none" draggable={false} /> */}
                    </motion.div>

                    {days.map((d, i) => (
                        <motion.div
                            key={d.day}
                            className="absolute"
                            style={{ left: d.left, top: d.top }}
                            initial={{ opacity: 0, scale: 0.6 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        //   transition={{ delay: i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
                        //   whileHover={{ scale: 1.08, rotate: -3 }}
                        >
                            <Link href={`/problems/${d.day}`} className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group">
                                <div className="relative flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-[#58361B] bg-[#9C5F33] text-[#F8ECCD] shadow-lg group-hover:bg-[#6E4220] transition-colors">
                                    <span className="text-3xl font-bold">{d.day}</span>
                                    {/* <Image src={d.mascot} alt="" width={32} height={32} className="select-none" draggable={false} /> */}
                                </div>
                                <span className="mt-2 px-6 py-1 rounded-md bg-[#9C5F33] border-3 border-[#58361B] text-[#F8ECCD] text-sm font-bold whitespace-nowrap shadow-lg group-hover:bg-[#6E4220] transition-colors">
                                    {d.subtitle}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden flex flex-col gap-5 mt-12">
                    {days.map((d) => (
                        <Link
                            key={d.day}
                            href={`/problems/${d.day}`}
                            className="flex items-center gap-4 pl-2 border-l-4 border-dashed bg-[#9C5F33]"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#58361B] bg-[#9C5F33] text-[#F8ECCD] font-bold text-lg shrink-0 -ml-7">
                                {d.day}
                            </div>
                            <div className="flex-1 flex items-center justify-between bg-[#9C5F33] text-[#F8ECCD] rounded-2xl border-2 border-[#58361B] px-8 py-3">
                                <p className="font-bold">{d.subtitle}</p>
                                {/* <Image src={d.mascot} alt="" width={36} height={36} className="select-none" draggable={false} /> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}