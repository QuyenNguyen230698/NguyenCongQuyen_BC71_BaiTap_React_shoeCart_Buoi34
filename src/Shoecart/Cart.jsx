import React, { Component } from "react";

export default class Cart extends Component {
  renderTable = () => {
    let { datacart,clickDelete,changeOption } = this.props;
    return datacart.map((shoe, index) => {
      return (
        <tr key={index}>
          <td style={{ width:325 }}>{shoe.name}</td>
          <td>
            <img
              src={shoe.image}
              alt={shoe.name}
              style={{ width: 50, height: 50 }}
            />
          </td>
          <td><button onClick={()=>changeOption(shoe.id,-1)} className='btn btn-dark'>-</button>
            <strong className='mx-2'>{shoe.total}</strong>
            <button onClick={()=>changeOption(shoe.id,+1)} className='btn btn-danger'>+</button></td>
          <td>{shoe.price}</td>
          <td>
            <button onClick={()=>clickDelete(shoe.id)} className="btn btn-warning">Delete</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <h2 className="text-center">Cart</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width:325 }}>Name</th>
                <th>Image</th>
                <th>Total</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
          {this.props.datacart.length === 0 && (
            <h3 className="text-center">No item to display</h3>
          )}
        </div>
      </div>
    );
  }
}
