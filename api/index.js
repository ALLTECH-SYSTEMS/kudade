import express from 'express';
import basicAuth from "./middleware/basicAuth.js"
import orderItemRoute from  "./routes/orderItems.js"
import sellerRoute from "./routes/account.js"
import cors from 'cors';

    const app = express();
    //middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: '*'
    }));
    app.use(basicAuth)
    
    
    //api routes
    app.use("/order_items", orderItemRoute);
    app.use("/account", sellerRoute);


export default app;




