import { createRoot } from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <></>,
});

createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
