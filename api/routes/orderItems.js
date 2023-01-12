import express from 'express';
import OrderItem from '../models/OrderItem.js';
import UserResource from '../resources/UserResource.js';

const orderItemRouter = express.Router();

// orderItemRouter.get(
//     '/',
//     async (req, res) => {
//       const orders = await OrderItem.find({
//         seller_id: req.user.name
//     });

//       res.send(orders);

//     //   const collection = UserResource.collection(orders, true);
//     //   res.send(collection);
//     //   console.log(collection);
//     }
// );

orderItemRouter.get(
    '/',
		async (req, res) => {
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
		]).limit(10);

		// res.send(orders);

		  const collection = UserResource.collection(orders, true);
		  res.send(collection);
		//   console.log(collection);
		}
    );
	

export default orderItemRouter;