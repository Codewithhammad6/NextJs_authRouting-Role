"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GuestGuard({ isAuth, children }) {
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      // if logged in, redirect away from login/signup
      router.push("/profile"); // or dashboard based on role
    }
  }, [isAuth, router]);

  if (isAuth) {
    return null; // hide content while redirecting
  }

  return <>{children}</>;
}
