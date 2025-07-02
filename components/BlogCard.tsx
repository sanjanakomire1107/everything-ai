import { BlogPost } from "@/lib/posts"

import Image from "next/image"
import { Button } from "./ui/button";
import {  ArrowRight } from "lucide-react";

export default function BlogCard({ post }: { post: BlogPost }) {
  

  return (

      <div className="rounded-2xl overflow-hidden h-[500px] flex justify-between items-center border-2 border-purple-400 bg-gradient-to-br from-pink-100 to-blue-100 mr-6 ">
         <div className="p-4 flex flex-col items-start gap-1.5 sm:flex-col">
          <h2 className="text-4xl font-semibold mb-1">
            {post.title}
          </h2>
          <p className="text-xl text-muted-foreground text-gray-600 mb-2">
            {post.description}
          </p>

          <Button className=" bg-black border-2 border-white text-white px-6 py-[20px] rounded-md font-md hover:border-red-400 cursor-pointer ">Start for Free Today <ArrowRight/> </Button>
        </div>
        <div className=" w-full overflow-auto flex justify-center items-center pr-4 py-2 ">
          <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={800}
          className=" py-6 h-[580px] object-cover"
/>
       
      </div>
        </div>

  )
}