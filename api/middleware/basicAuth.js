import auth from 'basic-auth';
import Seller from "../models/Seller.js";

const basicAuth = async (req, res, next) => {
    
    const params = await auth(req);
	
    if(params){

        const seller = await Seller.find({ seller_id: params.name, seller_zip_code_prefix: params.pass });
    
        if (params && params.name === seller[0].seller_id && params.pass === seller[0].seller_zip_code_prefix) {
            console.log('Basic Auth: success')
            req.user = params;
            next()
        } else {
            console.log('Basic Auth: failure')
            res.statusCode = 401
            res.end('Access denied')
        }

    } else {
        res.status(401).send({ message: 'Kindly provide your seller id and seller zip code' })
    }

}

export default basicAuth