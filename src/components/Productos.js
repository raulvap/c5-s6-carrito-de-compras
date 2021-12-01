import { Component } from "react";
import Producto from "./Producto.js";

// Clase 43: usamos inline style para darle estilos:
const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Productos extends Component {
  // Clase 42: Creamos un componente de Productos:

  render() {
    // Sacamos de props que recibe:
    const { productos, agregarAlCarrito } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((item) => (
          <Producto
            key={item.name}
            agregarAlCarrito={agregarAlCarrito}
            producto={item}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
