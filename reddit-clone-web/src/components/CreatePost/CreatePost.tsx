import React from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Session } from "next-auth";
import { Avatar, Button, Input } from "@/ui";
import { ImageSquare, Link as CreateLink } from "@phosphor-icons/react/dist/ssr";
import { AvatarDiv, CreatePostDiv } from "./style";
interface CreatePostProps {
  session: Session | null;
}
const CreatePost = ({ session }: CreatePostProps) => {
  const name = session?.user?.name as string;

  const router = useRouter();

  const pathname = usePathname();

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
      <Input
        readOnly
        placeholder="Create a post"
        onClick={() => router.push(pathname + "/submit")}
      />
      <Button variant="ghost" onClick={() => router.push(pathname + "/submit")}>
        <ImageSquare size={24} />
      </Button>
      <Button variant="ghost" onClick={() => router.push(pathname + "/submit")}>
        <CreateLink size={24} />
      </Button>
    </CreatePostDiv>
  );
};

export default CreatePost;
