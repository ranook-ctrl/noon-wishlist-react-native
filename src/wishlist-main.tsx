import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Retune } from "retune";
import "./index.css";
import WishlistPage from "./components/WishlistPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex min-h-full w-full items-start justify-center bg-[#e9ebf0] py-8">
      <WishlistPage />
    </div>
    <Retune />
  </StrictMode>,
);
