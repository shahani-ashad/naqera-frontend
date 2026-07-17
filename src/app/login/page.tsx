"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Naqera
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {/* Tab switcher */}
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition ${
                mode === "login"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 text-sm font-medium py-2 rounded-lg transition ${
                mode === "register"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-500"
              }`}
            >
              Register
            </button>
          </div>

          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {mode === "login"
              ? "Sign in to manage your bookings"
              : "Every new account starts as a Customer"}
          </p>

          <form className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Shahani Ashad"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone
              </label>
              <input
                type="text"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-medium py-2.5 rounded-xl hover:bg-emerald-700 mt-2"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to Naqera&apos;s Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}