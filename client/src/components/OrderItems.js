import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import Order from './Order.js';
import "./OrderItem.css";


const OrderItems = ({ username, password, click, setClick }) => {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    
    if(click){
      
      if(username.current.value && password.current.value){
          axios.get('http://localhost:3000/order_items', {
            auth: {
              username: username.current.value,
              password: password.current.value
            }
          }).then(response => {
              setOrder(response.data);
              setClick(false);
              console.log(response.data);
              
      
          }).catch(err => console.log(err));
      }
     
    }
   
  }, [click, username, password, setClick]);

  useEffect(()=>{
    console.log(order);
  },[order])


  return (
    <div className="order-item-grid-container">
      
      { order && order.data.map((o) => {
                      return <Order key={o.id} order={o} />; })
      }

    </div>
  )
}

export default OrderItems