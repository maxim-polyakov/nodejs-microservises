const express = require('express')
const proxy = require("http-proxy-middleware");
const dotenv = require('dotenv')

dotenv.config();

const app = express();

// proxy configuration
app.use(proxy('/users',{ target: process.env.USER_SERVICE_URL, changeOrigin: true, }))
app.use(proxy('/products', { target: process.env.PRODUCT_SERVICE_URL, changeOrigin: true, }))
app.use(proxy('/orders', { target: process.env.ORDER_SERVICE_URL, changeOrigin: true, }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})