import React from "react";
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

interface Props {
  username: string;
  signOut: () => void;
}
const IsSignedIn = ({ username, signOut }: Props) => {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <div>
            <Avatar
              size="md"
              alt={username}
              badgePosition="top-right"
              badgeStatus="online"
              variant="square"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPanel>
          <DropdownMenuGroup>
            <DropdownMenuContent>
              <DropdownMenuItem
                onSelect={() => console.log("Profile Settings")}
              >
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => console.log("Create Community")}
              >
                Create Community
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => signOut()}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuGroup>
        </DropdownMenuPanel>
      </DropdownMenuRoot>
    </div>
  );
};

export default IsSignedIn;
