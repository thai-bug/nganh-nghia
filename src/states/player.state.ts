import { atom } from "recoil";

export const PlayersState = atom<any[]>({
  key: "players-state",
  default: [],
});
