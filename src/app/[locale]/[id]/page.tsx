import { NextPage } from "next";
import ChatForm from "@/features/Detail/ChatForm";
import PageLayout from "@/components/page/PageLayout";
import InputPrompt from "@/components/page/InputPrompt";
import withLocale from "@/lib/withLocale";

const ChatPage: NextPage = () => {
  return (
    <PageLayout footer={<InputPrompt />}>
      <ChatForm />
    </PageLayout>
  );
};

export default withLocale(ChatPage);
