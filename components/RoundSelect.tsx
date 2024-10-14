import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RoundSelect() {
  return (
    <div className="flex items-center">
      <span className="text-sub2 font-semibold mr-5 text-[20px]">회차</span>
      <Select>
        <SelectTrigger className="w-[180px] border-main text-main font-semibold text-[20px]">
          <SelectValue placeholder="1" />
        </SelectTrigger>
        <SelectContent className="border-main text-main font-semibold text-center">
          {Array.from({ length: 5 }, (_, i) => (
            <SelectItem key={i} value={`${i}`} className="text-[20px]">
              {i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
