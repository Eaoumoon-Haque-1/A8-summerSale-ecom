"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Input } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      setErrorMessage(error.message || "Login failed. Please try again.");
      setLoading(false);
      return;
    }

    if (data) {
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-4 py-10">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <Card className="w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-7 shadow-xl shadow-orange-100">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-950">Login</h1>
              <p className="mt-1 text-sm text-slate-500">
                Welcome back to SunCart.
              </p>
            </div>

            <Link
              href="/register"
              className="rounded-full border border-orange-200 px-5 py-2 text-sm font-bold text-orange-600 hover:bg-orange-50"
            >
              Register
            </Link>
          </div>

          {errorMessage && (
            <p className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {errorMessage}
            </p>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              required
            />

            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 h-12 rounded-full bg-orange-500 text-base font-bold text-white hover:bg-orange-600"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-bold uppercase text-slate-400">
              or
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="h-12 w-full rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Continue with Google
          </button>
        </Card>
      </section>
    </main>
  );
}