import React, { Component } from 'react'
import ListShoe from './ListShoe'
import Cart from './Cart'

export default class Shoecart extends Component {
  render() {
    return (
      <div className='row'>
        <ListShoe />
        <Cart />
      </div>
    )
  }
}
