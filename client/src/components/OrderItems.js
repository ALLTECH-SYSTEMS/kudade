import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import Order from './Order.js';
import "./OrderItem.css";


const OrderItems = ({ user }) => {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    // if(click){
      if(user){
          axios.get('http://localhost:8000/order_items', {
            auth: {
              username: user?.username,
              password: user?.password
            }
          }).then(response => {
              setOrder(response.data);
              console.log(response.data);
              
          }).catch(err => console.log(err));
      }
     
    // }
   
  }, [user]);

  useEffect(()=>{
    console.log(order);
  },[order])


  return (
    <div className="order-item-grid-container">
      
      { order && order.data.map((o,i) => {
                      return <Order key={i} order={o} />; })
      }

    </div>
  )
}

export default OrderItems