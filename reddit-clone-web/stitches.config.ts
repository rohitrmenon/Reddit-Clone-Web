import { createStitches } from "@stitches/react";

import "@fontsource/poppins";

export const { styled, css, theme, getCssText, keyframes, globalCss } =
  createStitches({
    theme: {
      colors: {
        primary: "rgb(56.8, 136, 169.6)",
        "primary-light": "#47AAD4",
        secondary: "#00000014",
        accent: "#66D2B8",
        border: "#EBEBEB",
        background: "#F5F5F5",
        surfaceColor: "#FFFFFF",
        backdrop: "#0000008f",
        "primary-button-text-forced-white": "#FFFFFF",
        "primary-body-text": "#000000",
        "secondary-body-text": "#999CA0",
        "secondary-button-text-forced-black": "#FFFFFF",
        "secondary-hover": "#47aad40a",
        orange: "#FFB319",
        cherry: "#D33030",
        "rich-pink": "#FF4E64",
        limegreen: "#4AD15F",
        "teal-green": "#95F1D5",
        "light-brown": "#D33030",
        blue: "#3448F0",
        purple: "#5C33CF",
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px",
      },
      fontSizes: {
        "3xs": "0.563rem",
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
        "6xl": "4rem",
        "7xl": "4.5rem",
      },
      fonts: {
        untitled: "Poppins, apple-system, sans-serif",
        mono: "Poppins, menlo, monospace",
      },
      fontWeights: {
        regular: "400",
        heading: "500",
        "semi-bold": "500",
        bold: "600",
      },
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      boxShadow: {
        sm: "0px 6px 6px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
        md: "0px 12px 12px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
        lg: "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
        xl: "0px 32px 32px -8px rgba(0, 0, 0, 0.08), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.2)",
        "dark-sm":
          "0px 6px 6px -6px rgba(0, 0, 0, 0.3), 0px 0px 1px rgba(0, 0, 0, 0.5)",
        "dark-mg":
          "0px 12px 12px -6px rgba(0, 0, 0, 0.3), 0px 0px 1px rgba(0, 0, 0, 0.5)",
        "dark-lg":
          "0px 24px 24px -6px rgba(0, 0, 0, 0.3), 0px 0px 1px rgba(0, 0, 0, 0.3)",
        "dark-xl":
          "0px 48px 48px -6px rgba(0, 0, 0, 0.3), 0px 0px 1px rgba(0, 0, 0, 0.72)",
      },
      zIndices: {},
      transitions: {},
    },
    media: {
      xs: "(320px <= width <480px)",
      sm: "(480px <=width <768px)",
      md: "(768px <= width <1024px)",
      lg: "(1024px <=width <1201px)",
      xl: "(1201px <=width)",
    },
  });
  const GlobalStyles = globalCss({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    html: {
      overflowX: "hidden",
      marginRight: "calc(-1 * (100vw - 100%))",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
    body: {
      background: "$background",
      fontFamily: "Poppins",
    },
  });
  
  

GlobalStyles();
