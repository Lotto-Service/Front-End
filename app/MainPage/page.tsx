"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IMAGES from "@/utils/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface lottoType {
  id: string;
  title?: string;
  nums?: number[];
}

export default function SignIn() {
  const [lottoNums, setLottoNums] = useState(
    Array.from({ length: 45 }, (_, i) => false)
  );
  const [lottoMixtures, setLottoMixtures] = useState<lottoType[]>([
    { id: "A" },
    { id: "B" },
    { id: "C" },
    { id: "D" },
    { id: "E" },
  ]);
  const [autoState, setAutoState] = useState(false);
  const [autoCount, setAutoCount] = useState(0);

  const router = useRouter();

  const logout = () => {
    router.push("/");
  };

  const checkNum = (index: number) => {
    const count = lottoNums.filter((v) => v).length;
    if (count >= 6) return;
    setLottoNums((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const resetLotto = () => {
    setLottoNums((prevState) => prevState.map((state) => (state = false)));
  };

  const setAutoLottoState = () => {
    setAutoState(() => !autoState);
  };

  const selectLottoCount = (num: string) => {
    console.log(num);
  };

  const findSameNum = (arr: number[], n: number) => {
    return Math.floor(Math.random() * 45 + 1);
  };
  const addLottoNums = () => {
    if (autoState) {
      const randomNums = [];

      const num = Math.floor(Math.random() * 45 + 1);
      randomNums.push(num);
      findSameNum(randomNums, num);
      console.log(randomNums);
    }
  };
  return (
    <div className="min-h-[900px] bg-background relative">
      <div className="border-b border-gray-400 w-full h-[100px] flex justify-center items-center fixed bg-white top-0">
        <span className="font-bold text-4xl text-mainColor">제 1127회차</span>
        <div className="flex fixed right-5">
          <Image
            className="mr-2"
            src={IMAGES.USER}
            alt=""
            width={45}
            height={45}
          />
          <Button
            className="mr-2 bg-mainColor font-bold px-5 hover:bg-mainColor40"
            onClick={logout}
          >
            로그아웃
          </Button>
        </div>
      </div>
      <div className="w-full text-center mt-[120px]">
        <div>
          <span className="font-semibold text-4xl text-grayColor">
            로또 번호 추출
          </span>
        </div>
        <div className="w-[80%] m-auto mt-10">
          <div className="flex justify-start">
            <Button
              className="bg-subColor text-xl font-semibold px-8 hover:bg-subColor80"
              onClick={resetLotto}
            >
              초기화
            </Button>
          </div>
          <div
            className="mt-5 
              w-[100%] 
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
              <div className="sm:w-[20%] md:w-[11%] h-16 text-center" key={i}>
                <p className="font-semibold">{i + 1}</p>
                <Button
                  className={`w-1 
                    h-8 
                    rounded-full 
                    ${v ? "bg-mainColor" : "bg-white"}
                    border-mainColor 
                    border 
                    hover:bg-mainColor`}
                  onClick={() => checkNum(i)}
                ></Button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80%] m-auto mt-5 flex justify-between">
          <div className="flex">
            <Select onValueChange={(val) => selectLottoCount(val)}>
              <SelectTrigger className="w-[180px] border-mainColor text-mainColor font-semibold text-[20px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent className="border-mainColor text-mainColor font-semibold text-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <SelectItem
                    key={i}
                    value={`${i + 1}`}
                    className="text-[20px]"
                  >
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className={`w-[180px] ml-2 border-mainColor border ${
                autoState
                  ? "bg-mainColor text-white"
                  : "bg-white text-mainColor"
              } hover:bg-mainColor60 font-semibold text-[20px]`}
              onClick={setAutoLottoState}
            >
              자동
            </Button>
          </div>
          <div>
            <Button
              className="w-[180px] bg-mainColor hover:bg-mainColor60 text-white font-semibold text-[20px]"
              onClick={addLottoNums}
            >
              확인
            </Button>
          </div>
        </div>
        <div className="h-48 mt-20">
          <div className="w-[80%] m-auto">
            <hr className="border-grayColor border" />
            <div className="my-10">
              {lottoMixtures.map((mixture, i) => (
                <div className="my-10" key={i}>
                  <div className="flex justify-between w-[100%] items-center">
                    <span className="w-[20%] text-[30px] text-mainColor text-left">
                      {mixture.id} 자동
                    </span>
                    <div className="flex w-[70%] justify-around text-[30px]">
                      {mixture.nums?.map((num, j) => (
                        <span
                          className="w-[50px] h-[50px] bg-mainColor20 flex justify-center items-center rounded-full"
                          key={j}
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="delete"
                      className="border-delColor border bg-white text-delColor font-semibold"
                    >
                      제거
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-grayColor border" />
          </div>
        </div>
      </div>
    </div>
  );
}
