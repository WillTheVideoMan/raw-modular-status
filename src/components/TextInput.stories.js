import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextInput from "./TextInput";

export const textInput = {
  value: "",
  placeHolder: "Type Here"
};

export const actions = {
  handleChange: action("handleChange")
};

storiesOf("TextInput", module).add("default", () => (
  <TextInput
    value={textInput.value}
    placeHolder={textInput.placeHolder}
    handleChange={actions.handleChange}
  />
));
