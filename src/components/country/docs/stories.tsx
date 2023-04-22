import continueWatchingButtonReadMe from "./Introduction.mdx";

import type { Meta, StoryObj } from "@storybook/react";
import SomeDoc from "./somedoc.mdx";
import ChildDoc from "./childdoc.mdx";
import Country from "../../Country";

const meta = {
  title: "Components/Country",
  component: Country,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      page: SomeDoc,
    },
    // additionalStories: [
    //   {
    //     story: "ChildButton",
    //     component: ChildButton,
    //     parameters: {
    //       docs: {
    //         page: ChildDoc,
    //       },
    //     },
    //   },
    // ],
  },
} satisfies Meta<typeof Country>;

export default meta;
type Story = StoryObj<typeof meta>;

export const newCountry = () => {
  return (
    <div className="gel-wrap" style={{ paddingTop: 15 }}>
      <div>Parent</div>
    </div>
  );
};

export const ChildButton = () => {
  return (
    <div className="gel-wrap" style={{ paddingTop: 15 }}>
      <div>child</div>
    </div>
  );
};

export const ChildButton1: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};
