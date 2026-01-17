import ProductCard from "./Tuan1/components/productCard";
import image72 from "../data/Image72.png";
import Button from "./Tuan1/components/Button";
import Login from "./Tuan1/components/Login";
import ProductList from "./Tuan1/components/ProductList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <ProductCard
          img={image72}
          name="iPhone 15"
          price="1200"
        />

        <div style={{ marginTop: 16 }}>
          <Button type="primary">Primary</Button>{" "}
          <Button type="success">Success</Button>{" "}
          <Button type="danger">Danger</Button>
        </div>

        <div style={{ marginTop: 24 }}>
          <Login />
        </div>

        <div style={{ marginTop: 24, width: "100%" }}>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;