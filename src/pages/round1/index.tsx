/* eslint-disable @typescript-eslint/no-explicit-any */
import { Round1 } from "@/components/Game/Round1";
import { getRouteApi } from "@tanstack/react-router";
import { RoundState } from "@/states/round.state";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Round1Info from "@/components/Game/Round1/info";

const routeApi = getRouteApi("/round1");

const Round1Page = () => {
  const queries: any = routeApi.useSearch();
  const setRound = useSetRecoilState(RoundState);

  useEffect(() => {
    setRound({
      round: 1,
      name: "Chắt chill hy vọng",
    });
  }, [setRound]);

  if (queries?.game) {
    return <Round1 />;
  }

  return <Round1Info />;
};

export default Round1Page;
