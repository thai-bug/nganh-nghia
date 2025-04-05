import Round1Page from "@/pages/round1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/round1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Round1Page />;
}
