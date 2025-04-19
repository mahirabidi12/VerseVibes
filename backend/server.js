import app from "./app.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  getQuranResponse,
  getBibleResponse,
  getGeetaResponse,
  getTanakhResponse,
} from "./controllers/userControllers.js";

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/quran", getQuranResponse);
app.post("/bible", getBibleResponse);
app.post("/tanakh", getTanakhResponse);
app.post("/geeta", getGeetaResponse);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
