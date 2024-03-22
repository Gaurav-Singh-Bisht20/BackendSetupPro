import dotenv from 'dotenv';
import express  from 'express';
import {dbConnect} from './db/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
        process.exit(1); // Exit the process with a non-zero exit code to indicate failure
    });


    app.get("/", (req, res) => {
        return res.json({
            success:true,
            message:'Your server is up and running....'
        });
    });
    