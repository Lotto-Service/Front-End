import RoundSelect from '@/components/RoundSelect';
import React from 'react';

export default function Numbers() {
  return (
    <div className="mt-[120px]">
      <div className="w-full flex justify-end pr-5">
        <RoundSelect />
      </div>
      <div className="mt-[100px] w-[90%] m-auto">
        <div className="flex items-center">
          <div className="w-[15%] text-xl text-sub2 font-semibold text-center">상태</div>
          <div className="w-[85%] text-xl text-sub2 font-semibold text-center">번호</div>
        </div>
        <hr className="my-2 border border-sub2" />
        <div>
          {Array.from({ length: 10 }, (_, i) => (
            <div className="flex items-center mt-3">
              <div className="w-[15%] text-xl text-main font-semibold text-center">자동</div>
              <div className="w-[85%] text-xl text-sub2 font-semibold text-center flex justify-around">
                {Array.from({ length: 6 }, (_, j) => (
                  <span>2</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
