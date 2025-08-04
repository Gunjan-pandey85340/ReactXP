export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
    color: "#555",
  };

  let newStyles = {
    fontWeight: "bold",
    color: "#000",
  };

let styles = {
  backgroundColor: "#e0c367",
  height: "45px",
  width: "100%",
  borderBottomLeftRadius: "14px",
  borderBottomRightRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px"
};


  return (
    <div style={styles}>
      <span style={oldStyles}>₹{oldPrice}</span>
      <span style={newStyles}>₹{newPrice}</span>
    </div>
  );
}
