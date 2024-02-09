import { IconProps } from "@phosphor-icons/react";
import React from "react";
import { styled } from "../../../../stitches.config";

const HeaderBase = styled("div", {
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
  width: "100%",
  borderBottom: "none",
  flexDirection: "row",
  variants: {
    divider: {
      true: {
        borderBottom: "1px solid $border",
      },
    },
    iconPosition: {
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
    },
  },
});

const Title = styled("div", {
  fontSize: "1.25rem",
  margin: 0,
});

const IconWrapper = styled("div", {
  display: "flex",
  gap: "8px",
});

type HeaderProps = {
  title?: string;
  iconsLeft?: {
    Icon: React.ComponentType<IconProps> | React.ReactElement;
    onClick?: () => void;
  }[];
  iconsRight?: {
    Icon: React.ComponentType<IconProps> | React.ReactElement;
    onClick?: () => void;
  }[];
  divider?: boolean;
  iconPosition?: "left" | "right";
};

const Header: React.FC<HeaderProps> = ({
  title,
  iconsLeft,
  iconsRight,
  divider,
  iconPosition,
}) => {
  return (
    <HeaderBase divider={divider} iconPosition={iconPosition}>
      {iconsLeft && (
        <IconWrapper>
          {iconsLeft.map((icon, index) =>
            React.isValidElement(icon.Icon) ? (
              <React.Fragment key={index}>{icon.Icon}</React.Fragment>
            ) : (
              //@ts-ignore
              <icon.Icon key={index} size={16} onClick={icon.onClick} />
            )
          )}
        </IconWrapper>
      )}
      {title && <Title>{title}</Title>}
      {iconsRight && (
        <IconWrapper>
          {iconsRight.map((icon, index) =>
            React.isValidElement(icon.Icon) ? (
              <React.Fragment key={index}>{icon.Icon}</React.Fragment>
            ) : (
              //@ts-ignore
              <icon.Icon key={index} size={16} onClick={icon.onClick} />
            )
          )}
        </IconWrapper>
      )}
    </HeaderBase>
  );
};

export { Header };
