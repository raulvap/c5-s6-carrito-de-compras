import React, { Component } from "react";
import Logo from "./Logo";
import Carrito from "./Carrito";

const style = {
  navbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    boxShadow: "0 5px 5px rgb(0,0,0,0.2)",
  },
};

export default class Navbar extends Component {
  // Clase 47: componente de nav
  render() {
    const { carrito, esCarritoVisible, mostrarCarrito } = this.props;

    return (
      <nav style={style.navbar}>
        <Logo />
        <Carrito
          carrito={carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={mostrarCarrito}
        />
      </nav>
    );
  }
}
