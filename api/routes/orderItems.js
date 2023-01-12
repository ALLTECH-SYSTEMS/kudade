import express from 'express';
import OrderItem from '../models/OrderItem.js';
import UserResource from '../resources/UserResource.js';

const orderItemRouter = express.Router();

orderItemRouter.get(
    '/',
		async (req, res) => {

          const order = req.query.order || '';

          const sortOrder =
            order === 'lowest'
              ? { price: 1 }
              : order === 'highest'
              ? { price: -1 }
              : order === 'date_asc'
              ? { shipping_limit_date: 1 }
              : { shipping_limit_date: -1 };
          
              
		  const orders = await OrderItem.aggregate([
            {
                $match: {
                  seller_id: req.user.name,
                },
            },
		    {
			  $lookup: {
				 from: "products",
                 localField: "product_id",
                 foreignField: "product_id",
				 as: "products"
			  }
		   }
		]).sort(sortOrder).limit(10);

		// res.send(orders);

		  const collection = UserResource.collection(orders, true);
		  res.send(collection);
		//   console.log(collection);
		}
    );
	

export default orderItemRouter;