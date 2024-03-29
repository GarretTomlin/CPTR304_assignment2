"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Icons } from "./icons"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import axios from "axios"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
const [isLoading, setIsLoading] = React.useState<boolean>(false);
const router = useRouter()
const onSubmit = async (data: any) => {
    console.log("Form data:", data);
    setIsLoading(true);

    try {
        const response = await axios.post("http://localhost:8000/index.php", {
            action: "login",
            ...data,
          
        }, {withCredentials: true});
        if (response.status == 200){
            router.push('/Dashboard')
        }

        setIsLoading(false);
    } catch (error) {
        console.error("API Error:", error);

        setIsLoading(false);
    }
};

  return (
    <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only">
              Username
            </Label>
            <Input
              id="username"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("username", { required: true })}
            />
                 <Label className="sr-only" htmlFor="email">
              password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <Button disabled={isLoading} className="bg-lime-700  hover:bg-lime-400" type="submit">
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  )
}