"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCommonRouter from "@/hooks/useCommonRouter";
import { toast } from "@/hooks/useToast";
import { SignInType } from "@/utils/type";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SignInType>();

  const router = useCommonRouter();

  const toSignUp = () => {
    router.toSignUp();
  };
// 
  const onSubmit: SubmitHandler<SignInType> = async (data) => {
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      toast({
        title: res.error,
        variant: "destructive",
      });
      return;
    }
    if (res?.status === 200) {
      toast({
        title: "Success!",
        variant: "success",
      });
      router.toMain();
    }
  };
  return (
    <div>
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold text-main">로그인</div>
        <hr className="border border-main mt-5" />
        <div className="w-80 m-auto mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              className="border border-main w-full p-1 pl-2 rounded"
              placeholder="아이디"
              {...register("username", { required: true })}
            />
            <Input
              type="password"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="비밀번호"
              {...register("password", { required: true })}
            />
            <div className="mt-5 flex justify-between">
              <Button
                size={"lg"}
                className="bg-sub text-white font-semibold text-base"
                onClick={toSignUp}
                type="button"
              >
                회원가입
              </Button>
              <Button
                size={"lg"}
                className="bg-main text-white font-semibold text-base"
                type="submit"
                // onClick={toMain}
              >
                로그인
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
