'use client';
import RoundSelect from '@/components/RoundSelect';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface lottoType {
  title?: string;
  nums?: number[];
}

export default function SignIn() {
  const [lottoNums, setLottoNums] = useState(Array.from({ length: 45 }, (_, i) => false));
  const [lottoMixtures, setLottoMixtures] = useState<lottoType[]>([]);
  const [autoState, setAutoState] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const session = await getSession();
    console.log('session ', session);
  };

  const checkNum = (index: number) => {
    const count = lottoNums.filter((v) => v).length;
    setLottoNums((prevState) =>
      prevState.map((state, i) => {
        if (count >= 6) {
          if (i === index && state) {
            return !state;
          }
          return state;
        } else {
          return i === index ? !state : state;
        }
      }),
    );
  };

  const findSameNum = (arr: number[], n: number) => {
    return arr.find((v) => v === n);
  };
  const addLottoNums = () => {
    if (lottoMixtures.length > 5) return;
    if (lottoNums.filter((v) => v).length === 6 && autoState) {
      alert('자동과 수동이 동시에 선택됐습니다.');
      return;
    }

    for (let i = 0; i < count; i++) {
      const tempNums: number[] = [];
      lottoNums.forEach((v, i) => {
        v ? tempNums.push(i + 1) : null;
      });
      let title = '';
      if (autoState) {
        if (tempNums.length === 0) {
          title = '자동';
        } else {
          title = '반자동';
        }
        while (tempNums.length < 6) {
          const num = Math.floor(Math.random() * 45 + 1);

          if (findSameNum(tempNums, num)) {
            continue;
          }
          tempNums.push(num);
        }
      } else {
        title = '수동';
      }
      tempNums.sort((a, b) => a - b);
      setLottoMixtures((prevState) => [...prevState, { nums: tempNums, title }]);
    }
  };
  const resetLotto = () => {
    setLottoNums((prevState) => prevState.map((state) => (state = false)));
    setAutoState((prevState) => prevState === true && !prevState);
  };

  const removeLotto = (index: number) => {
    let tmp = lottoMixtures;
    tmp.splice(index, 1);
    setLottoMixtures([...tmp]);
  };
  return (
    <div className="min-h-[900px] bg-background relative mt-[120px]">
      <div className="w-full flex justify-end pr-5">
        <RoundSelect />
      </div>
      <div className="w-full text-center mt-[50px]">
        <p className="font-bold text-4xl text-main">제 1127회차</p>
        <p className="font-semibold text-4xl text-sub2 mt-[20px]">로또 번호 추출</p>
        <div className="w-[80%] m-auto mt-10">
          <div className="flex justify-start">
            <Button
              className="bg-sub text-xl font-semibold px-8 hover:bg-sub-80"
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
                    ${v ? 'bg-main-40' : 'bg-white border-main'}
                    border 
                    hover:bg-main`}
                  onClick={() => checkNum(i)}
                ></Button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80%] m-auto mt-5 flex justify-between">
          <div className="flex">
            <Select onValueChange={(val) => setCount(+val)}>
              <SelectTrigger className="w-[180px] border-main text-main font-semibold text-[20px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent className="border-main text-main font-semibold text-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <SelectItem key={i} value={`${i + 1}`} className="text-[20px]">
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className={`w-[180px] ml-2 border-main border ${
                autoState ? 'bg-main text-white' : 'bg-white text-main'
              } hover:bg-main60 font-semibold text-[20px]`}
              onClick={() => setAutoState(() => !autoState)}
            >
              자동
            </Button>
          </div>
          <div>
            <Button
              className="w-[180px] bg-main hover:bg-main-60 text-white font-semibold text-[20px]"
              onClick={addLottoNums}
            >
              확인
            </Button>
          </div>
        </div>
        <div className="mt-20 mb-52">
          <div className="w-[80%] m-auto">
            <hr className="border-sub2 border" />
            <div className="my-10">
              {Array.from({ length: 5 }, (_, index) => index).map((num) => (
                <div className="my-10" key={num}>
                  <div className="flex justify-between w-[100%] items-center">
                    <span className="w-[20%] text-[30px] text-main text-left">
                      {String.fromCharCode(num + 65)} {lottoMixtures[num]?.title}
                    </span>
                    <div className="flex w-[70%] justify-around text-[30px]">
                      {lottoMixtures[num]?.nums?.map((num, j) => (
                        <span
                          className="w-[50px] h-[50px] bg-main-20 flex justify-center items-center rounded-full"
                          key={j}
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="delete"
                      className="border-delete border bg-white text-delete font-semibold"
                      onClick={() => removeLotto(num)}
                      disabled={!lottoMixtures[num]}
                    >
                      제거
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-sub2 border" />
          </div>
          <div className="mt-[50px]">
            <Button className="w-[180px] bg-main hover:bg-main-60 font-semibold text-[20px]">
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
