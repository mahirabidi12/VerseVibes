import app from "./app.js";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import {
  getQuranResponse,
  getBibleResponse,
  getGeetaResponse,
  getTanakhResponse,
} from "./controllers/userControllers.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quran", getQuranResponse);
app.use("/bible", getBibleResponse);
app.use("/tanakh", getGeetaResponse);
app.use("/geeta", getTanakhResponse);