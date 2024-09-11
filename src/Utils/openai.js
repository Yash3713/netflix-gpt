import OpenAI from "openai";
import { OPENAI_Key } from "./constant";

const openai = new OpenAI({
  apiKey: OPENAI_Key,
});

export default openai;
