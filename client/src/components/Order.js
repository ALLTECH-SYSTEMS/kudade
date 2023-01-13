import React from 'react'

const Order = ({ order }) => {
  return (
    <div className='order-item-grid'>
        <div>{order.product_category}</div>
        <div>{order.price}</div>
        <div>{order.date}</div>
    </div>
  )
}

export default Order