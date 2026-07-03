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

const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();

  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterValues) {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,

      options: {
        data: {
          full_name: data.fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);

      return;
    }

    toast.success("Account created successfully.");

    router.push("/login");
  }

  return (
    <AuthCard
      title="Create your account"
      description="Start managing shared expenses with PaTo."
      image="/images/regis-mascot.png"
      imageAlt="Register Mascot"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#4477BB] hover:underline"
          >
            Sign In
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="fullName">Full Name</Label>

          <Input
            id="fullName"
            className="mt-2 h-11 rounded-xl"
            placeholder="John Doe"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

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
          <Label htmlFor="password">Password</Label>

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
              onClick={() => setShowPassword(!showPassword)}
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
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
}
