const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
app.use(cors());


app.use('/users', createProxyMiddleware({ target: 'http://user:3001', changeOrigin: true, }))
app.use('/products', createProxyMiddleware({ target: 'http://product:3003', changeOrigin: true, }))
app.use('/orders', createProxyMiddleware({ target: 'http://order:3002', changeOrigin: true, }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})