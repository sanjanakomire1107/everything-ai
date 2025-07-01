"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed bg-transparent ">
      <div className="w-full ml-15 mx-auto flex justify-between items-start  mt-0.5 ">
        {/* Nav Box */}
        <div className="hidden md:flex items-center px-4 py-1.5 rounded-lg bg-gray-100  border-2 border-gray-300 shadow-sm">
          {/* Logo with Divider */}
          <div className="pr-4 border-r-2 border-gray-400">
            <Link href="/">
              <Image
                src="/images/logo.jpg" // Ensure this path is correct
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex px-6 gap-7 pl-4 text-sm font-medium text-gray-800">
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog" className="font-bold text-purple-600">Blog</Link>
            <Link href="/support">Support</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center justify-between gap-3 mr-25">
          <Button className=" py-[20px] border-2 border-gray-300 shadow-md rounded-lg">
            Request a Demo
            <span className="ml-1">➤</span>
          </Button >
          <Button variant="outline" className="border-2 border-gray-300 shadow-md py-[20px] rounded-lg">
            <Sun className="w-2 h-2" />
          </Button>
          <Button className=" border-2 border-gray-300 shadow-md py-[20px] rounded-lg">
            Login
            <span className="ml-1">➤</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown
      {open && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-2">
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog" className="font-bold text-purple-600">Blog</Link>
            <Link href="/support">Support</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline">Request a Demo</Button>
            <Button>Login</Button>
          </div>
        </div>
      )} */}
    </header>
  );
}