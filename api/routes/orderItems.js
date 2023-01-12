import express from 'express';
import OrderItem from '../models/OrderItem.js';
import UserResource from '../resources/UserResource.js';

const orderItemRouter = express.Router();

orderItemRouter.get(
    '/',
    async (req, res) => {
      const orders = await OrderItem.find({
        seller_id: req.user.name
    });

    //   res.send(orders);

      const collection = UserResource.collection(orders, true);
      res.send(collection);
    //   console.log(collection);
    }
);

export default orderItemRouter;