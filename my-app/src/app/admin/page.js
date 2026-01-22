"use client";

import Link from "next/link";
import { userStore } from "../store/userStore";
export default function Admin() {
  return (
    <>
      <div className="text-center mt-12 text-4xl">Admin page</div>
      <div>
        <h4>{userStore.name}</h4>
        <h4>{userStore.role}</h4>
      </div>
      <div className="bg-amber-600 flex w-fit px-4 rounded-3xl">
      <Link href={"/admin/control"}>Control</Link>
      </div>
    </>
  );
}
