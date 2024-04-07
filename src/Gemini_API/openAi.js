import { GoogleGenerativeAI } from '@google/generative-ai';
import { OPEN_AI_KEY } from '../utils/constants';

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);

export default genAI;
