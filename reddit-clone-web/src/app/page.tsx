"use client";
import { Button, Separation } from "@/ui";
import { House } from "@phosphor-icons/react/dist/ssr";
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
import Feed from "@/components/Feed/Feed";

export default function Home() {
  return (
    <HomeContainer>
      <FeedContainer>
        <h1>Your Feed</h1>
        <Feed />
      </FeedContainer>
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
  );
}
