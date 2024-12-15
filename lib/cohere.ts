import { CohereClient } from "cohere-ai";

export const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY || ''
});
export async function getCohereResponse(message: string) {
  try {
    const response = await cohere.chat({
      message,
      model: "command",
      preamble: `You are an expert sales trainer. Help the user improve their sales skills, 
                 provide feedback, and suggest improvements. Current conversation context: 
                 Sales training session.`,
    });
    return response.text;
  } catch (error) {
    console.error('Cohere API Error:', error);
    throw error;
  }
}