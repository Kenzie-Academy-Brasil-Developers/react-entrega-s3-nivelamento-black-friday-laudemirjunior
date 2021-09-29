import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Button from "./components/Button";
import Cart from "./components/Cart/index.jsx";

function App() {
  const [produto, setProduto] = useState();
  const [show, setShow] = useState(false);
  const [currentSale, setCurrentSale] = useState([]);
  const [useProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const handleClick = (productId) => {
    setCurrentSale([...currentSale, productId]);
  };
  const total = () => {
    return currentSale.reduce((acc, total) => acc + total.preco, 0).toFixed(2);
  };

  return (
    <div className="App">
      <Button
        useProduct={useProduct}
        setProduto={setProduto}
        setShow={setShow}
      />
      {show && <ProductList produto={produto} handleClick={handleClick} />}
      <Cart currentSale={currentSale} />
      <h2 className="total">Valor total: R${total()}</h2>
    </div>
  );
}

export default App;
