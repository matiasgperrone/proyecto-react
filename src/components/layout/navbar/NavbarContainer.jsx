import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarContainer;
