import { useRecoilState } from "recoil";
import initPlayersData from "@/data/players.json";
import { PlayersState } from "@/states/player.state";
import { useEffect } from "react";

export const Players = () => {
  const [players, setPlayers] = useRecoilState(PlayersState);

  useEffect(() => {
    setPlayers(initPlayersData);
  }, [setPlayers]);

  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-lg">
      {players.map((player, index) => (
        <div key={index} className="text-center grid gap-2">
          <div className="font-bold text-2xl text-blue-600">{player.name}</div>
          <div className="font-bold text-green-600">{player.slogan}</div>
          <div className="rounded-xl border-[1px]">
            <div className="text-2xl">{player?.points}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
