import { Component } from 'react';

class Product extends Component {
  state = {};
  render() {
    const listTxt = ['Hi', 'How are u', 'GoodBy'];
    return (
      <>
        <span className="m-2 text-info">product</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn btn-sm btn-danger">delete</button>
        <ol>{ listTxt.map((val,index) => <li key={index}>{val}</li> )}</ol>
      </>
    );
  }
  format() {
    return <h1>101</h1>;
  }
}

export default Product;
