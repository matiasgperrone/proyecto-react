import "../../../index.css";
import "./ItemList.css";
import Box from "@mui/material/Box";

function ItemList({ nombre }) {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
      }}
    >
      <h1 className="bienvenida">Bienvenido al proyecto de {nombre}</h1>
      <h2 className="bienvenida-mytechnology">MyTechnology</h2>
      <h3 className="bienvenida-h3">
        Se trata de un proyecto web sobre un Ecommerce de artículos de
        tecnología
      </h3>
    </Box>
  );
}

export default ItemList;
