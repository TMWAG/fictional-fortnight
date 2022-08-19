require('dotenv').config();
import express from 'express';

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => console.log(`server started on ${PORT} port`)); 