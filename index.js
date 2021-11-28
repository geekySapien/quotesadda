import express from "express";
import mongoose from "mongoose";
require("dotenv").config();

import quoteRoute from './routes/quotes';
const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("successfully connected to database"))
    .catch((err) => console.log(err));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use('/api/quotes', quoteRoute);
app.listen(PORT, () => console.log("server is up"));
