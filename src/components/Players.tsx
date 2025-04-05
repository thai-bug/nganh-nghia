/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import initPlayersData from "@/data/players.json";
import {
  PlayersState,
  SelectablePlayerState,
  SelectedPlayerState,
} from "@/states/player.state";
import { useCallback, useEffect } from "react";
import { cloneDeep } from "lodash";
import { useDebounceCallback } from "usehooks-ts";
import { IconRefresh } from "@tabler/icons-react";
import { Divider, InputNumber } from "antd";

export const Players = ({ children }: any) => {
  const selectablePlayer = useRecoilValue(SelectablePlayerState);
  const setSelectedPlayer = useSetRecoilState(SelectedPlayerState);

  const [players, setPlayers] = useRecoilState(PlayersState);

  const handleChangePoint = useCallback(
    (id: number, point: number) => {
      const tempPlayersList = cloneDeep(players);
      const index = tempPlayersList.findIndex((player) => player.id === id);
      if (index !== -1) {
        tempPlayersList[index].points = point;
        setPlayers(tempPlayersList);
      }

      localStorage.setItem("players", JSON.stringify(players));
    },
    [players, setPlayers]
  );

  const debounceChangePointsCallback = useDebounceCallback(
    handleChangePoint,
    0
  );

  useEffect(() => {
    const savePlayers = localStorage.getItem("players");
    if (savePlayers?.length) {
      setPlayers(JSON.parse(savePlayers));

      return;
    }

    setPlayers(initPlayersData);
  }, [setPlayers]);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  return (
    <div className="flex justify-between p-4 gap-4 ">
      <div className="bg-gray-100 rounded-lg w-1/4 py-2">
        {players.map((player, index) => {
          if (index % 2 === 0)
            return (
              <div
                key={index}
                className="text-center grid gap-2 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2 justify-center">
                  <img
                    src={player?.image}
                    className="rounded h-[33vh] object-cover"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (selectablePlayer) {
                        setSelectedPlayer(player);
                      }
                    }}
                  />

                  <div className="flex gap-2">
                    <InputNumber
                      type="number"
                      defaultValue={player.points}
                      placeholder="0"
                      onChange={(value) =>
                        debounceChangePointsCallback(player.id, value || 0)
                      }
                      size="large"
                      value={player.points}
                    />
                    <button
                      className="cursor-pointer text-red-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleChangePoint(player.id, 0);
                      }}
                    >
                      <IconRefresh />
                    </button>
                  </div>
                </div>

                <Divider className="!my-1" />
              </div>
            );
        })}
      </div>

      <div className="w-1/2">{children}</div>

      <div className="bg-gray-100 rounded-lg w-1/4 py-2">
        {players.map((player, index) => {
          if (index % 2 !== 0)
            return (
              <div
                key={index}
                className="text-center grid gap-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (selectablePlayer) {
                    setSelectedPlayer(player);
                  }
                }}
              >
                <div className="flex flex-col items-center gap-2 justify-center">
                  <img
                    src={player?.image}
                    className="rounded h-[33vh] object-cover"
                  />

                  <div className="flex gap-2">
                    <InputNumber
                      type="number"
                      defaultValue={player.points}
                      placeholder="0"
                      onChange={(value) =>
                        debounceChangePointsCallback(player.id, value || 0)
                      }
                      size="large"
                      value={player.points}
                    />
                    <button
                      className="cursor-pointer text-red-400"
                      onClick={() => handleChangePoint(player.id, 0)}
                    >
                      <IconRefresh />
                    </button>
                  </div>
                </div>

                <Divider className="!my-1" />
              </div>
            );
        })}
      </div>
    </div>
  );
};
