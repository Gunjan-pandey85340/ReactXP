import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
  let oldPrice = ["12485", "11999", "1599", "599"];
  let newPrice = ["8999", "9100", "899", "278"];
  let Description = ["8,000DPI", "intuitive surface", "designed for iPad Pro", "wireless"];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;

