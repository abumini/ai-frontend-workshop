import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

/*
  You are a naming consultant for new companies.
  What is a good name for a company that makes colorful socks?
*/
const llm = new OpenAI({
  openAIApiKey: import.meta.env.VITE_OPENAI_KEY,
  temperature: 1, // Can be between 0 and 1
  modelName: "gpt-3.5-turbo", // Default. Other options: https://platform.openai.com/docs/models/
  maxTokens: 20, // length of response, tokens !== characters
});

export async function generateAnswer(
  question: string,
  promptTemplate: string = "Take the role of a personal travel assistant, and answer the following question in detail: {question}?",
) {
  let answer = "";

  const prompt = PromptTemplate.fromTemplate(promptTemplate);

  const formattedPrompt = await prompt.format({
    question,
  });

  try {
    answer = await llm.invoke(formattedPrompt);
  } catch (e) {
    return "Something went wrong";
  }

  return answer;
}
