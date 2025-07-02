import fetch from "node-fetch";

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')


const proxy = httpProxy.createProxyServer();

dotenv.config();

const app = express();
app.use(cors());
// proxy configuration
app.get('/users', async (req, res) => {
    try {
        // внешний api, к которому мы обращаемся
        const externalapiurl = 'http://localhost:3001';

        // получаем данные с внешнего api
        const response = await fetch(externalapiurl);

        if (!response.ok) {
            throw new error(`ошибка при запросе: ${response.status}`);
        }

        const data = await response.json();

        // возвращаем данные клиенту
        res.json(data);
    } catch (error) {
        console.error('ошибка api gateway:', error.message);
        res.status(500).json({ error: 'ошибка при получении данных' });
    }
});

app.get('/products', async (req, res) => {
    try {
        // внешний api, к которому мы обращаемся
        const externalapiurl = 'http://localhost:3003';

        // получаем данные с внешнего api
        const response = await fetch(externalapiurl);

        if (!response.ok) {
            throw new error(`ошибка при запросе: ${response.status}`);
        }

        const data = await response.json();

        // возвращаем данные клиенту
        res.json(data);
    } catch (error) {
        console.error('ошибка api gateway:', error.message);
        res.status(500).json({ error: 'ошибка при получении данных' });
    }
});

app.get('/orders', async (req, res) => {
    try {
        // внешний api, к которому мы обращаемся
        const externalapiurl = 'http://localhost:3002';

        // получаем данные с внешнего api
        const response = await fetch(externalapiurl);

        if (!response.ok) {
            throw new error(`ошибка при запросе: ${response.status}`);
        }

        const data = await response.json();

        // возвращаем данные клиенту
        res.json(data);
    } catch (error) {
        console.error('ошибка api gateway:', error.message);
        res.status(500).json({ error: 'ошибка при получении данных' });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})