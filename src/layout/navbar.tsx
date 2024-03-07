"use client"
import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/" },
    { title: "Courses", path: "/Course" },
    { title: "Instructors", path: "/Instructor" },
    { title: "About Us", path: "/About" },
    { title: "Contact Us", path: "/contact" },
  ]

  return (
    <nav className="bg-[#1E1E1E] w-full border-b md:border-0 fixed top-0 z-10">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={60}
                height={60}
                alt="Picture of the author"
              />
            </Link>
            <h1 className="text-xl font-bold text-lime-600 ml-2">Ecommerce Academy</h1>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-white hover:text-lime-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          <div className="flex justify-end items-center">
            <Link href={'/Login'}>
              <span className="text-white hover:text-lime-600">Login</span>
            </Link>
            <div className="ml-4">
            <Link href={'/Register'}>
              <Button size={"lg"} className="bg-lime-700 hover:bg-lime-400">Register</Button>
              </Link>

            </div>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  )
}
