import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import basicAuth from "./middleware/basicAuth.js"


const PORT = 3000;


dotenv.config();
const app = express();

//database connection
mongoose.connect(
    encodeURI(process.env.MONGO_URL),
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
);



app.use(express.json())
app.use(basicAuth)

//Test Link
app.get('/test', (req,res)=> {
    res.json({ ok: true});
})

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));