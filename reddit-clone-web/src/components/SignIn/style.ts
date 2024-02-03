import { styled } from "../../../stitches.config";

export const SignInDiv = styled("div", {
    border:"1px solid $border",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    gap: "10px",
    width: "500px",
    padding: "50px",
    margin: "auto",
    marginTop: "100px",
    background: "$surfaceColor",
    "@media (max-width: 480px)": {
        width: "300px",
    },
   
})