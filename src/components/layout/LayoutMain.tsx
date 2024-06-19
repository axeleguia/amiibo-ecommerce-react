import { Outlet } from "react-router-dom";
import { NavBar } from "../ui/NavBar/NavBar";
import { FC } from "react";
import { Toaster } from "sonner";

export const LayoutMain: FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="pt-24 px-4">
          <Outlet />
        </main>
      </div>
      <Toaster expand={false} richColors />
    </>
  );
};
