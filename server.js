import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import postRoutes from './routes/post.js';

dotenv.config()

const app = express();
const port = 8080;

app.use(express.json());
app.use('/api/post', postRoutes)

async function main() {
    await mongoose.connect(process.env.DB);
}
main()
    .then(() =>{
        app.listen(port, (req, res) =>{
            console.log(`Server corriendo en el puerto: ${port}`);
        })
    })
    .catch(err => console.error(err));