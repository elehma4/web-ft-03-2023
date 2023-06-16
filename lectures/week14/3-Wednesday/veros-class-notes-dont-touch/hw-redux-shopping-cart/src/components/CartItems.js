
import React from 'react'
import {useSelector} from 'react-redux'
import Fade from 'react-reveal/Fade'
import {formatCurrency} from './utils'

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const numberOfItems = useSelector(state =>  state.cart.numberOfItems)
  const totalCost = useSelector(state => state.cart.totalCost)

  return (
    <>
      {
        numberOfItems === 0
        ?
        <div>Cart is empty</div>
        :
        <div>
          You have <em>{numberOfItems}</em> items in your cart

          <br />

          Total Cost: {formatCurrency(totalCost)}
        </div>

      }

      <Fade left cascade>

        <div className="row cart-items">
          {
            cartItems.map(item =>{
              return <div className="col-12 d-flex flex-column">

                <div className="d-flex">

                  <div>
                    <img src={item.image} alt="" />
                  </div>

                  <div>{item.title}</div>
                </div>

                <div className="mb-4">
                  {formatCurrency(item.price)}

                  <br />
                  <button className="btn btn-warning">Remove</button>
                </div>

              </div>
            })
          }

        </div>
      </Fade>

    </>
  )
}

export default CartItems
