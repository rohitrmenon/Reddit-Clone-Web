import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { styled,keyframes } from "../../../../stitches.config";

const VIEWPORT_PADDING = 25;

const SnackbarViewport = styled(RadixToast.Viewport, {
  position: "fixed",
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  minwidth: 344,
  maxWidth: 381,
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
});

export const SnackbarProvider = styled(RadixToast.Provider);

const SnackbarRoot = styled(RadixToast.Root, {
  fontFamily: "Poppins",

  minWidth: "312px",
  width: "fit-content",
  padding: "0.75rem 1rem",
  backgroundColor: "white",
  borderRadius: 8,
  display: "flex",
  gap: "1rem",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
  alignItems: "center",
  justifyContent: "space-between",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },

  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

// export const SnackbarTitle = styled(RadixToast.Title, {
//   gridArea: "title",
//   marginBottom: 5,
//   fontWeight: 500,
//   color: slate.slate12,
//   fontSize: 15,
//   border: "1px solid red",
// });

const SnackbarDescription = styled(RadixToast.Description, {
  flexGrow: 1,
  margin: 0,
  fontWeight: "400",
  fontSize: "$sm",
  lineHeight: "1.5rem",
});
export const SnackbarAction = styled(RadixToast.Action, {});

const SnackbarLabels = styled("div", {
  display: "flex",
  gap: "0.25rem",
  alignItems: "center",
});

interface SnackbarProps {
  description: string;
  open: boolean;
  duration?: number;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
}

export function Snackbar({
  description,
  open,
  duration = 3000,
  children,
  onOpenChange,
  ...props
}: SnackbarProps) {
  return (
    <>
      <SnackbarRoot
        open={open}
        onOpenChange={onOpenChange}
        duration={duration}
        {...props}
      >
        <SnackbarDescription>{description}</SnackbarDescription>
        <SnackbarLabels>{children}</SnackbarLabels>
      </SnackbarRoot>
      <SnackbarViewport />
    </>
  );
}