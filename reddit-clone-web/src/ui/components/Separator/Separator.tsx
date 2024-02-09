import * as Separator from "@radix-ui/react-separator";
import { styled } from "../../../../stitches.config";

export const Separation = styled(Separator.Root, {
  margin: "0.5rem 0",
  backgroundColor: "#EBEBEB",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});
