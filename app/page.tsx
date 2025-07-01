"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  "AI-powered Talent Matching",
  "Intelligent Candidate Insights",
  "Streamlined Hiring Workflow",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 4000); // ⏱ change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div className="flex w-[300vw]">
        {posts.map((text, i) => (
          <div
            key={i}
            className="w-screen h-screen flex items-center justify-center text-4xl font-bold"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
