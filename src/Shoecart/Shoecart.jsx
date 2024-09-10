import React, { Component } from 'react'
import ListShoe from './ListShoe'
import Cart from './Cart'
import { dataShoe } from './dataShoe'

export default class Shoecart extends Component {
    state = {
        cart : [],
        Listshoe : dataShoe,
    }
    handAddCart = (shoe) => {
        console.log('shoe', shoe)
        let { cart } = this.state
        let newCart = [...cart]
        let foundIndex = newCart.findIndex((item)=> item.id === shoe.id)
        if(foundIndex!=-1){
            newCart[foundIndex].total+=1
        } else {
            newCart.push({...shoe,total:1})
        }

        this.setState({
            cart : newCart
        })
        console.log('newCart', newCart)
    }
    handChangeTotal = (idshoe,option)=>{
        let { cart } = this.state
        let newCart = [...cart]
        let Index = newCart.findIndex((item)=> item.id === idshoe)
        newCart[Index].total += option

        this.setState({
            cart : newCart
        })
        console.log('newCart', newCart)
    }
    handDeleteCart = (idshoe) => {
        console.log('idshoe', idshoe)
        let { cart } = this.state
        let newCart = cart.filter((item)=> item.id != idshoe)

        this.setState({
            cart : newCart
        })
        console.log('newCart', newCart)
    }
  render() {
    let { cart,Listshoe } = this.state
    return (
      <div className='row'>
        <ListShoe shoeArr={Listshoe} clickAdd={this.handAddCart}/>
        <Cart datacart={cart} clickDelete={this.handDeleteCart} changeOption={this.handChangeTotal}/>
      </div>
    )
  }
}
