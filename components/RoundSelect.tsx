import React, { FormEvent, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRoundStore from "@/store/round";

export default function RoundSelect() {
  const { round, setSelectedRound } = useRoundStore();

  const selectRound = (val: number) => {
    setSelectedRound(val);
  };
  return (
    <div className="flex items-center">
      <span className="text-sub2 font-semibold mr-5 text-[20px]">회차</span>
      <Select onValueChange={(value) => selectRound(Number(value))}>
        <SelectTrigger className="w-[180px] border-main text-main font-semibold text-[20px]">
          <SelectValue placeholder={round} />
        </SelectTrigger>
        <SelectContent className="border-main text-main font-semibold text-center">
          {Array.from({ length: round }, (_, i) => (
            <SelectItem
              key={round - i}
              value={`${round - i}`}
              className="text-[20px] cursor-pointer"
            >
              {round - i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
