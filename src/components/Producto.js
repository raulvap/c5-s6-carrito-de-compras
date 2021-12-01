import { Component } from "react";
import Button from "./Button.js";

// Usamos inline style:
const styles = {
  producto: {
    border: "solid 1px #eee",
    borderRadius: "10px",
    boxShadow: "0 5px 5px rgb(0,0,0,0.2)",
    padding: "20px",
    margin: "10px",
  },
  img: {
    width: "220px",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarrito } = this.props;

    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarrito(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
