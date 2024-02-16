import { styled } from "../../../../stitches.config";

export const SubredditContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 350px",
  gap: "20px",
  height: "auto",
  marginTop: "$2",
});

export const SubredditInfoCard = styled("div", {
  padding: "$2",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "$surfaceColor",
  boxShadow: "$boxShadow$sm",
});

export const SubredditInfoDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "4px",
  padding: "$2",
  width: "100%",
});

export const SubredditInfoContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AboutText = styled("h4", {
  color: "$secondary-body-text",
});

export const CreatedAtText = styled("h5", {
  color: "$primary-light",
});

export const SubscribersCount = styled("h5", {
  color: "$backdrop",
});
