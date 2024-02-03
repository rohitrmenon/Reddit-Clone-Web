import React, { ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { keyframes,styled } from "../../../../stitches.config";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const RadixBannerContent = styled(AlertDialog.Content, {
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  // top: "15%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  maxHeight: "85vh",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  borderRadius: "10px",
  // width: "768px",
  minWidth: "fit-content",
  "@xs": {
    width: "fit-content",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
  },
  "@sm": {
    width: "300px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
  },
  "@md": {
    width: "450px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "row",
  },
  "@lg": {
    width: "728px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "row",
  },
  "@xl": {
    width: "728px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "row",
  },
});

const BannerTitle = styled(AlertDialog.Title, {
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "14px",
  margin: 0,
  lineHeight: "24px",
});

const BannerDescription = styled(AlertDialog.Description, {
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "14px",
  margin: 0,
  color: "$secondary-body-text",
  lineHeight: "24px",
});

const ContentDiv = styled("div", {
  flex: "1",
  display: "flex",
  flexDirection: "column",
});

const ActionDiv = styled("div", {
  display: "flex",
  alignItems: "center",
});

const BannerButtonAction = styled("div", {
  padding: "8px ",
});

const BannerIconAction = styled("div", {
  fontSize: "24px",
  color: "#007bff",
  cursor: "pointer",
  marginBottom: "23px",
});

const BannerTrigger = styled(AlertDialog.Trigger);
const Banner = styled(AlertDialog.Root);
const BannerCancel = styled(AlertDialog.Cancel);

type BannerProps = {
  title: string;
  description: string;
  actionType: "button" | "icon";
  action: ReactNode[];
} & React.ComponentProps<typeof AlertDialog.Content>;

function BannerContent({
  title,
  description,
  actionType,
  action,
  className,
  ...props
}: BannerProps) {
  return (
    <AlertDialog.Portal>
      <RadixBannerContent className={className} {...props}>
        <ContentDiv>
          <BannerTitle>{title}</BannerTitle>
          <BannerDescription>{description}</BannerDescription>
        </ContentDiv>
        <ActionDiv>
          {actionType === "button" && action.length > 0
            ? action.map((action, index) => (
                <BannerButtonAction key={index}>{action}</BannerButtonAction>
              ))
            : actionType === "icon" && (
                <BannerIconAction>{action}</BannerIconAction>
              )}
        </ActionDiv>
      </RadixBannerContent>
    </AlertDialog.Portal>
  );
}

BannerContent.displayName = AlertDialog.Content.displayName;

export { Banner, BannerTrigger, BannerContent, BannerCancel };