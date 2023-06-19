import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartContainer from "../cart/cartContainer";
import HubIcon from "@mui/icons-material/Hub";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        padding: "0px 20px",
        height: "60px",
        backgroundColor: "#393E46",
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
          <HubIcon />
        </li>
        <li>
          <Button variant="outlined" className="navbar-button">
            Inicio
          </Button>
        </li>
        <li>
          <Button variant="outlined" className="navbar-button">
            Productos
          </Button>
        </li>
        <li>
          <Button variant="outlined" className="navbar-button">
            Sobre nosotros
          </Button>
        </li>
        <li>
          <Button variant="outlined" className="navbar-button">
            Contacto
          </Button>
        </li>
        <CartContainer />
      </ul>
    </Box>
  );
};

export default Navbar;
