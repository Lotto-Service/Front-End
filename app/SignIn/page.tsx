'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();

  const toSignUp = () => {
    router.push('/SignUp');
  };
  return (
    <div className="min-h-screen border-2 border-black ">
      <div className="border-b border-gray-400 w-full min-h-20"></div>
      <div className="max-w-96 min-h-80 m-auto mt-60 ">
        <div className="text-center text-4xl font-bold">로그인</div>
        <hr className="border border-black mt-5" />
        <div className="w-80 m-auto mt-10">
          <input
            type="text"
            className="border border-gray-400 w-full p-1 pl-2 rounded"
            placeholder="아이디"
          />
          <input
            type="text"
            className="mt-5 border border-gray-400 w-full p-1 pl-2 rounded"
            placeholder="비밀번호"
          />
          <div className="mt-5 flex justify-between">
            <Button
              size={'lg'}
              className="bg-gray-400 text-black font-bold text-base"
              onClick={toSignUp}
            >
              회원가입
            </Button>
            <Button size={'lg'} className="bg-blue-500 text-white font-bold text-base">
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
