import clsx from "clsx";
import Image from "next/image";
import { ClarityCard } from "@/components/ClarityCard";
import { DoingCard } from "@/components/DoingCard";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { Revealer } from "@/components/ui/revealer";

// some config based content to avoid repetition
const cardData = [
  {
    title: "Start with Clarity",
    description: "Step into a better learning path.",
    body: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    illu: {
      src: "/illustrations/clarity.svg",
      width: 300,
      height: 300,
      bottom: -60,
      left: -85,
    },
    bg: "#F45B5B",
    underneath: ClarityCard,
  },
  {
    title: "Learn by Doing",
    description: "Practical skills, real projects.",
    body: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    illu: {
      src: "/illustrations/doing.svg",
      height: 400,
      width: 400,
      top: 0,
      right: -90,
    },
    bg: "#5492A0",
    underneath: DoingCard,
  },
  {
    title: "Get Mentored & Supported",
    description: "You're not learning alone.",
    body: "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    illu: {
      src: "/illustrations/support.svg",
      width: 300,
      height: 300,
      bottom: -90,
      left: -80,
    },
    bg: "#6C64A8",
    underneath: PlaceholderCard,
  },
  {
    title: "Achieve & Showcase",
    description: "Build your portfolio, get job-ready.",
    body: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    illu: {
      src: "/illustrations/achieve.svg",
      width: 300,
      height: 300,
      bottom: -60,
      right: 0,
    },
    bg: "#A88964",
    underneath: PlaceholderCard,
  },
];

export default function Home() {
  return (
    <div className="p-8 px-8 container mx-auto lg:px-24">
      <div className="space-y-2">
        <p className="font-semibold text-xl">Your SkillShikshya Journey</p>
        <h1 className="text-4xl">
          <span className="text-primary">Step</span> In.{" "}
          <span className="text-primary">Skill</span> Up.{" "}
          <span className="text-primary">Stand</span> Out. 🚀
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {cardData.map((card, index) => (
          <Revealer
            className={clsx(
              "relative space-y-2 flex gap-2",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse",
            )}
            style={{
              backgroundColor: card.bg,
            }}
            key={`${card.title}-${index}`}
            underneath={<card.underneath bg={card.bg} />}
          >
            <div
              className={clsx("absolute z-20 pointer-events-none")}
              style={{
                ...card.illu,
              }}
            >
              <Image
                src={card.illu.src}
                alt={card.title}
                className="drop-shadow-2xl hover-animation"
                fill
                priority
              />
            </div>
            <div
              className={clsx(
                "*:text-background!",
                "flex flex-col gap-1",
                index % 2 === 1 ? "text-left" : "text-right",
              )}
            >
              <h1 className="text-3xl">{card.title}</h1>
              <p className="text-xl">{card.description}</p>
              <p
                className={clsx(
                  "text-base mt-8",
                  index % 2 === 1
                    ? "md:pr-40 max-sm:pb-40"
                    : "md:pl-40 max-sm:pb-40",
                )}
              >
                {card.body}
              </p>
            </div>
          </Revealer>
        ))}
      </div>
    </div>
  );
}
