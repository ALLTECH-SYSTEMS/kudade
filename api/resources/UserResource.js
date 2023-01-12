import Resource from 'resources.js';
import products from '../util/products.js';

 
class UserResource extends Resource {
   

  toArray() {
    // products(this.product_id);
    // products(this.product_id)
    // console.log();

    return {
      id: this.order_item_id,
      product_id: this.product_id,
    //   product_category: product,
      price: this.price,
      date: this.shipping_limit_date,

    }
  }
}
 
export default UserResource;