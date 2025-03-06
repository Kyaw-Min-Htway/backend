const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const { userId, items, address, paymentMethod } = req.body;
        const order = new Order({
            userId,
            items,
            address,
            paymentMethod,
            status: 'pending',
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order});
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
}