import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import ShoppingCart from "./components/shoppingCart";

class App extends Component {
  state = {
    products: [
      { id: 1, productName: "Jacket", price: 3500, count: 7 },
      { id: 2, productName: "Shirt", price: 399, count: 0 },
      { id: 3, productName: "Pants", price: 900, count: 0 },
      { id: 4, productName: "Shoes", price: 1500, count: 0 }
    ]
  };

  reset = () => {
    const products = this.state.products.map(p => {
      p.count = 0;
      return p;
    });
    this.setState(products);
  };
  increment = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].count++;
    this.setState({ products });
  };
  decrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].count -= 1;
    let disabled = null;
    products[index].count === 0 ? (disabled = true) : (disabled = null);
    this.setState({ products });
  };
  delete = pn => {
    const products = this.state.products.filter(
      item => item.productName !== pn
    );
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          selected={this.state.products.filter(p => p.count > 0).length}
        />
        <div>
          <ShoppingCart
            products={this.state.products}
            onReset={this.reset}
            onDelete={this.delete}
            onIncrement={this.increment}
            onDecrement={this.decrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
