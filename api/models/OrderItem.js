import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema(
    {
        order_id: {type: String,},	
        order_item_id: {type: String,},
        product_id: {type: String,},	
        seller_id: {type: String,},
        shipping_limit_date: {type: String,},
        price: {type: String,},
        freight_value: {type: String,},
    },
    { timestamps: true }
  );

  
const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
export default OrderItem;