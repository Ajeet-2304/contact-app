import mongoose from 'mongoose';
import 'dotenv/config';
const connectDatabase = async () =>{
    try {
        const res = await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully !!!");
    } catch (error) {
        console.log("Database not connected !!!",error);
    }
}

export default connectDatabase;