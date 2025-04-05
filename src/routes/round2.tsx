import Round2Page from "@/pages/round2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/round2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Round2Page />;
}
