import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

const SingleOrderItem = ({ user }) => {
  
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  
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
        <div>{id}</div>
        <Link to='/order-items'>back to all order items</Link>
    </>
  )
}

export default SingleOrderItem