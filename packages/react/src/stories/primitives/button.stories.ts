import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/primitives/button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
    },
    size: {
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
