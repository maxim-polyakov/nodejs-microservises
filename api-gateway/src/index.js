const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer();

dotenv.config();

const app = express();
app.use(cors());
// proxy configuration
app.use('/users', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001'});
});
app.use('/products', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3003'});
});
app.use('/orders', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3002'});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})