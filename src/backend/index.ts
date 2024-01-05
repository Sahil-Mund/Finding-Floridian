import axios from "axios";
import { CHAT_AI_RESPONSE } from "../api";

export const getAIRepsonse = async (message: string) => {
  try {
    const response = await axios.post(CHAT_AI_RESPONSE, {
      prompt: message,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
