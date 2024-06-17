import { Outlet } from "react-router-dom";
import { NavBar } from "../ui/NavBar/NavBar";
import { FC } from "react";
import { Toaster } from "sonner";

export const LayoutMain: FC = () => {
  return (
    <>
      <div className="bg-gray-100">
        <NavBar />
        <div className="h-screen mx-auto p-8 pt-28">
          <Outlet />
        </div>
      </div>
      <Toaster expand={false} richColors />
    </>
  );
};
