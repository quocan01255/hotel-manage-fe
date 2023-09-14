const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config()
const stripe = require("stripe")(process.env.YOUR_SECRET_KEY);

app.use(express.json());
app.use(cors());

// Định nghĩa endpoint để tạo phiên thanh toán
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { products } = req.body;
        // console.log(products);
        const lineItems = products.map((product) => ({           
            price_data: {
                currency: "vnd",
                product_data: {
                    name: product.name,
                    images: [product.img], // Đường dẫn đến hình ảnh sản phẩm
                },
                // unit_amount: 1000000, // Giá tiền hàng (đơn vị cent)
                unit_amount: product.price,               
            },
            quantity: product.quantity, // Số lượng sản phẩm
        }));

        // Tạo một phiên thanh toán
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/bookingpage',
            cancel_url: 'http://localhost:3000/homecart',
        });

        // Gửi thông tin phiên thanh toán về cho client
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong.');
    }
});
// console.log(1);
// Khởi động server
app.listen(7000, () => {
    console.log('Server started on port 7000');
});