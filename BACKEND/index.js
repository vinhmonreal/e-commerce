import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import { ProductModel, CreateNewProduct } from './models/product.js';
import {  CreateNewUser} from './models/user.js';


export const api = process.env.API_URL;
const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny')); // log requests

app.post(`/register`, CreateNewUser);

app.post(`${api}/admin/createproduct`, CreateNewProduct);


app.get(`${api}/products`, async (req, res) => {
    const productList = await ProductModel.find();
    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
});
    

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
    .then(() => {
        console.log('Database connection is ready');
    })
    .catch((err) => {
        console.log(err);
    }
);

app.listen(4000, () => {
    console.log(api);
    console.log('Server started on port 4000!');
    }
);


