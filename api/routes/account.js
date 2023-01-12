import express from 'express';
import Seller from '../models/Seller.js';


const sellerRouter = express.Router();

sellerRouter.put(
    '/',
    async (req, res) => {
      const sellerId = req.user.name;
      const seller = await Seller.findOne({ seller_id: sellerId });
      console.log(req.body);
      if (seller) {
        seller.seller_city = req.body.city;
        seller.seller_state = req.body.state;
        const updatedSeller = await seller.save();
        
        res.status(200).send({ message: 'Seller Details Updated', seller: updatedSeller });
        
      } else {
        res.status(404).send({ message: 'Seller Details Not Found' });
      }
    }
  );
	

export default sellerRouter;