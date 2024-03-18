import { styled } from "../../../stitches.config";

export const PostContainer = styled("div", {
  width: "100%",
  minHeight: "100px",
  maxHeight: "fit-content",
  border: "1px solid $border",
  padding: "$3",
  marginTop: "$3",
  boxShadow: "$boxShadow$sm",
  display: "flex",
  flexDirection: "column",
});

export const PostHeadingDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  alignSelf: "baseline",
});

export const PostHeadingDivSubredditName = styled("p", {
  fontSize: "$sm",
  textDecoration: "underline",
});

export const PostHeadingDivCreatedAt = styled("p", {
  fontSize: "$xs",
  color: "$backdrop",
});

export const PostDetailsDiv = styled("div", {
  marginTop: "$2",
  display: "flex",
  flexDirection: "column",
});

export const PostTitle = styled("p", {
  fontSize: "$2xl",
});

export const PostActionsDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  height: "32px",
  marginTop: "$2",
});
export const PostActionsVoteDiv = styled("div", {
  width: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid $border",
  borderRadius: "8px",
  padding: "$1",
  background: "$border",
});

export const PostVotesCount = styled("p", {
  fontSize: "$xs",
});

export const PostCommentContainer = styled("div", {
  fontSize: "$xs",
  padding: "$1",
  display: "flex",
  gap: "$1",
  "&:hover": {
    cursor: "pointer",
    background: "$border",
    borderRadius: "8px",
  },
});
