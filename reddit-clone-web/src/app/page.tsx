"use client"
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

export default function Home() {

  return (
    <main>
      <HomeContainer>
        <FeedContainer></FeedContainer>
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
