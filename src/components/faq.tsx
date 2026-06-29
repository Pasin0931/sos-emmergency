"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: string }[] = [
    {
        question: "What is SKE?",
        answer:
            'Software and Knowledge Engineering or SKE (pronounce "ski") for short, is a branch in Computer Engineering, Kasetsart University. Our branch is also a part of the international Undergraduate Program (IUP).',
    },
    {
        question: "What are the required courses for this branch?",
        answer:
            "Freshmen take general engineering courses (Engineering Mathematics I, General Physics I, Physics Lab I) alongside core Computer Engineering courses. Key courses include Computer Programming I — where you'll learn Python fundamentals — and Discrete Mathematics and Algebra, which covers the mathematical foundations essential to programming.",
    },
    {
        question: "What career opportunities are available after SKE?",
        answer:
            "Graduates can pursue careers as Software Engineers, Full-stack Developers, Data Scientists, AI Engineers, System Architects, and more. The program prepares students for both technical and leadership roles in the software industry.",
    },
    {
        question: "Is a computer required? What about specifications?",
        answer:
            "A computer is required, and it is HIGHLY recommended to have a laptop for portability and convenience during university. For Windows laptops, we recommend at least an Intel Core i5 (12th gen or newer) or AMD Ryzen 5 (5000 series or newer) processor, 8GB RAM (16GB preferred), and 256GB SSD storage. For Mac, we recommend at least an M1 chip or newer (M2/M3 preferred) for optimal performance. A laptop with these specifications will handle Python programming and development tools smoothly.",
    },
    {
        question: "What is SOS Camp?",
        answer:
            "SOS Camp is a preparation camp for freshmen to gain knowledge about programming. It is also a camp to help you prepare for the first semester. The camp will be held on 20th-23rd July.",
    },
    {
        question:
            "Will the camp cover both theoretical and practical aspects of programming?",
        answer:
            "Yes, the camp will cover both theoretical and practical aspects of programming. The camp will start with a lecture and then you will be given exercises to practice what you have learned.",
    },
    {
        question: "What programming languages should I learn?",
        answer:
            "We recommend starting with Python for beginners due to its simple syntax and versatility. Then, depending on your interests, you can learn JavaScript for web development, Java for enterprise applications, or C++ for system programming.",
    },
    {
        question: "How can I improve my programming skills?",
        answer:
            "Practice regularly by working on projects, participate in coding challenges. We recommend you to use AI to leverage your work, not auto completing tasks.",
    },
];

const cardReveal = (delay: number) => ({
    initial: { opacity: 0, y: 24, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function FAQSection() {
    return (
        <div id="faq" className="relative min-h-screen bg-[#F8ECCD] mx-8 my-4 py-12">

            <Image
                className="fixed inset-0 opacity-15 z-0 w-full h-full object-cover select-none"
                src="/wm_dot.png"
                alt="worldmapbg"
                fill
                priority
                draggable={false}
            />

            {/* Croc mascot */}
            <motion.div
                className="absolute z-10 -left-0 top-2/4 -translate-y-1/2 pointer-events-none"
                animate={{ y: [0, -16, 0], rotate: [-15, -10, -15, -10, -15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/croc.png"
                    alt="Croc mascot"
                    width={200}
                    height={200}
                    className="w-56 md:w-80 h-auto"
                />
            </motion.div>

            {/* Monkey mascot */}
            <motion.div
                className="absolute z-10 -right-0 top-3/4 -translate-y-1/2 pointer-events-none"
                animate={{ y: [0, -16, 0], rotate: [15, 10, 15, 10, 15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                <Image
                    src="/monkey.png"
                    alt="Monkey mascot"
                    width={200}
                    height={200}
                    className="w-56 md:w-70 h-auto"
                />
            </motion.div>

            <motion.div
                className="absolute z-10 -right-0 top-1/4 -translate-y-1/2 pointer-events-none"
                animate={{ y: [0, -16, 0], rotate: [10, 15, 10, 15, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                <Image
                    src="/Mascot.png"
                    alt="racoon mascot"
                    width={200}
                    height={200}
                    className="w-56 md:w-70 h-auto"
                />
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.015 }}
                {...cardReveal(0)}
                className="relative z-10 flex flex-col items-center mt-10">
                <h1 className="prose font-heading faq-heading mb-10 text-[#AD5A2C] text-4xl md:text-5xl">
                    Frequently Asked Questions
                </h1>

                <div
                    className="relative w-full max-w-6xl rounded-[1.75rem] border-[3px] border-[#2b1d13] bg-[#9C5F33] overflow-hidden p-10 md:p-14 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06),inset_0_0_26px_rgba(0,0,0,0.35)]"
                >
                    <Accordion type="single" collapsible className="relative z-10 text-[#F8ECCD]">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`item-${index}`}
                                className="border-[#58361B]/60"
                            >
                                <AccordionTrigger className="text-[#F8ECCD] [&>svg]:text-[#F8ECCD]! text-xl">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#F8ECCD]/75 leading-relaxed text-lg">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </motion.div>
        </div>
    );
}