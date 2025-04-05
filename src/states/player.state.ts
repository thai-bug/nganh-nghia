/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export const PlayersState = atom<
  {
    id: number;
    name: string;
    slogan: string;
    points: number;
    image: string;
  }[]
>({
  key: "players-state",
  default: [],
});

export const SelectedPlayerState = atom<any>({
  key: "selected-player-state",
  default: 0,
});
