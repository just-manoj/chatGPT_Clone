import axios from "axios";
import { ChatModal } from "./Modal";

const APIRequest = async (query) => {
  const API_KEY = ``; //Put Your CHATGPT API Key Here

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
      max_tokens: 100,
    }),
  };

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    options.body,
    { headers: options.headers }
  );

  const result = response.data.choices[0].message.content;
  const id = response.data.id;
  return new ChatModal(id, query, result);
};

export default APIRequest;
