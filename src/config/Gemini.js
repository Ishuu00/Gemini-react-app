import { GoogleGenAI } from "@google/genai";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINIAPIKEY });

async function main(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: promt,
  });
  console.log(response.text);
  return response.text;
}

export default main;
