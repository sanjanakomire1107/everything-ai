"use client";

import { useEffect, useRef, useState } from "react";
import { posts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import { cards } from "@/lib/card";
import Card from "@/components/Card";

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <main>
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex-shrink-0 w-screen flex justify-center items-center snap-center"
            >
              <div className=" w-full max-w-[1330px] p-4 mt-15">
                <BlogCard post={post} />
              </div>
             

            </div>
          ))}
        </div>
        
      </div>
     <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
  {cards.map((card, i) => (
    <div key={i}>
      <Card cards={card} />
    </div>
  ))}
</div>


        
    </main>
  );
}

