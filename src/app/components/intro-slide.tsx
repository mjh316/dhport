"use client";

import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

const introduction = "Hi, I'm Justin.";
const STRING_LENGTH = 9000;

export default function IntroSlide() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(STRING_LENGTH));
  }, []);

  function onMouseMove({
    clientX,
    clientY,
    currentTarget,
  }: {
    clientX: number;
    clientY: number;
    currentTarget: {
      getBoundingClientRect: () => { left: number; top: number };
    };
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    setRandomString(generateRandomString(STRING_LENGTH));
  }

  return (
    <div className="h-full bg-transparent">
      <div
        onMouseMove={onMouseMove}
        className="relative pl-16 flex flex-col justify-center bg-transparent group/card overflow-hidden w-full h-screen"
      >
        <Pattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <TextGenerateEffect words={introduction} className="text-6xl" />
        <h2 className="text-3xl motion-delay-1000 motion-opacity-in-0 motion-duration-2000">
          A software engineer, sports fan, and gamer.
        </h2>
      </div>
    </div>
  );
}

function Pattern({
  mouseX,
  mouseY,
  randomString,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none motion-opacity-in-0 motion-delay-2000 motion-preset-fade-lg">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-900 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const memo = new Map<number, string>();
function generateRandomString(length: number) {
  if (memo.size === 0) {
    for (let times = 0; times < 10; ++times) {
      let result = "";
      for (let i = 0; i < length; ++i) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      memo.set(times, result);
    }
  }
  const randomIndex = Math.floor(Math.random() * memo.size);
  return memo.get(randomIndex) ?? "";
}
