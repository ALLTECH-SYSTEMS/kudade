import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        order_id:{type: String,},	
        product_id:{type: String,},	
        product_category_name:{type: String,},	
        product_name_lenght:{type: String,},	
        product_description_lenght:{type: String,},	
        product_photos_qty:{type: String,},	
        product_weight_g:{type: String,},	
        product_length_cm:{type: String,},	
        product_height_cm:{type: String,},	
        product_width_cm:{type: String,},
    },
    { timestamps: true }
  );

  
const Product = mongoose.model('Product', ProductSchema);
export default Product;