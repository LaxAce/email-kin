import express from "express";
import dotenv from 'dotenv';
import connectDB from "./db/connect.js";
import cors from 'cors';
import messages from './routes/messages.js'

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/messages', messages)

app.use((req, res) => res.status(404).send('Route does not exist'))

const port = process.env.PORT || 8080;

const start = async () => {
    try {
        await connectDB(process.env.DBURI);
        app.listen(port, console.log(`listening to port: ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
