import { Round1 } from "@/components/Game/Round1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game1")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Round1 />
    </>
  );
}
