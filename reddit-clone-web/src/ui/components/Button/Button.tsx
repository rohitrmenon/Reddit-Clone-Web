import { styled } from "../../../../stitches.config";

// import "@fontsource/poppins/500.css"

export const Button = styled("button", {
  fontWeight: "600",
  fontStyle: "$normal",
  fontFamily: "Poppins",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0.25rem",
  transition: "background-color 200ms, color 100ms, border 100ms, stroke 100ms",
  gap: "8px",
  "&:active": {
    boxShadow: "0px 0px 0px 4px rgba(78, 70, 180, 0.2)",
    transition: "box-shadow 0.2s ease-in-out",
  },
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        padding: "4px 8px",
        height: "24px",
        width: "fit-content",
        gap: "4px",
      },
      sm: {
        fontSize: "$sm",
        padding: "4px 12px",
        height: "32px",
        width: "fit-content",
        gap: "4px",
      },
      md: {
        fontSize: "$sm",
        padding: "8px 16px ",
        height: "40px",
        width: "fit-content",
        gap: "4px",
      },
      lg: {
        fontSize: "$md",
        padding: "12px 16px",
        height: "48px",
        width: "fit-content",
        gap: "4px",
      },
      xl: {
        fontSize: "$md",
        padding: "16px 24px",
        height: "56px",
        width: "fit-content",
        gap: "4px",
      },
    },

    variant: {
      primary: {
        color: "$surfaceColor",
        stroke: "$primary-button-text-forced-white",
        border: "none",
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$primary-light",
        },
      },
      secondary: {
        backgroundColor: "$accent",
        color: "$surfaceColor",
        border: "none",
        stroke: "$primary-button-text-forced-white",
        "&:hover": {
          backgroundColor: "$accent",
        },
      },
      stroke: {
        color: "$primary-body-text",
        background: "none",
        border: "1px solid $secondary-body-text",
        stroke: "$primary-body-text",
        "&:hover": {
          backgroundColor: "$secondary",
          border: "1px solid $primary-body-text",
        },
      },
      ghost: {
        backgroundColor: "none",
        color: "$secondary-body-text",
        border: "none",
        stroke: "$secondary-body-text",
        "&:hover": {
          backgroundColor: "$secondary",
          color: "$primary-body-text",
          stroke: "$primary-body-text",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
