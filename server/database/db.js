import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
    try {
        const uri = process.env.URI; // Lấy chuỗi kết nối từ biến môi trường
        if (!uri) {
            throw new Error('MongoDB URI is not defined in .env file');
        }
        await mongoose.connect(uri); // Loại bỏ các tùy chọn deprecated
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối
    }
};

export default connectToDB;
