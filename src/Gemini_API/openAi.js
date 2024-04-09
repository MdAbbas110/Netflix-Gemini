import { GoogleGenerativeAI } from '@google/generative-ai';
const apiKey = import.meta.env.VITE_OPEN_AI_KEY;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export default genAI;
