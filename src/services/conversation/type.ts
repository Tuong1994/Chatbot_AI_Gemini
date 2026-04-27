import { Message } from "../message/type";

export type AiPayload = {
  prompt: string;
};

export type Conversation = {
  id?: string;
  title: string;
  messages: Message[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type Conversations = Conversation[]