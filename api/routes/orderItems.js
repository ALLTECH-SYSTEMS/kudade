import express from 'express';
import OrderItem from '../models/OrderItem.js';

const orderItemRouter = express.Router();

orderItemRouter.get(
    '/',
    async (req, res) => {
      const orders = await OrderItem.find({
        seller_id: req.user.name
    }).sort({
        price: -1,
        shipping_limit_date: 1
    }).skip(1).limit(2);;

      res.send(orders);
    }
);

export default orderItemRouter;