import React from "react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { useRouter } from "next/navigation";
import {
  Button,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPanel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
} from "@/ui";
import { CaretDown } from "@phosphor-icons/react";
import { useGetData } from "@/hooks/useReactQuery";
import routes from "@/lib/routes";

const HomeDropdown = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const { data } = useGetData(
    `${routes.subreddit.getSubredditByUser()}/${session?.user.id}`,
    session as Session
  );

  return (
    <>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <div>
            <Button variant="stroke">
              Your Communities <CaretDown />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPanel>
          <DropdownMenuGroup>
            <DropdownMenuContent
              css={{ maxHeight: "300px", overflow: "scroll" }}
            >
              {data?.map((subredditData: any) => {
                return (
                  <DropdownMenuItem
                    key={subredditData.id}
                    css={{ cursor: "pointer" }}
                    onClick={() => router.push(`/y/${subredditData?.name}`)}
                  >
                    {`y/${subredditData?.name}`}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenuGroup>
        </DropdownMenuPanel>
      </DropdownMenuRoot>
    </>
  );
};

export default HomeDropdown;
