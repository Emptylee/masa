import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, {
  ButtonSize,
  ButtonType,
  BaseButtonProps,
} from "../components/Button/button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} >asxas</Button>;

export const Primary = Template.bind({});
Primary.args = {
  size: ButtonSize.Large,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Buttonwqwqww',
// };
