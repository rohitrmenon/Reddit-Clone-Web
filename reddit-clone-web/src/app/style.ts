import { styled } from "../../stitches.config";

export const HomeContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 350px",
  gap: "20px",
  height: "auto",
  marginTop: "$2",
});

export const FeedContainer = styled("div", {
  padding: "$2",
});

export const CreateCommunityCard = styled("div", {
  padding: "$2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  background: "$surfaceColor",
  boxShadow: "$boxShadow$sm",
});

export const HomeDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "4px",
  padding: "$2",
});

export const HomeMainText = styled("div", {
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  gap:"$1"
})

export const HomeTextDiv = styled("div", {
  fontSize: "$sm",
  color: "$secondary-body-text",
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  gap: "1rem",
});
