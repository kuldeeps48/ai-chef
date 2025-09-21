import { InferenceClient } from "@huggingface/inference";

const FAILED_MSG = "Try again after a minute!";

async function fetchRecipe(ingredients) {
  try {
    const client = new InferenceClient("hf_***");

    const system =
      "You can only generate a food recipe. You will be provided a list of ingredients. Use them. You may add 2-3 ingredients more if required. You answer should be a valid markdown.";
    const out = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-R1",
      provider: "together",
      messages: [
        { role: "system", content: system },
        { role: "user", content: `Ingredients: ${ingredients}` },
      ],
      max_tokens: 5000,
      temperature: 0.3,
    });

    return removeThinkTags(out.choices[0].message?.content);
  } catch (error) {
    console.error(error);
    return FAILED_MSG;
  }
}

function removeThinkTags(text) {
  const regex = /<think>[\s\S]*?<\/think>/gs;
  return text.replace(regex, "");
}

export { FAILED_MSG, fetchRecipe };
