import { Button } from "@mui/material";
import { products } from "../../../productsMock";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const Dashboard = () => {
  const completar = () => {
    let refCollection = collection(dataBase, "products");
    products.forEach((product) => {
      addDoc(refCollection, product);
    });
  };

  return (
    <div>
      <h1>Página para el administrador</h1>
      <Button variant="outlined" onClick={completar}>
        Completar base de datos
      </Button>
    </div>
  );
};

export default Dashboard;
