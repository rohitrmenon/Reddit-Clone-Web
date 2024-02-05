import { styled, keyframes } from "../../../../stitches.config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const PortalStyle = {};
const contentStyles = {
  fontFamily: "Poppins",
  backgroundColor: "white",
  borderRadius: 12,
  padding: "8px 4px",
  width: "304px",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const itemStyles = {
  all: "unset",
  fontSize: "#md",
  color: "black",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  height: "30px",
  padding: "8px",
  position: "relative",
  paddingLeft: 10,
  userSelect: "none",
  marginTop: "1px",

  "&[data-disabled]": {
    color: "red",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$background",
    color: "black",
  },
};

const labelStyle = {
  position: "relative",
  fontSize: "$md",
  display: "flex",
  justifyContent: "center",
  alightItems: "center",
};

export const DropdownMenuRoot = styled(DropdownMenu.Root);
export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {});
export const DropdownMenuPanel = styled(DropdownMenu.Portal, PortalStyle);
export const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
export const DropdownMenuLabel = styled(DropdownMenu.Label, labelStyle);
export const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator);
export const DropdownMenuGroup = styled(DropdownMenu.Group);
export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem);
export const DropdownMenuRadioGroup = styled(DropdownMenu.RadioGroup);
export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, itemStyles);
export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: "1px",
  backgroundColor: "$border",
  margin: 5,
});
