const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
app.use(cors());


app.use('/users', createProxyMiddleware({ target: process.env.USER_SERVICE_URL, changeOrigin: true, }))
app.use('/products', createProxyMiddleware({ target: process.env.PRODUCT_SERVICE_URL, changeOrigin: true, }))
app.use('/orders', createProxyMiddleware({ target: process.env.ORDER_SERVICE_URL, changeOrigin: true, }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})