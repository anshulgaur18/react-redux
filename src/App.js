import products from "./products.json";
import "./App.css";
import Product from "./components/products";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;

