import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarrito from "./DetallesCarrito";

const styles = {
  carrito: {
    backgroundColor: "#359a2c",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubbleAlert: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

export default class Carrito extends Component {
  render() {
    // Clase 53: sumando la cantidad de items del carrito
    const { carrito, esCarritoVisible, mostrarCarrito } = this.props;
    const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
      <div>
        <span style={styles.bubbleAlert}>
          {cantidad > 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carrito} onClick={mostrarCarrito}>
          Carrito
        </button>
        {esCarritoVisible ? <DetallesCarrito carrito={carrito} /> : null}
      </div>
    );
  }
}
