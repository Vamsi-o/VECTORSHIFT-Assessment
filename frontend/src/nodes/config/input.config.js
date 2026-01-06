import { Position } from "reactflow";

export const inputConfig = {
  label: "Input",

  handles: [
    {
      type: "source",
      position: Position.Right,
      id: (id) => `${id}-value`,
    },
  ],

  fields: [
    {
      name: "inputName",
      label: "Name:",
      type: "text",
      defaultValue: (id) => id.replace("customInput-", "input_"),
    },
    {
      name: "inputType",
      label: "Type:",
      type: "select",
      options: ["Text", "File"],
      defaultValue: "Text",
    },

    {
      name: "required",
      label: "Required:",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
