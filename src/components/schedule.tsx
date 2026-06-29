"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Session = { time: string; title: string };
type DaySchedule = { day: number; date: string; sessions: Session[] };

const schedule: DaySchedule[] = [
    {
        day: 1,
        date: "July 1",
        sessions: [
            { time: "08:00 - 08:30", title: "Registration" },
            { time: "08:30 - 09:30", title: "Intro to SKE" },
            { time: "09:45 - 11:00", title: "Buddy Pairing & Ice Breaking" },
            { time: "11:00 - 12:00", title: "Lunch Break" },
            { time: "12:00 - 15:00", title: "Lecture 1 & Lab 1" },
            { time: "15:00 - 15:30", title: "Talk with SKE23" },
        ],
    },
    {
        day: 2,
        date: "July 2",
        sessions: [
            { time: "8:00 - 8:30", title: "Registration" },
            { time: "8:30 - 11:30", title: "Lecture 2" },
            { time: "11:30 - 12:30", title: "Lunch Break" },
            { time: "12:30 - 14:45", title: "Lab 2" },
            { time: "15:00 - 15:30", title: "Talk with SKE23" },
        ],
    },
    {
        day: 3,
        date: "July 3",
        sessions: [
            { time: "8:00 - 8:30", title: "Registration" },
            { time: "8:30 - 11:30", title: "Lecture 3" },
            { time: "11:30 - 12:30", title: "Lunch Break" },
            { time: "12:30 - 14:45", title: "Lab 3" },
            { time: "15:00 - 16:00", title: "Talk with SKE23" },
        ],
    },
    {
        day: 4,
        date: "July 4",
        sessions: [
            { time: "8:00 - 8:30", title: "Registration" },
            { time: "8:30 - 11:30", title: "CODE Party" },
            { time: "11:30 - 12:30", title: "Lunch Break" },
            { time: "13:30 - 14:30", title: "Talk with SKE21" },
            { time: "14:30 - 14:45", title: "Talk with SKE20" },
            { time: "14:45 - 16:30", title: "Reveal Buddy Groups & Bonding Activities" },
        ],
    },
];

function SessionCard({
    session,
    index,
}: {
    session: Session;
    index: number;
}) {
    return (
        <motion.div
            className="relative z-10 flex items-start gap-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center shrink-0 w-10 pt-1">
                <div className="w-10 h-10 rounded-full bg-[#AD5A2C] border-4 border-[#58361B] shadow-lg flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#F8ECCD]" />
                </div>
            </div>

            <div
                className="flex-1 rounded-2xl border-[3px] border-[#2b1d13] bg-[#9C5F33] overflow-hidden px-5 py-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06),inset_0_0_20px_rgba(0,0,0,0.3)] mb-5"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 3px, transparent 3px, transparent 22px)",
                }}
            >
                <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-base md:text-lg text-[#F8ECCD]">{session.title}</h3>
                    <span className="font-heading text-md text-[#F8ECCD] whitespace-nowrap font-bold">{session.time}</span>
                </div>
            </div>
        </motion.div>
    );
}

function DayBlock({ day }: { day: DaySchedule }) {
    return (
        <div className="mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-[#AD5A2C] mb-6">
                Day {day.day}  ( {day.date} )
            </h2>
            <div className="relative">
                <div
                    className="absolute top-1 bottom-5 left-5 w-0.5 border-l-4 border-dashed border-[#58361B] opacity-50 z-0"
                    aria-hidden
                />
                {day.sessions.map((session, i) => (
                    <SessionCard key={`${day.day}-${i}`} session={session} index={i} />
                ))}
            </div>
        </div>
    );
}

export default function ScheduleSection() {
    return (
        <section id="schedule" className="relative bg-[#F8ECCD] min-h-screen px-6 py-16 overflow-hidden">
            <Image
                src="/wm_dot.png"
                alt=""
                fill
                className="absolute inset-0 opacity-15 object-cover pointer-events-none select-none"
            />

            <motion.div
                className="relative z-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <h1 className="font-heading text-5xl md:text-6xl text-[#AD5A2C]">SOS15 Schedule</h1>
                </div>

                {schedule.map((day) => (
                    <DayBlock key={day.day} day={day} />
                ))}
            </motion.div>
        </section>
    );
}