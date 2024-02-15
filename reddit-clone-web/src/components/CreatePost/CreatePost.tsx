import React from "react";
import Link from "next/link";
import type { Session } from "next-auth";
import { Avatar, Input } from "@/ui";
import { ImageSquare, Link as CreateLink } from "@phosphor-icons/react";
import { AvatarDiv, CreatePostDiv } from "./style";
interface CreatePostProps {
  session: Session | null;
}
const CreatePost = ({ session }: CreatePostProps) => {
  const name = session?.user?.name as string;

  return (
    <CreatePostDiv>
      <AvatarDiv>
        <Avatar
          size="md"
          alt={name}
          badgePosition="top-right"
          badgeStatus="online"
        />
      </AvatarDiv>
      <Input readOnly placeholder="Create a post" />
      <Link href="">
        <ImageSquare size={24} />
      </Link>
      <Link href="">
        <CreateLink size={24} />
      </Link>
    </CreatePostDiv>
  );
};

export default CreatePost;
