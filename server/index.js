import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';

dotenv.config();

const app =express();

const port = 8000;

app.listen(port,() => console.log( `server is running on port number ${port}`))


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);