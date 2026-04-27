import { NextPage } from "next";
import Messages from "@/features/Conversation/Messages";
import PageLayout from "@/components/page/PageLayout";
import InputPrompt from "@/components/page/InputPrompt";
import withLocale from "@/lib/withLocale";

const ConversationPage: NextPage = async () => {
  return (
    <PageLayout footer={<InputPrompt />}>
      <Messages />
    </PageLayout>
  );
};

export default withLocale(ConversationPage);
