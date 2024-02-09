import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import { styled,keyframes } from "../../../../stitches.config";
import { Header } from "../Header";
import { Footer } from "../Footer";


const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const ModalOverlayStyles = {
  backgroundColor: "black",
  opacity: 0.5,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} cubic-bezier(0.16, 1, 0.3, 1)`,
};

const IconButton = styled(Dialog.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 24,
  width: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  "&:hover": { backgroundColor: "$border" },
  "&:focus": { boxShadow: `0 0 0 2px $border` },
});

const RadixModalContainerStyles = {
  fontFamily: "Poppins",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "47rem",
  maxHeight: "85vh",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  overflow: "none",
  display: "flex",
  flexDirection: "column",
  minWidth: "fit-content",
  "@xs": {
    width: "300px",
  },
  "@sm": {
    width: "450px",
  },
  "@md": {
    width: "740px",
  },
  "@lg": {
    width: "768px",
  },
};

const ModalContentStyles = {
  padding: "1.5rem",
};

const ModalTitleStyle = {
  fontWeight: "600",
  fontSize: "$xl",
  margin: 0,
};

const ModalPortal = styled(Dialog.Portal);
const ModalOverlay = styled(Dialog.Overlay, ModalOverlayStyles);
const RadixModalContainer = styled(Dialog.Content, RadixModalContainerStyles);

const ModalContent = styled("div", ModalContentStyles);
const ModalClose = styled(Dialog.Close, {
  backgroundColor: "none",
  border: "none",
});
const ModalTrigger = styled(Dialog.Trigger);
const Modal = styled(Dialog.Root);

function ModalContainer({ children }: { children: React.ReactNode }) {
  return (
    <ModalPortal>
      <ModalOverlay />
      <RadixModalContainer>{children}</RadixModalContainer>
    </ModalPortal>
  );
}

function ModalHeader({ title }: { title?: string }) {
  function DialogClose() {
    return (
      <ModalClose asChild>
        <X />
      </ModalClose>
    );
  }
  return (
    <div
      style={{
        height: "4rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Header title={title} divider iconsRight={[{ Icon: DialogClose }]} />
      </div>
    </div>
  );
}

const ModalFooter = styled(Footer);

export {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
};