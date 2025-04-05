import * as React from "react";
import { Outlet, createRootRoute, useRouter } from "@tanstack/react-router";
import { Players } from "@/components/Players";
import RoundInfo from "@/components/Game/RoundInfo";
import { z } from "zod";

export const Route = createRootRoute({
  component: RootComponent,
  validateSearch: z.object({
    game: z.boolean()?.optional(),
  }),
});
function RootComponent() {
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="container mx-auto h-screen">
        <RoundInfo />
        <Players currentRound={router?.latestLocation?.pathname}>
          <Outlet />
        </Players>
      </div>
    </React.Fragment>
  );
}
