import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#e9725a",
    color: "#fff",
    padding: "2px 8px",
    borderRadius: "15px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

export default class BubbleAlert extends Component {
  // Clase 50: agregando el método para mostrar el número del usuario:
  getNumber(n) {
    if (!n) {
      return "0";
    }
    return n > 9 ? "9+" : n;
  }

  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)} </span>;
  }
}
