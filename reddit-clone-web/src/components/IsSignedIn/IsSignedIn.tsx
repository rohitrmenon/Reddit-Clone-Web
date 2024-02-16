import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import {
  Avatar,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPanel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuContent,
} from "@/ui";
import { Bell, SignOut } from "@phosphor-icons/react";
import HomeDropdown from "./HomeDropdown";
interface Props {
  username: string;
  name: string;
}

const IsSignedIn = (props: Props) => {
  const { username, name } = props;
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <HomeDropdown />
      <Bell size={24} />
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <div>
            <Avatar
              size="md"
              alt={name}
              badgePosition="top-right"
              badgeStatus="online"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPanel>
          <DropdownMenuGroup>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>{name} </div>{" "}
                  <div style={{ fontSize: "12px", color: "#999CA0" }}>
                    {username}{" "}
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">Feed</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings"> Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => {
                  signOut({ callbackUrl: '/', redirect:true });
                }}
              >
                <div>Sign Out</div>
                <SignOut size={24} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuGroup>
        </DropdownMenuPanel>
      </DropdownMenuRoot>
    </div>
  );
};

export default IsSignedIn;
