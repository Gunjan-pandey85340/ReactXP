import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
        
      <Product title="Logitech MAX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics transformer" idx={2} />
      <Product title="Pentronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
