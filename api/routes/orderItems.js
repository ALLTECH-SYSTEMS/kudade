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

          const limit =
            req.query.limit && Number(req.query.limit) <= 20
            ? 20
            : req.query.limit && Number(req.query.limit) >= 100
            ? 100
            : req.query.limit && Number(req.query.limit) ? Number(req.query.limit) : 20


          const page =
            req.query.page && Number(req.query.page) <= 0 ? Number(req.query.page) : 0;
		
		
		  const offset = limit * page;
          
        //   console.log(offset);

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
		]).sort(sortOrder).skip(offset).limit(limit);

		// res.send(orders);

		  const collection = UserResource.collection(orders, true);
		  res.send(collection);
		//   console.log(collection);
		}
    );
	

export default orderItemRouter;