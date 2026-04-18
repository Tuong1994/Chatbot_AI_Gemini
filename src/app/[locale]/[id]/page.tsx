import { NextPage } from "next";
import ChatForm from "@/features/Detail/ChatForm";
import withLocale from "@/lib/withLocale";
import PageLayout from "@/components/page/PageLayout";

const ChatPage: NextPage = () => {
 
  return (
    <>
      <ChatForm />
    </>
  );
};

export default withLocale(ChatPage);
