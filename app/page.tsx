import type { Metadata } from "next";
import Main from "./Main";

const Page = () => {
  return <Main />;
};

export const metadata: Metadata = {
  title: "thunderous crayfish bus",
  description: "내 버스는 언제오나?",
};

export default Page;
