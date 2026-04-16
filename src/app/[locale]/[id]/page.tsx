import { NextPage } from "next";
import ChatForm from "@/features/Detail/ChatForm";
import withLocale from "@/lib/withLocale";

const ChatPage: NextPage = () => {
 
  return (
    <>
      <ChatForm />
    </>
  );
};

export default withLocale(ChatPage);
