"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { createClient } from "@/lib/supabase/client";

import { AuthCard } from "./AuthCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();

  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginValues) {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);

      return;
    }

    toast.success("Welcome back!");

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <AuthCard
      reverse
      title="Welcome Back"
      description="Sign in to continue managing your shared expenses."
      image="/images/login-mascot.png"
      imageAlt="Login Mascot"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#4477BB] hover:underline"
          >
            Create Account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            className="mt-2 h-11 rounded-xl"
            placeholder="john@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>

            <Link
              href="/forgot-password"
              className="text-sm text-[#4477BB] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative mt-2">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="h-11 rounded-xl pr-12"
              placeholder="••••••••"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-xl bg-[#4477BB] hover:bg-[#3968A7]"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </form>
    </AuthCard>
  );
}
