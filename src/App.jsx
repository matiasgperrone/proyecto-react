import "./Index.css";
import FooterContainer from "./components/layout/footer/footerContainer";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <NavbarContainer />
      <ItemListContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
