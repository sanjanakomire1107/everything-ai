// components/NewsletterSignup.tsx
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section className="mt-20 max-w-[1330px] mx-auto px-4">
      <div className="rounded-2xl bg-gradient-to-br from-[#f0f0f0] to-[#e6e6e6] p-10 shadow-md relative overflow-hidden">
        {/* Floating ellipses (optional background blobs) */}
        <div className="absolute w-32 h-32 bg-purple-300 opacity-20 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute w-32 h-32 bg-pink-300 opacity-20 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl font-bold text-black text-center lg:text-left">
            Receive the latest Newsletter <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-transparent bg-clip-text">updates.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 w-full max-w-xl">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg w-full shadow-inner">
              <Mail className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none w-full bg-transparent text-sm placeholder-gray-400"
              />
            </div>
            <button className="bg-black text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
