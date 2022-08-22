import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT,
    MONGODB_CNN: process.env.MONGODB_CNN,
}