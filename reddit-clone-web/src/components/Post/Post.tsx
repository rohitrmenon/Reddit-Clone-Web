import React from "react";
import { PostContainer } from "./style";

interface PostProps {
  title: string;
}
const Post = ({ title }: PostProps) => {
  return <PostContainer>{title}</PostContainer>;
};

export default Post;
