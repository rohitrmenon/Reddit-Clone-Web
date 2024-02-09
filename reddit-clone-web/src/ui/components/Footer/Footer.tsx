import { styled } from "../../../../stitches.config";
import React from "react";

const FooterBase = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    size: {
      sm: {
        fontSize: "14px",
        padding: "12px",
      },
      md: {
        fontSize: "16px",
        padding: "24px",
      },
    },
    variant: {
      buttonLeftRight: {
        flexDirection: "row",
      },
      buttonOnlyLeft: {
        justifyContent: "flex-start",
      },
      buttonOnlyRight: {
        justifyContent: "flex-end",
      },
    },
    divider: {
      true: {
        borderTop: "1px solid $border",
      },
    },
  },
});

const ButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

type FooterProps = {
  size?: "sm" | "md";
  variant?: "buttonLeftRight" | "buttonOnlyLeft" | "buttonOnlyRight";
  divider?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftButtons?: React.ReactNode[];
  rightButtons?: React.ReactNode[];
};

const Footer: React.FC<FooterProps> = ({
  size = "md",
  variant = "buttonLeftRight",
  divider,
  leftContent,
  rightContent,
  leftButtons,
  rightButtons,
}) => {
  return (
    <FooterBase size={size} variant={variant} divider={divider}>
      {variant.includes("Left") && (
        <div>
          {leftButtons && <ButtonWrapper>{leftButtons}</ButtonWrapper>}
          {leftContent}
        </div>
      )}
      {variant.includes("Right") && (
        <div>
          {rightContent}
          {rightButtons && <ButtonWrapper>{rightButtons}</ButtonWrapper>}
        </div>
      )}
    </FooterBase>
  );
};

export { Footer };
