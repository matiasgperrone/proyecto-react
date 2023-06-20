import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartContainer from "../cart/CartContainer";
import "./Navbar.css";

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
          <Button variant="outlined" className="logo">
            MyTechnology
          </Button>
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
