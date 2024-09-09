'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();

  const onSubmit = () => {
    router.push('/SignUp');
  };

  const toHome = () => {
    router.push('/');
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold text-mainColor">회원가입</div>
        <hr className="border border-mainColor mt-5" />
        <div className="w-80 m-auto mt-10">
          <input
            type="text"
            className="border border-mainColor w-full p-1 pl-2 rounded"
            placeholder="아이디"
          />
          <input
            type="text"
            className="mt-5 border border-mainColor w-full p-1 pl-2 rounded"
            placeholder="비밀번호"
          />
          <input
            type="text"
            className="mt-5 border border-mainColor w-full p-1 pl-2 rounded"
            placeholder="비밀번호 확인"
          />
          <input
            type="text"
            className="mt-5 border border-mainColor w-full p-1 pl-2 rounded"
            placeholder="이메일"
          />
          <input
            type="text"
            className="mt-5 border border-mainColor w-full p-1 pl-2 rounded"
            placeholder="생년월일 8자리"
          />
          <div className="mt-5 flex justify-between">
            <Button
              size={'lg'}
              className="bg-subColor text-white font-semibold text-base"
              onClick={onSubmit}
            >
              회원가입
            </Button>
            <Button
              size={'lg'}
              className="bg-mainColor text-white font-semibold text-base"
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
