import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./OrderItem.css";

const EditOrderItem = ({ user }) => {

const navigate = useNavigate();
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
    <section className='single-order'>
        <h2>EditOrderItem</h2>
        <form className='edit-form'>

            <label for='order_id'>Order Id</label>
            <input id='order_id' name='order_id' value={order?.order_id}></input>

            <label for='order_item_id'>Order Item Id</label>
            <input id='order_item_id' name='order_item_id' value={order?.order_item_id}></input>
            
            <label for='product_id'>Product Id</label>
            <input id='product_id' name='product_id' value={order?.product_id}></input>

            <label for='shipping_limit_date'>Shipping_limit_date</label>
            <input id='shipping_limit_date' name='shipping_limit_date' value={order?.shipping_limit_date}></input>

            <label for='price'>Price</label>
            <input id='price' name='price' value={order?.price}></input>

            <label for='freight_value'>Freight_value</label>
            <input id='freight_value' name='freight_value' value={order?.freight_value}></input>

        </form>
        {/* <div>order_id:{order.order_id}</div> */}
        <button onClick={() => navigate(-1)} className='btn-edit-order'>Go back to the Previous Page</button>
    </section>
    </>
  )
}

export default EditOrderItem