"use client"

import { useEffect, useRef, useState } from "react"
import { posts } from "@/lib/posts"
import { cards } from "@/lib/card"
import BlogCard from "@/components/BlogCard"
import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import RecentPostCard from "@/components/RecentPostCard"
import { recent } from "@/lib/recent"
import NewsletterSignup from "@/components/NewsLetterSignup"
import SearchAndTags from "@/components/SearchTags"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(9)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    })
  }, [index])

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, cards.length))
  }

  return (
    <main>
      {/* BlogCard Slider */}
      <div className="min-h-screen">
        <div
          ref={containerRef}
          className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {posts.map((post) => (
            <div key={post.slug} className="flex-shrink-0 w-screen flex justify-center items-center snap-center">
              <div className="w-full max-w-[1330px] p-4 mt-15">
                <BlogCard post={post} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SearchAndTags
        onSearch={(query) => {
          console.log("Search query:", query)
          // Filter logic here
        }}
        onTagSelect={(tag) => {
          console.log("Selected tag:", tag)
          // Filter logic here
        }}
      />

      {/* Cards Section */}
      <div className="relative mt-16 px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4 ">
          {cards.slice(0, visibleCount).map((card, i) => (
            <Card key={i} cards={card} />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < cards.length && (
        <div className="flex justify-center mt-10">
          <div className="group rounded-md">
            <div className="p-[2px] rounded-md bg-transparent group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:via-purple-500 group-hover:to-orange-400 transition-all duration-300">
              <Button
                onClick={loadMore}
                variant="ghost"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-black focus-visible:ring-0 focus-visible:outline-none"
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Recent Posts - Updated Header Design */}
      <div className="relative mt-50 px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        <section className="max-w-[1330px] mx-auto mt-16 px-4">
          {/* Updated Header Section */}
          <div className="text-center space-y-4 mb-12">
            {/* Fresh Perspectives Label */}
            <div className="inline-block mb-4 bg-gray-100 rounded-lg px-1 py-1">
              <span className="px-1 py-2 text-sm font-semibold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text rounded-lg bg-white/40 backdrop-blur-sm">
                Fresh Perspectives
              </span>
            </div>

            {/* Main Heading with Navigation */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex-1" />

              <div className="text-center mt-5">
                <h2 className="text-4xl md:text-2xl lg:text-4xl font-bold text-gray-900">
                  Recent <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
                Blogs
              </span>
                </h2>
              </div>

              <div className="flex-1 flex justify-end">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 bg-transparent"
                    onClick={scrollLeft}
                  >
                    <ChevronLeft className="h-4 w-4 text-purple-600" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 bg-transparent"
                    onClick={scrollRight}
                  >
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Navigate the future of hiring with expert insights and proven strategies.
            </p>
          </div>

          {/* Scrollable Recent Posts */}
          <div className="relative">
            <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth space-x-6 pb-4 scrollbar-hide">
              {recent.map((post, idx) => (
                <div key={idx} className="flex-shrink-0 w-[420px] py-3">
                  <RecentPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Section Below Newsletter */}
      <section className="mt-16 max-w-[1330px] mx-auto px-4">
        <div className="bg-black text-white p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Next Section Title</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This is the content that appears below the newsletter signup. You can replace it with any component, grid,
            blog posts, or CTA.
          </p>
        </div>
      </section>
    </main>
  )
}
