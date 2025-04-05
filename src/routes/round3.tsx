import Round3Page from "@/pages/round3";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/round3")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Round3Page />;
}
