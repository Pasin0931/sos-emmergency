"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type ProblemCard = {
  title: string;
  description: string;
  status: boolean;
  url: string;
  img_url: string;
  level: string;
};

export default function Problem() {
  const params = useParams();

  const day = Number(params.day);

  if (!Number.isInteger(day) || day < 1 || day > 4) {
    return void notFound();
  }

  let day_problems: ProblemCard[] = [];

  if (day === 1) {
    day_problems = [
      {
        title: "Print & Input",
        description:
          "Learn how to display output and receive input from the user",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/9jm7mula5d/",
        img_url: "/Day1/print-input.svg",
        level: "Foundation",
      },
      {
        title: "Data Types",
        description:
          "Explore Python's core data types: int, float, str, and bool",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/kdptr8j8cb/",
        img_url: "/Day1/data-types.svg",
        level: "Foundation",
      },
      {
        title: "Variables",
        description:
          "Store and reuse values by assigning them to named variables",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/4at10a5264/",
        img_url: "/Day1/variables.svg",
        level: "Easy",
      },
      {
        title: "Operators",
        description:
          "Use arithmetic and comparison operators to compute and compare values",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/shcr1b0nbr/",
        img_url: "/Day1/operators.svg",
        level: "Easy",
      },
      {
        title: "Type Casting",
        description: "Convert between data types to make values work together",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/2iq6ew9nyv/",
        img_url: "/Day1/type-casting.svg",
        level: "Normal",
      },
      {
        title: "Length of String",
        description:
          "Measure how many characters are inside a string using len()",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ezv42chdtp/",
        img_url: "/Day1/length-of-string.svg",
        level: "Normal",
      },
      {
        title: "f-strings",
        description:
          "Embed variables and expressions directly inside strings with f-strings",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/r5bh9r6lzr/",
        img_url: "/Day1/f-strings.svg",
        level: "Hard",
      },
      {
        title: "String Modification",
        description:
          "Slice, reverse, and transform strings using built-in methods",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ow15weecxe/",
        img_url: "/Day1/string-modification.svg",
        level: "Hard",
      },
      {
        title: "Word Masher",
        description:
          "Combine string operations to manipulate and reshape words",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/6rkzv8dadi/",
        img_url: "/Day1/word-masher.svg",
        level: "Hard",
      },
      {
        title: "Steering Out",
        description:
          "Apply everything you've learned to navigate a tricky string challenge",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ybkhpji73e/",
        img_url: "/Day1/steering-out.svg",
        level: "Extra",
      },
      {
        title: "Stretchy",
        description:
          "Stretch and repeat string patterns to produce the desired output",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/h054cpigaj/",
        img_url: "/Day1/stretchy.svg",
        level: "Extra",
      },
      {
        title: "Path to Treasure",
        description:
          "Decode a hidden message by carefully navigating through strings",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/brts8o1keh/",
        img_url: "/Day1/path-to-treasure.svg",
        level: "Extra",
      },
      {
        title: "Target Practice",
        description:
          "Hit the bullseye by combining string skills with precise formatting",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/jzg2w07jeu/",
        img_url: "/Day1/target-practice.svg",
        level: "Extra",
      },
    ];
  } else if (day === 2) {
    day_problems = [
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Foundation",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Foundation",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Easy",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Easy",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Hard",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
    ];
  } else if (day === 4) {
    day_problems = [
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Foundation",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Easy",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Hard",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
    ];
  } else if (day === 3) {
    day_problems = [
      {
        title: "Length of String",
        description:
          "A set is like the evolutionary step backward from a list—no order, no duplicates, just raw values.",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Normal",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Hard",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Hard",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
      {
        title: "Length of String",
        description: "Understand basics of python variable types",
        status: false,
        url: "https://plummet",
        img_url: "/Aa.png",
        level: "Extra",
      },
    ];
  }

  const slide_link = [
    "https://www.youtube.com/watch?v=D89fHW6cbZU",
    "https://www.youtube.com/watch?v=J8WId0vbJ3I&list=RDJ8WId0vbJ3I&start_radio=1",
    "https://www.youtube.com/watch?v=NJNKVYScWz0",
  ];

  const mascot = [
    "/croc.png",
    "/monkey.png", // day 1 masscot
    "/croc.png",
    "/monkey.png", // day 2 masscot
    "/croc.png",
    "/monkey.png", // day 3 masscot
  ];

  const [mounted, setMounted] = useState(false);

  const [problem_cards, set_problem_cards] = useState(day_problems);

  const handle_resource_submit = (bt_clicked: number) => {
    if (day === 1) {
      if (bt_clicked !== 1) {
        alert("Restricted");
      } else {
        window.open(slide_link[0], "_blank");
      }
    } else if (day === 2) {
      if (bt_clicked === 3) {
        alert("Restricted");
      } else {
        if (bt_clicked === 1) {
          window.open(slide_link[0], "_blank");
        } else if (bt_clicked === 2) {
          window.open(slide_link[1], "_blank");
        }
      }
    } else if (day === 3) {
      if (bt_clicked === 1) {
        window.open(slide_link[0], "_blank");
      } else if (bt_clicked === 2) {
        window.open(slide_link[1], "_blank");
      } else if (bt_clicked === 3) {
        window.open(slide_link[2], "_blank");
      }
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(`day_${day}_statuses`);
    if (saved) {
      const statuses: boolean[] = JSON.parse(saved);
      set_problem_cards(
        day_problems.map((p, i) => ({ ...p, status: statuses[i] ?? false })),
      );
    }
    setMounted(true);
  }, [day]);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      `day_${day}_statuses`,
      JSON.stringify(problem_cards.map((p) => p.status)),
    );
  }, [day, problem_cards, mounted]);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-[#F8ECCD] overflow-visible">
      <Image
        className="fixed inset-0 opacity-15 z-0 w-full h-full object-cover select-none"
        src="/wm_dot.png"
        alt="worldmapbg"
        fill
        priority
        draggable={false}
      />

      {day === 1 ? (
        <div className="flex flex-row justify-between items-end">
          <Image
            className="fixed bottom-0 left-0 z-10 -rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[0]}
            alt="character"
            width={350}
            height={350}
            priority
          />

          <Image
            className="fixed bottom-0 -right-5 z-10 rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[1]}
            alt="character"
            width={350}
            height={350}
            priority
          />
        </div>
      ) : day === 2 ? (
        <div className="flex flex-row justify-between items-end">
          <Image
            className="fixed bottom-0 left-0 z-10 -rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[2]}
            alt="character"
            width={350}
            height={350}
            priority
          />

          <Image
            className="fixed bottom-0 -right-5 z-10 rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[3]}
            alt="character"
            width={350}
            height={350}
            priority
          />
        </div>
      ) : day === 3 ? (
        <div className="flex flex-row justify-between items-end">
          <Image
            className="fixed bottom-0 left-0 z-10 -rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[4]}
            alt="character"
            width={350}
            height={350}
            priority
          />

          <Image
            className="fixed bottom-0 -right-5 z-10 rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[5]}
            alt="character"
            width={350}
            height={350}
            priority
          />
        </div>
      ) : day === 4 ? (
        <div className="flex flex-row justify-between items-end">
          <Image
            className="fixed bottom-0 left-0 z-10 -rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[0]}
            alt="character"
            width={350}
            height={350}
            priority
          />

          <Image
            className="fixed bottom-0 -right-5 z-10 rotate-6 w-[200px] md:w-[200px] lg:w-[350px] h-auto select-none"
            draggable={false}
            src={mascot[1]}
            alt="character"
            width={350}
            height={350}
            priority
          />
        </div>
      ) : null}

      {/* <Link
        href="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 bg-[#9C5F33] border-2 border-[#58361B] rounded-xl text-[#F8ECCD] font-bold text-lg hover:bg-[#6E4220] transition-colors"
      >
        ← Home
      </Link> */}

      <h1 className="z-10 prose font-bold text-7xl text-[#AD5A2C]">Problems</h1>
      <p className="z-10 text-3xl">Judgment night {day}</p>

      <div className="flex flex-row justify-center items-center gap-9">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ rotate: 2, scale: 1.067 }}
          className="z-10 flex flex-row items-center justify-center gap-5 pt-6"
        >
          <Button
            onClick={() => handle_resource_submit(1)}
            className="px-5 text-[#F8ECCD] bg-[#9C5F33] border-[#58361B] border-2 font-bold text-lg py-4 text-2xl hover:bg-[#9C5F33] hover:text-[#F8ECCD]"
          >
            Slide day 1
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ rotate: 2, scale: 1.067 }}
          className="z-10 flex flex-row items-center justify-center gap-5 pt-6"
        >
          <Button
            onClick={() => handle_resource_submit(2)}
            className="px-5 text-[#F8ECCD] bg-[#9C5F33] border-[#58361B] border-2 font-bold text-lg py-4 text-2xl hover:bg-[#9C5F33] hover:text-[#F8ECCD]"
          >
            Slide day 2
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ rotate: 2, scale: 1.067 }}
          className="z-10 flex flex-row items-center justify-center gap-5 pt-6"
        >
          <Button
            onClick={() => handle_resource_submit(3)}
            className="px-5 text-[#F8ECCD] bg-[#9C5F33] border-[#58361B] border-2 font-bold text-lg py-4 text-2xl hover:bg-[#9C5F33] hover:text-[#F8ECCD]"
          >
            Slide day 3
          </Button>
        </motion.div>
      </div>

      <Card
        className="z-30 mt-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 h-[70vh] max-w-8xl px-10 py-9 overflow-y-auto pirate-scrollbar border-4 border-gray-500 gap-6
  bg-[#d3d3d3]/30 rounded-4xl"
      >
        {problem_cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: index * 0.02,
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              rotate: 2,
              scale: 1.067,
            }}
          >
            <Card
              className={`flex flex-col justify-center items-center px-4 h-95 w-80 border-2 border-[#6E4220] rounded-3xl text-[#F8ECCD] transition-all duration-300
                ${card.status ? "bg-[#5B3720] opacity-80" : "bg-[#9C5F33]"}`}
              style={{
                backgroundImage: `repeating-linear-gradient(
                                  90deg,
                                  transparent,
                                  transparent 18px,
                                  rgba(0,0,0,0.08) 18px,
                                  rgba(0,0,0,0.08) 20px
                                )`,
              }}
            >
              <Image
                src={card.img_url}
                alt={card.title}
                width={110}
                height={110}
                className="pt-4 select-none"
                draggable={false}
              />
              <hr className="w-full border-gray-300" />
              <div className="flex flex-row justify-between w-full items-center mt-2 px-3">
                <h2 className="font-bold text-[2.2vh]">
                  {index + 1}. {card.title}
                </h2>
                <div className="font-bold text-md mt-[3px] p-1 px-2 border rounded-md text-[#F8ECCD] bg-[#6E4220] border-[#58361B] border-2">
                  {card.level}
                </div>
              </div>
              <p className="text-center font-bold w-full break-words line-clamp-4 text-[16px] pb-15 pt-1 text-start px-2">
                {card.description}
              </p>
              <div className="flex flex-row justify-between items-center w-full px-2 pb-1">
                <Button
                  asChild
                  className="px-5 text-[#F8ECCD] bg-[#6E4220] border-[#58361B] border-2 w-30 text-xl font-bold"
                >
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    Solve
                  </a>
                </Button>
                <div className="flex flex-row items-center justify-between">
                  <button
                    className="font-bold text-xl"
                    type="button"
                    onClick={() =>
                      set_problem_cards((prev) =>
                        prev.map((item, i) =>
                          i === index
                            ? { ...item, status: !item.status }
                            : item,
                        ),
                      )
                    }
                  >
                    {card.status ? "Completed" : "Incomplete"}
                  </button>
                  <Checkbox
                    checked={card.status}
                    onCheckedChange={() => {
                      set_problem_cards((prev) =>
                        prev.map((item, i) =>
                          i === index
                            ? { ...item, status: !item.status }
                            : item,
                        ),
                      );
                    }}
                    className="ml-2 bg-[#6E4220] border-[#58361B]"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </Card>
    </div>
  );
}
