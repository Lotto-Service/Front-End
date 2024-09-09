'use client';
import { Button } from '@/components/ui/button';
import IMAGES from '@/utils/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [lottoNums, setLottoNums] = useState(Array.from({ length: 45 }, (_) => false));
  const router = useRouter();

  const logout = () => {
    router.push('/');
  };

  const checkNum = (index: number) => {
    const count = lottoNums.filter((v) => v).length;
    if (count >= 6) return;
    setLottoNums((prevState) => prevState.map((num, i) => (i === index ? !num : num)));
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-gray-400 w-full min-h-20 flex justify-center items-center relative">
        <span className="font-bold text-4xl text-mainColor">제 1127회차</span>
        <div className="flex fixed right-5">
          <Image className="mr-2" src={IMAGES.USER} alt="" width={45} height={45} />
          <Button className="mr-2 bg-mainColor font-bold px-5" onClick={logout}>
            로그아웃
          </Button>
        </div>
      </div>
      <div className="w-full text-center mt-10">
        <div>
          <span className="font-semibold text-4xl text-grayColor">로또 번호 추출</span>
        </div>
        <div className="w-4/5 m-auto mt-10">
          <div className="flex justify-start">
            <Button className="bg-subColor text-xl font-semibold px-8">초기화</Button>
          </div>
          <div
            className="mt-5 
            w-full 
            min-h-96 
            border 
            border-black 
            rounded-md 
            bg-white 
            flex 
            justify-center 
            items-center 
            flex-wrap"
          >
            {lottoNums.map((v, i) => (
              <div className="w-14 h-16 text-center" key={i}>
                <p className="font-semibold">{i + 1}</p>
                <Button
                  className={`w-1 
                    h-8 
                    rounded-full 
                    ${v ? 'bg-mainColor' : 'bg-white'}
                    border-mainColor 
                    border 
                    hover:bg-mainColor`}
                  onClick={() => checkNum(i)}
                ></Button>
                {/* <input type="checkbox" className="rounded-md" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
