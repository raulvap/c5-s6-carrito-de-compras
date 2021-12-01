import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    color: "#fff",

    padding: "15px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

class Button extends Component {
  // Clase 44: children está dentro de las props
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
