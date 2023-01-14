import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./OrderItem.css";

const SingleOrderItem = ({ user }) => {

  const navigate = useNavigate();
  
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const handleClick = async () => {
    try {
      if (window.confirm('Are you sure you wish to delete this item?')){
        await axios.delete(`http://localhost:8000/order_items/${id}`, {
            auth: {
              username: user?.username,
              password: user?.password
            }
        })
      } 
      navigate('/order-items');
    } catch (err) {console.log(err)}
  };
  
  useEffect(()=>{
         axios.get(`http://localhost:8000/order_items/${id}`, {
            auth: {
              username: user?.username,
              password: user?.password
            }
          }).then(response => {
              setOrder(response.data);
              console.log(response.data);
              
          }).catch(err => console.log(err));
  },[user, id])

  useEffect(()=>{
    console.log(order);
  },[order])

  return (
    <>
        <section className="single-order">
            <div className='single-order-item'>
                {/* <p>{id}</p> */}
                <p>Order_id: {order?.order_id}</p>
                <p>Order_item_id: {order?.order_item_id}</p>
                <p>Product_id: {order?.product_id}</p>
                <p>Shipping_limit_date: {order?.shipping_limit_date}</p>
                <p>Price: {order?.price}</p>
                <p>freight_value: {order?.freight_value}</p>
            </div>

            <div className='btn'>
                {/* <button className='btn-edit'>Edit</button> */}
                <Link to={`/order-items/edit/${id}`}><button className='btn-edit'>Edit</button></Link>
                <button className='btn-delete' onClick={handleClick}>Delete</button>
            </div>
          
            <Link to='/order-items'>back to all order items</Link>
        </section>
    </>
  )
}

export default SingleOrderItem