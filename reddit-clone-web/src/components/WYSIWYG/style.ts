import { styled } from "../../../stitches.config";

export const EditorContainer = styled("div", {
  width: "100%",
  border: "2px solid $border",
  padding: "15px",
  height:"fit-content"
});

export const WYSIWYGEditor = styled("div", {
  width: "100%",
  border: "1px solid $border",
  borderRadius: "8px",
  padding: "15px",
  minHeight: "300px", // Change height to minHeight
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
