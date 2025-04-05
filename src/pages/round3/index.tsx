/* eslint-disable @typescript-eslint/no-explicit-any */

import Round3 from "@/components/Game/Round3";
import Round3Info from "@/components/Game/Round3/info";
import { SelectablePlayerState } from "@/states/player.state";
import { RoundState } from "@/states/round.state";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const routeApi = getRouteApi("/round3");

const Round3Page = () => {
  const queries: any = routeApi.useSearch();
  const setRound = useSetRecoilState(RoundState);
  const setSelectablePlayer = useSetRecoilState(SelectablePlayerState);

  useEffect(() => {
    setRound({
      round: 3,
      name: "Sắp tới rồi! Sắp tới rồi!",
    });
  }, [setRound]);

  useEffect(() => {
    setSelectablePlayer(true);
    return () => {
      setSelectablePlayer(false);
    };
  }, [setSelectablePlayer]);

  if (queries?.game) {
    return <Round3 />;
  }

  return <Round3Info />;
};

export default Round3Page;
