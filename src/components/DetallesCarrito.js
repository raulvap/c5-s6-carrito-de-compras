import { Component } from "react";

const styles = {
  detallesCarrito: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "1px solid #aaa",
  },
};

export default class DetallesCarrito extends Component {
  render() {
    const { carrito } = this.props;
    return (
      <div style={styles.detallesCarrito}>
        <ul style={styles.ul}>
          {carrito.map((item) => (
            <li key={item.name} style={styles.producto}>
              <img src={item.img} alt={item.name} width="50" height="32 " />
              {item.name}
              <span>{item.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
