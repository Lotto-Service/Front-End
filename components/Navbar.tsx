'use client';
import React, { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import IMAGES from '@/utils/image';
import useCommonRouter from '@/hook/useCommonRouter';

export default function Navbar() {
  const [login, setLogin] = useState(false);
  const router = useCommonRouter();

  const logout = () => {
    router.toLogin();
  };

  const toMain = () => {
    router.toMain();
  };

  const toNumbers = () => {
    router.toNumbers();
  };

  return (
    <div className="border-b border-gray-400 w-full h-[100px] flex justify-center items-center fixed bg-white top-0 z-10">
      {login ? null : (
        <Fragment>
          <div className="flex fixed right-5 items-center">
            <div>
              <Button
                onClick={toMain}
                className="font-semibold text-[18px] mr-5 text-sub2 cursor-pointer bg-transparent hover:bg-transparent hover:text-sub2-60"
              >
                생성
              </Button>
              <Button
                onClick={toNumbers}
                className="font-semibold text-[18px] mr-5 text-sub2 cursor-pointer bg-transparent hover:bg-transparent hover:text-sub2-60"
              >
                내 번호 조회
              </Button>
            </div>
            <Image className="mr-2" src={IMAGES.USER} alt="" width={45} height={45} />
            <Button className="mr-2 bg-main font-bold px-5 hover:bg-main-40" onClick={logout}>
              로그아웃
            </Button>
          </div>
        </Fragment>
      )}
    </div>
  );
}
