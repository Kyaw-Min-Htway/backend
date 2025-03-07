require('dotenv').config(); // Load .env file FIRST

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const restaurantRoutes = require('./routes/restaurant');
const orderRoutes = require('./routes/order');

const app = express();
app.use(cors());
app.use(express.json());

// Debugging: Check if MONGO_URI is loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI is missing from .env file!');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
