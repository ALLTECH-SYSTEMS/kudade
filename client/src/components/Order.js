import React from 'react'
import { Link } from 'react-router-dom';

const Order = ({ order }) => {

  

  return (
    <div className='order-item-grid'>
        <p>{order.product_category}</p>
        <p>{order.price}</p>
        <p>{order.date}</p>
        <Link to={`/order-items/${order.id}`}>more info</Link>
    </div>
  )
}

export default Order