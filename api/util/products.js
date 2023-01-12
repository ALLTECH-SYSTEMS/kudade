import Product from '../models/Product.js';

const products = async (id) => {

    const product = await Product.findOne({ product_id: id });
    
    return product;
}

export default products;