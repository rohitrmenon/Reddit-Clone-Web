"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Input } from "@/ui";
interface SlugPageProps {
  params: {
    slug: string;
  };
}
const Page = ({ params: { slug } }: SlugPageProps) => {
  const { data: session } = useSession();
  return (
    <div>
      {slug}
      <Input readOnly placeholder="Create a post" onClick={() => alert("clicked")}></Input>
    </div>
  );
};

export default Page;
