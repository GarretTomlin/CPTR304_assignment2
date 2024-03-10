import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E]">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
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
          <div className="flex mt-4 space-x-6 lg:mt-4">
            <Link href={""}>
              <Facebook className="text-white" />
            </Link>
            <Link href={""}>
              <Twitter className="text-white" />
            </Link>
            <Link href={""}>
              <Instagram className="text-white" />
            </Link>
            <Link href={""}>
              <Linkedin className="text-white" />
            </Link>
          </div>
          <p className="mt-2 text-xs text-justify text-gray-400">
            Copyright © 2022,
            Ecommerce Academy
          </p>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-lime-500">
            Courses
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                Email Marketing                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Loyalty & Rewards
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Reviews
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Popups & CRO
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-lime-500">
            Instructors
                        </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                Garett Tomlin
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Joshua Daniel
               </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
           Kevaughn Benjamin 
            </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Michael Small
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-lime-500">
            Company
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                About Us
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Contact Us
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                Pressroom                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}