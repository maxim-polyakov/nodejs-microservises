const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { createproxymiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
app.use(cors());

app.use('/users', createproxymiddleware({
    target: 'http://user:3001', // адрес user service
    changeorigin: true
}));

app.use('/products', createproxymiddleware({
    target: 'http://product:3003', // адрес product service
    changeorigin: true
}));


app.use('/orders', createproxymiddleware({
    target: 'http://order:3002', // адрес order service
    changeorigin: true
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})