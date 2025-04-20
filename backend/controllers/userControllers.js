import getGeminiData from "../services/geminiServices.js";
import {
  getQuranPrompt,
  getBiblePrompt,
  getGeetaPrompt,
  getTanakhPrompt,
} from "../services/promptServices.js";

export async function getQuranResponse(req, res) {
  try {
    const issue = req.body;
    console.log(req)
    const prompt = getQuranPrompt(issue);
    const response = await getGeminiData(prompt);
    res.json(response);
  } catch (error) {
    console.log("Could Not Fetch Data", error);
  }
}

export async function getBibleResponse(req, res) {
  try {
    const issue = req.body;
    console.log(issue)
    const prompt = getBiblePrompt(issue);
    const response = await getGeminiData(prompt);
    res.json(response);
  } catch (error) { 
    console.log("Could Not Fetch Data", error);
  }
}

export async function getTanakhResponse(req, res) {
  try {
    const issue = req.body;
    const prompt = getTanakhPrompt(issue);
    const response = await getGeminiData(prompt);
    res.json(response);
  } catch (error) {
    console.log("Could Not Fetch Data", error);
  }
}

export async function getGeetaResponse(req, res) {
  try {
    const issue = req.body;
    const prompt = getGeetaPrompt(issue);
    const response = await getGeminiData(prompt);
    res.json(response);
  } catch (error) {
    console.log("Could Not Fetch Data", error);
  }
}
