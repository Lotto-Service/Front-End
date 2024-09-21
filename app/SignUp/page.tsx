'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCommonRouter from '@/hook/useCommonRouter';
import { SignUpForm } from '@/utils/type';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SignUpForm>();

  const pw = watch('pw');
  const checkPw = watch('checkPw');

  useEffect(() => {
    if (pw && checkPw && pw !== checkPw) {
      setError('checkPw', { message: '비밀번호가 불일치합니다.' });
    } else {
      clearErrors('checkPw');
    }
  }, [pw, checkPw]);

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    const birthRegex = /^(19[0-9][0-9]|20[0-9][0-9])(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const idRegex = /^[a-z]+[a-z0-9]{5,19}$/;
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!birthRegex.test(data.birth)) {
      setError('birth', { message: '생년월일을 제대로 입력해주세요.(ex) 20001010' });
    } else {
      clearErrors('birth');
    }

    if (!idRegex.test(data.id)) {
      setError('id', {
        message: '아이디를 제대로 입력해주세요.(영어 소문자로 시작, 특수문자 제외)',
      });
    } else {
      clearErrors('id');
    }

    if (!emailRegex.test(data.email)) {
      setError('email', { message: '이메일을 제대로 입력해주세요.(ex) id@naver.com' });
    } else {
      clearErrors('email');
    }
  };

  const router = useCommonRouter();

  const toHome = () => {
    router.toLogin();
  };
  return (
    <div className="min-h-[900px] bg-background">
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold text-main">회원가입</div>
        <hr className="border border-main mt-5" />
        <div className="w-80 m-auto mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              className="border border-main w-full p-1 pl-2 rounded"
              placeholder="아이디"
              {...register('id', { required: true })}
            />
            {errors.id && <span className="error-text">{errors.id.message}</span>}

            <Input
              type="password"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="비밀번호"
              {...register('pw', { required: true })}
            />
            <Input
              type="password"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="비밀번호 확인"
              {...register('checkPw')}
            />
            {errors.checkPw && <span className="error-text">{errors.checkPw.message}</span>}
            <Input
              type="text"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="이메일"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
            <Input
              type="text"
              className="mt-5 border border-main w-full p-1 pl-2 rounded"
              placeholder="생년월일 8자리"
              {...register('birth', { required: true })}
            />
            {errors.birth && <span className="error-text">{errors.birth.message}</span>}
            <div className="mt-5 flex justify-between">
              <Button
                size={'lg'}
                className="bg-sub text-white font-semibold text-base"
                type="submit"
              >
                회원가입
              </Button>
              <Button
                size={'lg'}
                className="bg-main text-white font-semibold text-base"
                onClick={toHome}
                type="button"
              >
                취소
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
