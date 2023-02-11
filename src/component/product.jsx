import { Component } from "react";
import './product.css'
class Product extends Component {
  count = 10
  imgUrl='https://picsum.photos/200'
  state = {};
  render() {
    return (
      <>
        {this.count == 0 ? (
          <h1>Happy Meet U Dear Client</h1>
        ) : (
          <>
            <span className="m-2 text-info">product</span>
            <span className="m-2 badge bg-primary">{this.count}</span>
            <button className="m-2 btn btn-sm btn-success">+</button>
            <button className="m-2 btn btn-sm btn-warning">-</button>
            <button className="m-2 btn btn-sm btn-danger">delete</button>
            <img src={this.imgUrl}/>
          </>
        )}
      </>
    );
  }
}

export default Product;
