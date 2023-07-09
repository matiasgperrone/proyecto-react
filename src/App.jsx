import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import NavbarContainer from "./components/layout/navbar/navbarContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
        </Route>

        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
