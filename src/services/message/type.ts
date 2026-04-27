import { ERole } from "../user/enum";

export type Message = {
  id?: string;
  content: string;
  role: ERole;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type Messages = Message[]