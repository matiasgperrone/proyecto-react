import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartWidgetContainer from "../cartWidget/CartWidgetContainer";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        paddingRight: "20px",
        height: "60px",
        backgroundColor: "#222831",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li>
          <Link to={"/"}>
            <Button variant="outlined" className="logo">
              MyTechnology
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button variant="outlined" className="navbar-button">
              Todos los productos
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/category/celulares"}>
            <Button variant="outlined" className="navbar-button">
              Celulares
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/category/notebooks"}>
            <Button variant="outlined" className="navbar-button">
              Notebooks
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/category/televisores"}>
            <Button variant="outlined" className="navbar-button">
              Televisores
            </Button>
          </Link>
        </li>
        <CartWidgetContainer />
      </ul>
    </Box>
  );
};

export default Navbar;
