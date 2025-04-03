import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Players } from "@/components/Players";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="container mx-auto p-4 h-screen">
        <Players />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
