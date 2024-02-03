
import React, { useState, forwardRef } from "react";
import { styled } from "../../../../stitches.config";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "number" | "email";
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  title?: string;
  hintText?: string;
  value?: number | string;
  onChange?: (e: any) => void;
  Size?: "md" | "lg" | "xl";
}

const LeftIconWrapper = styled("div", {});

const InputBase = styled("input", {
  fontFamily: "Poppins",
  padding: "12px 16px",
  outline: "1px solid $border",
  borderRadius: "8px",
  width: "100%",
  border: "none",
  boxSizing: "border-box",
  [` ${LeftIconWrapper} ~ &`]: {
    paddingLeft: "2rem",
  },
  variants: {
    inputState: {
      error: {
        outline: "2px solid red",
      },
      normal: {},
    },
    inputSize: {
      md: {
        padding: "8px 16px",
      },
      lg: {
        padding: "12px 16px",
      },
      xl: {
        padding: "16px 16px",
      },
    },
  },
  "&:focus": {
    border: "none",
    outline: "2px solid $primary",
  },
  defaultVariants: {
    inputState: "normal",
  },
});

const NumberInputContainer = styled("div", {
  position: "relative",
  display: "flex",
  boxSizing: "border-box",
});

const NumberInputBase = styled("input", {
  ...InputBase,
  paddingRight: "40px",
  appearance: "none",
});

const InputContainer = styled("div", {
  margin: "0.25rem",
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
});

const Button = styled("button", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  height: "50%",
  background: "none",
  border: "none",
  cursor: "pointer",
  variants: {
    position: {
      top: {
        top: 0,
        right: 0,
        transform: "translateY(0)",
      },
      bottom: {
        bottom: 0,
        right: 0,
        transform: "translateY(0)",
      },
    },
  },
});

const Title = styled("div", {
  fontFamily: "Poppins",
  fontSize: "1rem",
  fontWeight: "$regular",
  lineHeight: "1.5rem",
  color: "$primary-body-text",
  marginBottom: "0.5rem",
  variants: {
    disabled: {
      true: {
        opacity: "0.5",
      },
      false: {},
    },
  },
});

const HintText = styled("div", {
  fontFamily: "Poppins",
  fontSize: "0.75rem",
  fontWeight: "$regular",
  lineHeight: "1rem",
  color: "$secondary-body-text",
  marginTop: "0.5rem",
  padding: "0 12px",
  variants: {
    disabled: {
      true: {
        pointerEvents: "none",
        cursor: "not-allowed",
      },
      false: {},
    },
    inputState: {
      error: {
        color: "red",
      },
      normal: {},
    },
  },
});

const ArrowIcon = styled("span", {
  fontSize: "12px",
});

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    error,
    title,
    hintText,
    Size,
    leftIcon,
    rightIcon,
    style,
    className,
    ...restProps
  } = props;
  const state = error ? "error" : "normal";
  const [showPassword, setShowPassword] = useState(false);
  const [numberValue, setNumberValue] = useState<number | string>(0);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleNumberChange = (value: number | string) => {
    setNumberValue(value);
  };

  return (
    <>
      <InputContainer style={style} className={className}>
        {title && <Title>{title}</Title>}
        {type === "password" ? (
          <NumberInputContainer>
            {leftIcon && (
              <LeftIconWrapper
                style={{
                  position: "absolute",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                {leftIcon}
              </LeftIconWrapper>
            )}
            <InputBase
              ref={ref}
              type={showPassword ? "text" : "password"}
              {...restProps} // Use restProps here
              inputState={state}
              inputSize={Size}
            />
          </NumberInputContainer>
        ) : type === "email" ? (
          <NumberInputContainer>
            {leftIcon && (
              <LeftIconWrapper
                style={{
                  position: "absolute",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                {leftIcon}
              </LeftIconWrapper>
            )}
            <InputBase
              ref={ref}
              type={type}
              {...restProps}
              inputState={state}
              inputSize={Size}
            />
          </NumberInputContainer>
        ) : type === "number" ? (
          <NumberInputContainer>
            {leftIcon && (
              <LeftIconWrapper
                style={{
                  position: "absolute",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                {leftIcon}
              </LeftIconWrapper>
            )}
            <NumberInputBase
              ref={ref}
              type="text"
              value={numberValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue)) {
                  handleNumberChange(inputValue);
                }
              }}
              {...restProps}
              inputState={state}
              inputSize={Size}
            />
            <Button
              className="top"
              type="button"
              position="top"
              onClick={() => handleNumberChange(Number(numberValue) + 1)}
              css={{
                borderTopRightRadius: "8px",
                "&:hover": { backgroundColor: "$secondary" },
              }}
            >
              <ArrowIcon css={{}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.625 7.6875L6 4.3125L9.375 7.6875"
                    stroke="#999CA0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ArrowIcon>
            </Button>
            <Button
              type="button"
              className="bottom"
              position="bottom"
              onClick={() => handleNumberChange(Number(numberValue) - 1)}
              css={{
                borderBottomRightRadius: "8px",
                "&:hover": { backgroundColor: "$secondary" },
              }}
            >
              <ArrowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.375 4.3125L6 7.6875L2.625 4.3125"
                    stroke="#999CA0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ArrowIcon>
            </Button>
          </NumberInputContainer>
        ) : (
          <NumberInputContainer>
            {leftIcon && (
              <LeftIconWrapper
                style={{
                  position: "absolute",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                {leftIcon}
              </LeftIconWrapper>
            )}
            <InputBase
              ref={ref}
              type={type}
              {...restProps}
              inputState={state}
              inputSize={Size}
            />
          </NumberInputContainer>
        )}
        {type === "password" && (
          <Button
            onClick={(e) => {
              togglePasswordVisibility();
              e.preventDefault();
            }}
            css={{
              marginRight: "0.1rem",
              fontFamily: "Poppins",
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              "&:hover": { backgroundColor: "none" },
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        )}
        {(hintText || error) && (
          <HintText inputState={state}>{error ? error : hintText}</HintText>
        )}
      </InputContainer>
    </>
  );
});

Input.displayName = "Input";

export { Input, Title, HintText };