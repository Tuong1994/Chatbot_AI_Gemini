import { NextPage } from "next";
import InputPrompt from "@/components/page/InputPrompt";
import ToolCategories from "@/features/Home/ToolCategories";
import PageLayout from "@/components/page/PageLayout";
import withLocale from "@/lib/withLocale";

const Home: NextPage = () => {
  return (
    <PageLayout footer={<InputPrompt />}>
      <ToolCategories />
    </PageLayout>
  );
};

export default withLocale(Home);
