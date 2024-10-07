import express from 'express'; // Sử dụng import thay vì require
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectToDB from './database/db.js'; // Giữ nguyên import cho connectToDB
import mongoose from 'mongoose'; // Sử dụng import thay vì require

// Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 8080;

// Kết nối cơ sở dữ liệu
connectToDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));

// Route cơ bản
app.get('/api', (req, res) => {
    res.status(200).json('Hello');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
