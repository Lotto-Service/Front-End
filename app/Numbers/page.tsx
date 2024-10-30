"use client";
import RoundSelect from "@/app/components/roundSelect";
import React from "react";

export default function Numbers() {
  return (
    <div className="my-[120px]">
      <div className="w-full flex justify-end pr-5">
        <RoundSelect />
      </div>
      <div className="mt-[100px] w-[80%] m-auto">
        <div className="flex items-center p-1">
          <div className="w-[10%] text-2xl text-sub2 font-semibold text-center">
            No.
          </div>
          <div className="w-[20%] text-2xl text-sub2 font-semibold text-center">
            상태
          </div>
          <div className="w-[70%] text-2xl text-sub2 font-semibold text-center">
            번호
          </div>
        </div>
        {/*  */}
        <hr className="my-2 border border-sub2" />
        <div>
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="flex items-center mt-5 border border-sub2 p-1 rounded-[5px]"
            >
              <div className="w-[10%] text-2xl text-sub2 font-semibold text-center border-r-2 border-sub2">
                {i + 1}
              </div>
              <div className="w-[20%] text-2xl text-main font-semibold text-center border-r-2 border-sub2">
                자동
              </div>
              <div className="w-[70%] text-2xl font-semibold text-center flex justify-around">
                {Array.from({ length: 6 }, (_, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-main-20 w-[40px] h-[40px] flex items-center justify-center"
                  >
                    2
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[50px] text-center text-main font-semibold text-2xl">
          {"<<    <   1  2  3  ...    >   >>"}
        </div>
      </div>
    </div>
  );
}
