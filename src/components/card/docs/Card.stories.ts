import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Card from "..";
import docs from "./Card.mdx";
import Cardocs from "./CarCard.mdx";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    title: { control: "text" },
  },
  parameters: {
    // docs: {
    //   page: docs,
    // },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// const Template = (args: any) => <Card {...args} />;

export const CarCard: Story = {
  args: {
    title: "Car Card",
    description: "This is a car card",
    isSold: true,
  },
  parameters: {
    // docs: {
    //   page: Cardocs,
    //   storyDescription: "This is the documentation for the Car Card variant",
    // },
  },
};
export const PersonCard: Story = {
  args: {
    title: "Person Card",
    description: "This is a person card",
    image: "https://picsum.photos/200/300",
    imageAlt: "A random image",
    imageHeight: 300,
    imageWidth: 200,
    isImageRounded: true,
  },
  parameters: {
    docs: {
      page: docs,
      storyDescription: "This is the documentation for the Car Card variant",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElem = await canvas.getByRole("button", {
      name: /Read more/i,
    });
    await userEvent.click(buttonElem);
    expect(buttonElem).to.have.text("Read less");
  },
};
