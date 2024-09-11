"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const toSignUp = () => {
    router.push("/SignUp");
  };

  const toMain = () => {
    router.push("./MainPage");
  };
  return (
    <div>
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold text-main">로그인</div>
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
          <div className="mt-5 flex justify-between">
            <Button
              size={"lg"}
              className="bg-sub text-white font-semibold text-base"
              onClick={toSignUp}
            >
              회원가입
            </Button>
            <Button
              size={"lg"}
              className="bg-main text-white font-semibold text-base"
              onClick={toMain}
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
