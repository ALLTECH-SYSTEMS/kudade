import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


//database connection
mongoose.connect(
    encodeURI(process.env.MONGO_URL),
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
);


export default mongoose;