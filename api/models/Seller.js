import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema(
    {
        seller_id: {type: String,},
        seller_zip_code_prefix: {type: String,},
        seller_city: {type: String,},
        seller_state: {type: String,}
    },
    { timestamps: true }
  );

  
const Seller = mongoose.model('Seller', SellerSchema);
export default Seller;