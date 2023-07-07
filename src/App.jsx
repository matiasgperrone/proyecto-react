import "./Index.css";
import FooterContainer from "./components/layout/footer/footerContainer";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <NavbarContainer />
      {/* <ItemListContainer />
      <FooterContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
