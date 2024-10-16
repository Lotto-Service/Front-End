import { RoundStore } from "@/utils/type";
import { create } from "zustand";

const useRoundStore = create<RoundStore>((set) => ({
  round: 0,
  setRound: (newRound: number) => set(() => ({ round: newRound })),
  selectedRound: 0,
  setSelectedRound: (newRound: number) =>
    set(() => ({ selectedRound: newRound })),
}));

export default useRoundStore;
