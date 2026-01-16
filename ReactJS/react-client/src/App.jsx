import ProductCard from "./Tuan1/components/productCard";
import image72 from "../data/Image72.png"
import Button from "./Tuan1/components/Button";
import Login from "./Tuan1/components/Login";
import ProductList from "./Tuan1/components/ProductList";

function App() {
  return (
    <div style={{ padding: 20 }}>

      <ProductCard
      img={image72}  
      name="iPhone 15"
      price="1200"
      />

      <br />

      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>

      <br />

      <br /><br />
      <Login />

      <br />

      <ProductList />
    </div>

  );
}

export default App;
