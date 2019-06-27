import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.product.productName}</td>
          <td>{this.props.product.price}</td>
          <td>
            <h2>
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </h2>
          </td>
          <td>{this.props.product.price * this.props.product.count}</td>
          <td>
            <button
              onClick={() => this.props.onIncrement(this.props.product)}
              className="btn btn-secondary btn-lg m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.product)}
              className="btn btn-secondary btn-lg m-2"
              disabled={this.props.product.count === 0 ? true : null}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-lg m-2"
              onClick={() =>
                this.props.onDelete(this.props.product.productName)
              }
            >
              Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    return `badge m-2 badge-${
      this.props.product.count === 0 ? "warning" : "primary"
    }`;
  }

  formatCount() {
    const { count } = this.props.product;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
