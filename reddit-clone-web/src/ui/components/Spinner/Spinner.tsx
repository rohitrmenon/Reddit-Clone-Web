import { styled, keyframes } from "../../../../stitches.config";

type SizeVariant = "2xs" | "xs" | "sm" | "md" | "lg";
interface SpinnerProps {
  size?: SizeVariant;
}
export const Spinner = ({ size = "md" }: SpinnerProps) => (
  <StyledSpinner size={size} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const rotateKeyframes = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});

const dashKeyframes = keyframes({
  "0%": {
    strokeDasharray: "1, 150",
    strokeDashoffset: 0,
  },
  "50%": {
    strokeDasharray: "90, 150",
    strokeDashoffset: -35,
  },
  "100%": {
    strokeDasharray: "90, 150",
    strokeDashoffset: -124,
  },
});

const StyledSpinner = styled("svg", {
  animation: `${rotateKeyframes} 1s linear infinite`,
  margin: "40px",
  variants: {
    size: {
      "2xs": {
        width: "16px",
        height: "16px",
      },
      xs: {
        width: "24px",
        height: "24px",
      },
      sm: {
        width: "32px",
        height: "32px",
      },
      md: {
        width: "40px",
        height: "40px",
      },
      lg: {
        width: "48px",
        height: "48px",
      },
    },
  },

  "& .path": {
    stroke: "$accent",
    strokeLinecap: "round",
    animation: `${dashKeyframes} 1.5s ease-in-out infinite`,
  },

  defaultVariants: {
    size: "md",
  },
});