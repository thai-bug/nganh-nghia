/* eslint-disable @typescript-eslint/no-explicit-any */
import { Round2 } from "@/components/Game/Round2";
import Round2Info from "@/components/Game/Round2/info";
import { RoundState } from "@/states/round.state";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const routeApi = getRouteApi("/round2");

const Round2Page = () => {
  const queries: any = routeApi.useSearch();
  const setRound = useSetRecoilState(RoundState);

  useEffect(() => {
    setRound({
      round: 2,
      name: "Ô chữ hy vọng",
    });
  }, [setRound]);

  if (queries?.game) {
    return <Round2 />;
  }

  return <Round2Info />;
};

export default Round2Page;
