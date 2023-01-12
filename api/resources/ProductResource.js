const Resource = require('resources.js');
 
class ProductResource extends Resource {

  toArray() {
    return {
      title: `${this.title} - Title`
    }
  }
}
 
export default ProductResource;