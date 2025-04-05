import { atom } from "recoil";

export const RoundState = atom<{
  round: number;
  name: string;
}>({
  key: "round-state",
  default: {
    round: 0,
    name: "",
  },
});
