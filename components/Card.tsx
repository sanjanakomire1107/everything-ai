import Image from "next/image"
import { CalendarDays, Clock, Users } from "lucide-react"



import { BlogCardProps } from "@/lib/card"

export default function Card({ cards }: { cards : BlogCardProps}) {
  return (
    <div className="max-w-sm rounded-2xl border-2 p-2 border-purple-300 bg-gradient-to-b from-pink-50 via-white to-yellow-50 shadow-md">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={cards.image}
          alt={cards.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="px-3 py-4">
        <p className="text-sm font-semibold text-purple-600 mb-1">{cards.category}</p>

        <h3 className="text-lg font-bold leading-snug mb-3 line-clamp-2">
          {cards.title}
        </h3>

        <div className="flex items-center text-sm text-gray-500 gap-2 mb-1">
          <Users size={16} className="text-purple-500" />
          <span className="font-medium text-[13px]">{cards.author}</span>
          <Clock size={14} className="ml-auto" />
          <span>{cards.readTime}</span>
        </div>

        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <CalendarDays size={12} />
          {cards.date}
        </p>
      </div>
    </div>
  )
}
