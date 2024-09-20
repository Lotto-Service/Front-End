"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IMAGES from "@/utils/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    router.push("/");
  };
  return (
    <div className="border-b border-gray-400 w-full h-[100px] flex justify-center items-center fixed bg-white top-0">
      <span className="font-bold text-4xl text-main">제 1127회차</span>
      <div className="flex fixed right-5">
        <Image
          className="mr-2"
          src={IMAGES.USER}
          alt=""
          width={45}
          height={45}
        />
        <Button
          className="mr-2 bg-main font-bold px-5 hover:bg-main-40"
          onClick={logout}
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
}
