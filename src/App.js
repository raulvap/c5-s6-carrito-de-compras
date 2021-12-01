import { Component } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Productos from "./components/Productos";

class App extends Component {
  // Clase 39: creamos el estado inicial
  state = {
    // Estos productos los mandamos al componente de productos
    productos: [
      { name: "Tomate", price: 150, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 250, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carrito: [],
    esCarritoVisible: false,
  };

  // Clase 51: Creamos un método para agregar productos al carrito
  agregarAlCarrito = (producto) => {
    // deconstructing el carrito de compras
    const { carrito } = this.state;

    //Buscamos si ya tiene un mismo elemento que el producto que recibimos:
    if (carrito.find((item) => item.name === producto.name)) {
      //si es true, entonces si hay un elemento en el carrito con el mismo tipo y creamos:
      const temporalCarrito = carrito.map((item) =>
        // ternary operator: (if)
        item.name === producto.name
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      );
      return this.setState({
        carrito: temporalCarrito,
      });
    }

    // agregamos el producto al carrito + la propiedad de cantidad
    return this.setState({
      carrito: this.state.carrito.concat({
        // mantenemos lo que ya tenemos:
        ...producto,
        cantidad: 1,
      }),
    });
  };

  // Clase 55: agregamos un método para hacer visible o no el carrito de compras
  mostrarCarrito = () => {
    if (!this.state.carrito.length) {
      // si no hay elementos en el carrito de compras no hacemos nada
      return;
    }

    this.setState({ esCarritoVisible: !this.state.esCarritoVisible });
  };

  render() {
    // podemos hacer deconstructing del state o pasarlo directamente en las props:
    const { esCarritoVisible } = this.state;
    return (
      <>
        <Navbar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </>
    );
  }
}

export default App;
