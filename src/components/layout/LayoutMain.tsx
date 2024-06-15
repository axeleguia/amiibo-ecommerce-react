import { Outlet } from "react-router-dom"
import { NavBar } from "../ui/NavBar/NavBar"
import { FC } from "react";

export const LayoutMain: FC = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="mx-auto p-8">
        <Outlet />
      </div>
    </div>
  )
};
