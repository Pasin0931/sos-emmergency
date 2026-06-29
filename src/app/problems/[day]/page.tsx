"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { isDayUnlocked, unlockLabel } from "@/lib/daylib";

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

  if (!isDayUnlocked(day)) {
    // alert(day)
    return (
      <div className="relative flex flex-col justify-center items-center h-screen bg-[#F8ECCD] text-center px-6 overflow-hidden">
        <Image
          className="fixed inset-0 opacity-15 z-0 w-full h-full object-cover select-none"
          src="/wm_dot.png"
          alt=""
          fill
          priority
          draggable={false}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#AD5A2C" className="z-10 w-16 h-16 mb-4">
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="z-10 font-bold text-5xl text-[#AD5A2C] mb-2">Not yet, sailor</h1>
        <p className="z-10 text-2xl text-[#6E4220]">
          Day {day} unlocks on {unlockLabel(day)}.
        </p>
        <Link
          href="/"
          className="z-10 mt-6 px-5 py-3 bg-[#9C5F33] border-2 border-[#58361B] rounded-xl text-[#F8ECCD] font-bold hover:bg-[#6E4220] transition-colors"
        >
          ← Back
        </Link>
      </div>
    );
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
        title: "Booleans",
        description: "Logical Connectives with True and False",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/kzqpawyqcm/",
        img_url: "/Day2/booleans.svg",
        level: "Foundation",
      },
      {
        title: "If Elif Else",
        description: "Core component of all the algorithm.",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/e8nbdyxmsi/",
        img_url: "/Day2/if-elif-else.svg",
        level: "Foundation",
      },
      {
        title: "List Access",
        description: "Access elements in a list using index positions",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/jyjevp05vh/",
        img_url: "/Day2/list-access.svg",
        level: "Foundation",
      },
      {
        title: "List Modify",
        description: "Add, remove, and change elements in a list",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/pns6uqkt8o/",
        img_url: "/Day2/list-modify.svg",
        level: "Foundation",
      },
      {
        title: "List Slicing",
        description: "Extract portions of a list using slice notation",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/45ox21th5n/",
        img_url: "/Day2/list-slicing.svg",
        level: "Foundation",
      },
      {
        title: "List to String",
        description: "Convert a list of values into a single joined string",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/be6vhfio37/",
        img_url: "/Day2/list-to-string.svg",
        level: "Foundation",
      },
      {
        title: "Dictionary",
        description: "It's like a list, but with a cooler label!",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ph1tv7rk8e/",
        img_url: "/Day2/dictionary.svg",
        level: "Foundation",
      },
      {
        title: "For Loop",
        description: "Repeat any code with a few line.",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/fc677qv4p4/",
        img_url: "/Day2/for-loop.svg",
        level: "Foundation",
      },
      {
        title: "No Cheese",
        description: "Apply conditions and loops to filter out the unwanted",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/dya0jenvao/",
        img_url: "/Day2/no-cheese.svg",
        level: "Normal",
      },
      {
        title: "Bar Chart",
        description: "Draw a bar chart using loops and print statements",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/tf057r0qer/",
        img_url: "/Day2/bar-chart.svg",
        level: "Normal",
      },
      {
        title: "IP Address",
        description: "Parse and validate IP address strings",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ha3gxrs9ka/",
        img_url: "/Day2/ip-address.svg",
        level: "Normal",
      },
      {
        title: "Stairs",
        description: "Print a staircase pattern using loops",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/xfqvlawg68/",
        img_url: "/Day2/stairs.svg",
        level: "Normal",
      },
      {
        title: "Binary",
        description: "Convert numbers into their binary representation",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/qibdsxgklx/",
        img_url: "/Day2/binary.svg",
        level: "Hard",
      },
      {
        title: "Pyramid",
        description: "Build a pyramid pattern using nested loops and spacing",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/s9ihqzjbgv/",
        img_url: "/Day2/pyramid.svg",
        level: "Hard",
      },
    ];
  } else if (day === 4) {
    day_problems = [
      {
        title: "Addition",
        description: "Add two numbers together using basic arithmetic",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ntq5dc4xir/",
        img_url: "/Day4/addition.svg",
        level: "Easy",
      },
      {
        title: "Odd or Even?",
        description: "Determine whether a number is odd or even",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/8h6n2d80f7/",
        img_url: "/Day4/odd-or-even.svg",
        level: "Easy",
      },
      {
        title: "Score",
        description: "Calculate and evaluate a score based on given conditions",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/xqu0a7wi4k/",
        img_url: "/Day4/score.svg",
        level: "Easy",
      },
      {
        title: "Fox and Rabbit",
        description: "Simulate the interaction between a fox and a rabbit",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/eogtc3wkyb/",
        img_url: "/Day4/fox-and-rabbit.svg",
        level: "Easy",
      },
      {
        title: "Week",
        description: "Map numbers to days of the week using conditionals",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/t97v9b4uam/",
        img_url: "/Day4/week.svg",
        level: "Easy",
      },
      {
        title: "Three Numbers",
        description: "Analyze three numbers to find patterns and results",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/k4tsnoet3h/",
        img_url: "/Day4/three-numbers.svg",
        level: "Normal",
      },
      {
        title: "Incorrect Sum",
        description: "Find and fix an incorrect sum in a sequence",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/efdf7dao5h/",
        img_url: "/Day4/incorrect-sum.svg",
        level: "Normal",
      },
      {
        title: "Word Chain",
        description: "Link words together where each word starts with the last letter of the previous",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/gi2zw97996/",
        img_url: "/Day4/word-chain.svg",
        level: "Normal",
      },
      {
        title: "Snakes",
        description: "Navigate a snake through a grid using logic and loops",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/j97ydjk25a/",
        img_url: "/Day4/snakes.svg",
        level: "Hard",
      },
      {
        title: "Boxed Out",
        description: "Determine which elements fall outside a defined boundary",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/bz2czj7yh4/",
        img_url: "/Day4/boxed-out.svg",
        level: "Hard",
      },
      {
        title: "Slime",
        description: "Model slime growth or spread using recursive logic",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/lzcno4nymf/",
        img_url: "/Day4/slime.svg",
        level: "Extra",
      },
      {
        title: "Sweet Swipe",
        description: "Swipe the right sweets using pattern matching and conditions",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/0az2kmxz4e/",
        img_url: "/Day4/sweet-swipe.svg",
        level: "Extra",
      },
    ];
  } else if (day === 3) {
    day_problems = [
      {
        title: "While Loops",
        description: "Repeat code using while loops until a condition becomes false",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/yvgkutrw8y/",
        img_url: "/Day2/while-loops.svg",
        level: "Foundation",
      },
      {
        title: "Try Except",
        description: "Handle errors gracefully using try and except blocks",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/1hhdu8uopg/",
        img_url: "/Day2/try-except.svg",
        level: "Foundation",
      },
      {
        title: "Function",
        description: "Define reusable blocks of code with functions",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/5abdcke3wc/",
        img_url: "/Day2/function.svg",
        level: "Foundation",
      },
      {
        title: "Math",
        description: "Apply mathematical operations and the math module to solve problems",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/k1g0g2zjb5/",
        img_url: "/Day2/math.svg",
        level: "Normal",
      },
      {
        title: "Random: Numbers",
        description: "Generate random numbers using Python's random module",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/no8cfnz9mq/",
        img_url: "/Day2/random-numbers.svg",
        level: "Normal",
      },
      {
        title: "Random: Choices",
        description: "Pick random elements from a sequence using random.choice",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/k7e7p46ppg/",
        img_url: "/Day2/random-choices.svg",
        level: "Normal",
      },
      {
        title: "Cashier",
        description: "Simulate a cashier system combining loops, functions, and math",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/ectgyw2cly/",
        img_url: "/Day2/cashier.svg",
        level: "Hard",
      },
      {
        title: "Factory",
        description: "Model a factory production line using functions and logic",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/brbjtbbu3h/",
        img_url: "/Day2/factory.svg",
        level: "Hard",
      },
      {
        title: "Parkour",
        description: "Navigate through a series of tricky coding obstacles",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/7err482uzo/",
        img_url: "/Day2/parkour.svg",
        level: "Hard",
      },
      {
        title: "RPG",
        description: "Build a text-based RPG using everything you've learned",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/fzk9jaiap2/",
        img_url: "/Day2/rpg.svg",
        level: "Extra",
      },
      {
        title: "Texting Texting",
        description: "Simulate a messaging system with functions and string manipulation",
        status: false,
        url: "https://elabsheet.org/elab/taskpads/show/l1ys7y295y/",
        img_url: "/Day2/texting-texting.svg",
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
        className="z-30 mt-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 h-[70vh] max-w-8xl px-10 py-9 overflow-y-auto border-4 border-gray-500 gap-6
      bg-[#d3d3d3]/30 rounded-4xl pirate-scrollbar"
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