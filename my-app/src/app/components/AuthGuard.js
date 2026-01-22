"use client";
import { useEffect } from "react"
import { useRouter } from "next/navigation";
import { userStore } from "../store/userStore";

export default function AuthGuard({isAuth, children, allowedRoles=[]}) {
      const router = useRouter();
const isRole = userStore.role;

 useEffect(() => {
    if (!isAuth) {
      router.push("/login"); // redirect if not logged in
    } else if (allowedRoles.length > 0 && !allowedRoles.includes(isRole)) {
      router.push("/profile"); // redirect if role is not allowed
    }
  }, [isAuth, isRole, allowedRoles, router]);

  // while redirecting, don’t render children
  if (!isAuth || (allowedRoles.length > 0 && !allowedRoles.includes(isRole))) {
    return null;
  }
  
  return (
    <>{children}</>
  )
}
