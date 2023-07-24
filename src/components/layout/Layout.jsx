import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/navbarContainer";
import FooterContainer from "./footer/footerContainer";

const Layout = () => {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

export default Layout;
