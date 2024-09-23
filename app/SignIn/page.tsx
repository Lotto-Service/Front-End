'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCommonRouter from '@/hook/useCommonRouter';
import { SignInForm } from '@/utils/type';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SignInForm>();

  const router = useCommonRouter();

  const toSignUp = () => {
    router.toSignUp();
  };

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    console.log('data ', data);
    const result = await signIn('credentials', {
      username: data.username,
      password: data.password,
    });

    if (result) {
      console.log(result);
    } else {
      console.log('error ');
    }
  };

  const toMain = () => {
    router.toMain();
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
              {...register('username', { required: true })}
            />
            <Input
              type="password"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="비밀번호"
              {...register('password', { required: true })}
            />
            <div className="mt-5 flex justify-between">
              <Button
                size={'lg'}
                className="bg-sub text-white font-semibold text-base"
                onClick={toSignUp}
                type="button"
              >
                회원가입
              </Button>
              <Button
                size={'lg'}
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
