import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserRegisterForm } from "@/components/user-register-form"


export default function Register() {
  return (
    <>
      <div className="md:hidden">
   
         <Image
                src="/logo.svg"
                width={60}
                height={60}
                alt="Picture of the author"
              />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/Login"
          className={cn(
            buttonVariants({ className: "bg-lime-700" }),
            "absolute right-4 top-4 md:right-8 md:top-8 hover:bg-lime-400"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-lime-700" />
         
          <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
                src="/logo2.svg"
                width={60}
                height={60}
                alt="Picture of the author"
              />
                          <h1 className="text-xl font-bold text-white ml-2">Ecommerce Academy</h1>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Create an account
              </h1>
              <p className="text-sm text-white">
                Enter your email below to create your account
              </p>
            </div>
            <UserRegisterForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}