
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateMotivation(context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Dhawal (also known as D, Pookie, Babes). Write a very short, sweet, and highly motivating message (max 3 sentences) for your girlfriend Jaan (also known as My Love, My Sweetheart). She is working hard on her future and independence. Mention her strength and that I (Dhawal) am always beside her. Context: ${context}`,
      config: {
        temperature: 0.9,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating motivation:", error);
    return "You are the strongest person I know, Jaan. Keep chasing your dreams, I'm right here with you. ❤️";
  }
}
