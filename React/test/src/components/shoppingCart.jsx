import React, { Component } from "react";
import Counter from "./counter";

class ShoppingCart extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div style={{ Width: "100%" }}>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Reset
        </button>
        <table className="table table-hover" style={{ Width: "100%" }}>
          <thead>
            <tr>
              <th>商品</th>
              <th>價格</th>
              <th>數量</th>
              <th>總價</th>
              <th colSpan="3">操作</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <Counter
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShoppingCart;
