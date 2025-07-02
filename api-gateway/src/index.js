const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const fetch = require('node-fetch');
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer();
dotenv.config();

const app = express();
app.use(cors());

// proxy configuration
app.use('/users', (req, res) => {
    proxy.web(req, res, {target: 'http://user:3001', changeOrigin: true});
});
app.use('/products', (req, res) => {
    proxy.web(req, res, {target: 'http://product:3003', changeOrigin: true});
});
app.use('/orders', (req, res) => {
    proxy.web(req, res, {target: 'http://order:3002', changeOrigin: true});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})