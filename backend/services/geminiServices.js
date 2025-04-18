import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function getGeminiData(prompt) {
  try {
    const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_KEY}` });

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `${prompt}`,
      });
      return response.text;
  } catch (error) {
    console.log("getGeminiData Failed In geminiServices", error);
  }
}


export default getGeminiData
