const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to moongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

// product Schema
const ordersSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String
})

const Order = mongoose.model('Order',ordersSchema)

// Routes
app.get('/orders', async (req,res) => {
    const order = new Order(req.body);
    await order.save();

    res.status(201).send(product);
})

app.get('/order/:id', async (req,res) => {
    const order =  await Order.findById(req.params.id);
    res.send(order)

    // res.status(201).send(user);
})

// Start the server

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`)
})