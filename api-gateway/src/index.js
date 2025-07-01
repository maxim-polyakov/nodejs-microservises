const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

const app = express();
app.use(cors());
// proxy configuration
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true, secure: false }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true, secure: false }));
app.use('/orders', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true, secure: false }));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})