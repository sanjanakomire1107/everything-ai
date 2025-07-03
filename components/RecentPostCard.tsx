// components/RecentPostCard.tsx
import Image from "next/image";
import { CalendarDays, Clock, Users } from "lucide-react";
import { RecentPostCardProps } from "@/lib/recent";

export default function RecentPostCard({ post }: { post: RecentPostCardProps }) {
  return (
    <div className="max-w-sm p-[2px] rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-300 shadow-md transition-transform duration-300 hover:scale-[1.02]">
         <div className="rounded-[14px] bg-white overflow-hidden">
           <div className="p-1">
             <Image
               src={post.image}
               alt={post.title}
               width={400}
               height={240}
               className="w-full h-48 object-cover rounded-lg shadow-sm"
             />
           </div>
           <div className="px-4 py-4">
             <p className="text-sm font-medium text-[#BA2FFB] mb-1">{post.category}</p>
             <h3 className="text-2xl font-bold leading-snug mb-3 line-clamp-2">
               {post.title}
             </h3>
             <div className="flex items-center text-sm text-gray-500 gap-2 mb-1">
               <Users size={16} className="text-purple-500" />
               <span className="font-medium text-[13px]">{post.author}</span>
               <Clock size={14} className="ml-auto" />
               <span>{post.readTime}</span>
             </div>
             <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
               <CalendarDays size={12} />
               {post.date}
             </p>
           </div>
         </div>
       </div>
  );
}
