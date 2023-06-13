import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';

const api = process.env.API_URL;
const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny')); // log requests



app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url'
    }
    res.send(product);
}
);



app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
}
);


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
    console.log('Server started on port 9999!');
    }
);