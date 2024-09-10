import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { shoe,add } = this.props;
    return (
      <div className="col-3 mb-3">
        <div className="card text-start">
        <img className="card-img-top w-100" src={shoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title" style={{ width:120,height:100 }}>{shoe.name}</h4>
          <p className="card-text"></p>
          <div className="text-nowrap">
              <button onClick={()=>add(shoe)} className="btn btn-danger m-1">Add</button>
              <button className="btn btn-dark">Show</button>
            </div>
        </div>
      </div>
      </div>
    );
  }
}
