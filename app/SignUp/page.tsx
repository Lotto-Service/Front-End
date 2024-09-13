"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();

  const onSubmit = () => {
    router.push("/SignUp");
  };

  const toHome = () => {
    router.push("/");
  };
  return (
    <div className="min-h-[900px] bg-background">
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold text-main">회원가입</div>
        <hr className="border border-main mt-5" />
        <div className="w-80 m-auto mt-10">
          <Input
            type="text"
            className="border border-main w-full p-1 pl-2 rounded"
            placeholder="아이디"
          />
          <Input
            type="text"
            className="mt-5 border border-main w-full p-1 pl-2 rounded"
            placeholder="비밀번호"
          />
          <Input
            type="text"
            className="mt-5 border border-main w-full p-1 pl-2 rounded"
            placeholder="비밀번호 확인"
          />
          <Input
            type="text"
            className="mt-5 border border-main w-full p-1 pl-2 rounded"
            placeholder="이메일"
          />
          <Input
            type="text"
            className="mt-5 border border-main w-full p-1 pl-2 rounded"
            placeholder="생년월일 8자리"
          />
          <div className="mt-5 flex justify-between">
            <Button
              size={"lg"}
              className="bg-sub text-white font-semibold text-base"
              onClick={onSubmit}
            >
              회원가입
            </Button>
            <Button
              size={"lg"}
              className="bg-main text-white font-semibold text-base"
              onClick={toHome}
            >
              취소
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
