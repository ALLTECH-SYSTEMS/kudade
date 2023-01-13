import Resource from 'resources.js';

class UserResource extends Resource {
   
  toArray() {

    return {
        id: this.order_id,
        product_id: this.product_id,
        product_category: this.products[0].product_category_name,
        price: this.price,
        date: this.shipping_limit_date,
    }
    
  }
}
 
export default UserResource;