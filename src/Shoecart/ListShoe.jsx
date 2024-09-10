import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  render() {
    let { shoeArr,clickAdd } = this.props
    return (
      <div className='col-6'>
        <h2 className='text-center'>ListShoe</h2>
        <div className='row'>
            {shoeArr.map((shoe,index) => {
                return <ItemShoe key={index} shoe={shoe} add={clickAdd}/>
            })}
        </div>
      </div>
    )
  }
}
