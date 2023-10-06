import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import createHttpError from 'http-errors';
import morgan from 'morgan';
import productRouter from './routes/product.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(cors());

app.get('/', async (req, res, next) => {
    res.send({
        message: 'it work!!!'
    })
})


app.use(productRouter)

app.use((err, req, res, next) => {
    next(createHttpError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    })
})

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    console.log(`Application running on http://localhost:${port}`)
})



