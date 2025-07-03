import type { BlogPost } from "@/lib/posts"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="rounded-2xl overflow-hidden min-h-[500px] flex flex-col lg:flex-row lg:justify-between lg:items-center border-2 border-purple-400 bg-gradient-to-br from-pink-100 to-blue-100 mr-6">
      {/* Text Content */}
      <div className="p-4 lg:p-6 flex flex-col items-start gap-3 lg:gap-1.5 order-1 lg:order-1 lg:flex-1">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1 leading-tight">{post.title}</h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-gray-600 mb-3 lg:mb-2 leading-relaxed">
          {post.description}
        </p>
        <Button className="bg-black border-2 border-white text-white px-4 sm:px-6 py-3 lg:py-[20px] rounded-md font-medium hover:border-red-400 cursor-pointer text-sm sm:text-base flex items-center gap-2">
          Start for Free Today <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-full overflow-hidden flex justify-center items-center p-4 lg:pr-4 lg:py-2 order-2 lg:order-2 lg:flex-1">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={800}
          className="w-full h-[250px] sm:h-[300px] lg:h-[480px] object-cover rounded-lg lg:rounded-none"
        />
      </div>
    </div>
  )
}
