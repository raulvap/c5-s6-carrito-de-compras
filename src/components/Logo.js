import { Component } from "react";

const styles = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
    backgroundColor: "#ecc872",
    color: "#fff",
    padding: "5px",
    borderRadius: "5px",
  },
};

export default class Logo extends Component {
  render() {
    return <div style={styles.logo}>Shop</div>;
  }
}
