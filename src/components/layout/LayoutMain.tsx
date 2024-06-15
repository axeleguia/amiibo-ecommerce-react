import { Outlet } from "react-router-dom"
import { NavBar } from "../ui/NavBar/NavBar"

export const LayoutMain = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <Outlet />
    </div>
  )
};
