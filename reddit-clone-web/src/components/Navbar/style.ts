import { styled } from "../../../stitches.config";

export const NavbarStyle = styled("div", {
  color: "black",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",  
  margin: "auto",
  border:"$accent",
  padding: "$3",
  zIndex: 10,
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  width: "1100px",
});

export const NavbarContainer = styled("div", {
  position:"fixed",  
  width: "100%",
  background: "$surfaceColor",
  boxShadow:"$boxShadow$sm",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const NavTextMain = styled("div", {
  border: "1px solid $border",
  padding: "10px",
  background: "$primary-body-text",
  color: "$surfaceColor",
  boxShadow:"$boxShadow$sm",
});
