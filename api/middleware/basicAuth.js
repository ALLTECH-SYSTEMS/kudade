import auth from 'basic-auth';
import Seller from "../models/Seller.js";


const basicAuth = async (req, res, next) => {
    
    const params = await auth(req);
	
	const seller = await Seller.find({ seller_id: params.name, seller_zip_code_prefix: params.pass });
    
    if (params && params.name === seller[0].seller_id && params.pass === seller[0].seller_zip_code_prefix) {
        console.log('Basic Auth: success')
        next()
    } else {
        console.log('Basic Auth: failure')
        res.statusCode = 401
        res.end('Access denied')
    }

}

export default basicAuth