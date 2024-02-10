"use client";

import { Button, Separation } from "@/ui";
import { House } from "@phosphor-icons/react";
import {
  ButtonsContainer,
  CreateCommunityCard,
  FeedContainer,
  HomeContainer,
  HomeDiv,
  HomeMainText,
  HomeTextDiv,
} from "./style";
import CreateCommunityModal from "@/components/CreateCommunityModal/CreateCommunityModal";
import { useGetData } from "@/hooks/useReactQuery";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  const { data, error, isLoading } = useGetData(
    session as Session,
    `http://localhost:8080/api/users/${session?.user?.id}`
  );
  return (
    <main>
      <HomeContainer>
        <FeedContainer>{data}</FeedContainer>
        <CreateCommunityCard>
          <HomeDiv>
            <HomeMainText>
              <House />
              Home
            </HomeMainText>
            <HomeTextDiv>
              Your personal Yorokobi frontpage. Come here to check in with your
              favorite communities.
            </HomeTextDiv>
          </HomeDiv>
          <Separation />
          <ButtonsContainer>
            <Button>Create Post</Button>
            <CreateCommunityModal />
          </ButtonsContainer>
        </CreateCommunityCard>
      </HomeContainer>
    </main>
  );
}
