import OpenAI from 'openai';
import { openAIKey } from '../constants';

const openai = new OpenAI({
  apiKey: openAIKey,
  dangerouslyAllowBrowser: true
});
const getGPTSearch = async({content}:any)=>{
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: content }],
      model: 'gpt-3.5-turbo',
    });
    console.log(content, chatCompletion)
    // return chatCompletion;
  }
  
export default getGPTSearch   
