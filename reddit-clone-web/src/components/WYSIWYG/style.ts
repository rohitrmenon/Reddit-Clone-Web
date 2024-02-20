import { styled } from "../../../stitches.config";

export const WYSIWYGEditorContainer = styled("div", {
  width: "100%",
  border: "1px solid $border",
  padding: "15px",
});

export const TextArea = styled("textarea", {
  fontFamily: "Poppins",
  width: "100%",
  height: "50px",
  resize: "none",
  border: "1px solid $border",
  borderRadius: "8px",
  padding: "15px",
  "&:focus": {
    outline: "2px solid $primary",
  },
});
