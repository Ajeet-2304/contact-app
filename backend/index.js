import express from 'express';
import cors from 'cors';  
import connectDatabase from './config/configDatabase.js';
import 'dotenv/config'
import router from './routes/user.route.js';

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;



app.use(router);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})