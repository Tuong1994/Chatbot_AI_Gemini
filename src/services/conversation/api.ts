import { AiPayload } from "./type";
import { BASE_URL } from "../helpers";
import promptApiPaths from "./path";

export const onStreamChat = async (data: AiPayload) => {
  const response = await fetch(`${BASE_URL}${promptApiPaths.chat}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response
};
