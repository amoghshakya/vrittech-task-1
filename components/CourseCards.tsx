"use client";

import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { padNumber } from "@/lib/utils";

export function CourseCards() {
  const cardColors = {
    active: "#c33241",
    inactive: "#f9ebec",
  };
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(activeIndex);

  const cards = [
    {
      id: 0,
      title: "All Courses",
      subtitle: "courses you're powering through right now.",
      count: 23,
      color: activeIndex === 0 ? cardColors.active : cardColors.inactive,
      textColor: activeIndex === 0 ? cardColors.active : cardColors.inactive,
    },
    {
      id: 1,
      title: "Upcoming Courses",
      subtitle: "exciting new courses waiting to boost your skills.",
      count: 5,
      color: activeIndex === 1 ? cardColors.active : cardColors.inactive,
      textColor: activeIndex === 1 ? cardColors.inactive : cardColors.active,
    },
    {
      id: 2,
      title: "Ongoing Courses",
      subtitle: "currently happening&mdash;don't miss out on the action!",
      count: 10,
      color: activeIndex === 2 ? cardColors.active : cardColors.inactive,
      textColor: activeIndex === 2 ? cardColors.inactive : cardColors.active,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-[900px] md:h-[600px] gap-4 py-8">
      {cards.map((card, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div
            key={card.id}
            layout
            onClick={() => {
              // store this so we can direction aware translate X
              setPrevIndex(activeIndex);
              setActiveIndex(index);
            }}
            animate={{
              flex: isActive ? 3 : 1,
              // backgroundColor: isActive
              //   ? cardColors.active
              //   : cardColors.inactive,
              color: isActive ? cardColors.inactive : cardColors.active,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="relative h-full rounded-4xl cursor-pointer overflow-hidden p-8 flex flex-col justify-between border hover:border-red-500 transition border-transparent"
          >
            {/* the circle overlay anim is much easier than i thought */}
            {/* keep a dormant div absolute positioned in the corner and animate when we're active */}
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: isActive ? 18 : 0,
              }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              style={{
                transformOrigin: "center",
                backgroundColor: isActive
                  ? cardColors.active
                  : cardColors.inactive,
              }}
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full -z-20"
            ></motion.div>

            {/* Top Section here*/}
            {/* this is the part which is supposed to slide out of the card*/}
            <div className="relative h-1/2 w-full">
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{
                      x: prevIndex < activeIndex ? -500 : 500,
                    }}
                    animate={{
                      x: 0,
                    }}
                    exit={{
                      // the exit behaves weirdly if i swap the values
                      // probably because we'd be looking at stale data on exit anim
                      x: prevIndex < activeIndex ? -500 : 500,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    className="flex flex-col h-full w-full"
                  >
                    <div className="flex justify-end items-center text-white text-sm font-medium">
                      <a href="https://github.com/amoghshakya">
                        View all Courses
                      </a>{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                    <div className="flex-1 flex items-center justify-center pt-4">
                      <Image
                        src="/illustrations/tech-stack.svg"
                        alt="Tech Stack Illustration"
                        width={500}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* bottom section which shows the numbers */}
            <div
              className={clsx(
                "flex items-center gap-1",
                isActive ? "flex-row" : "flex-col-reverse justify-end gap-18",
              )}
            >
              <motion.div
                layout
                className={clsx(
                  "font-bold leading-none select-none text-8xl",
                  isActive ? "text-white mr-4" : "text-[#c33241]",
                )}
              >
                {padNumber(card.count)}
                <sup>+</sup>
              </motion.div>

              <motion.div
                layout
                animate={{
                  rotate: isActive ? 0 : -90,
                }}
                style={{
                  transformOrigin: "center center",
                }}
                className={clsx(
                  "flex flex-col transition-colors duration-500",
                  isActive ? "text-white" : "text-[#c33241] w-50",
                )}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <h2
                  className="text-4xl font-bold! font-sans!"
                  style={{
                    color: isActive ? cardColors.inactive : cardColors.active,
                  }}
                >
                  {card.title}
                </h2>

                <motion.p
                  layout="position"
                  className="text-lg"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: no idea if there's other way to inject unicode (&xxx;)
                  dangerouslySetInnerHTML={{
                    // linter says this is bad
                    __html: card.subtitle,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
