import React from "react";
import { Story, storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Button, { ButtonSize, ButtonType } from "./button";

const styles: React.CSSProperties = {
  textAlign: "center",
};

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

const defaultButton = () => (
  <Button onClick={action("clicked")}>default button</Button>
);

const buttonWithSize = () => (
  <>
    <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
      large Button
    </Button>
  </>
);

storiesOf("Button Component", module)
.addDecorator(withInfo)
.addParameters({
  info:{
    text:`
      ## 这是个好组件
    `,
    inline:false
  }
})
  .addDecorator(CenterDecorator)
  .add("默认 Button", defaultButton)
  .add("大", buttonWithSize);

// Button.stories.tsx

// const Template: Story<any> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Primary',
// };

// export const Primary: React.VFC<{}> = () => <Button btnType={ButtonType.Danger}>Button</Button>
