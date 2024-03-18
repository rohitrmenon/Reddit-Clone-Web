import React, { useEffect, useState } from "react";

import { IPost } from "@/types/interface";
import {
  ArrowFatUp,
  ArrowFatDown,
  ChatCenteredText,
} from "@phosphor-icons/react";
import dateFormatter from "@/lib/dateFormatter";
import {
  PostActionsDiv,
  PostActionsVoteDiv,
  PostCommentContainer,
  PostContainer,
  PostDetailsDiv,
  PostHeadingDiv,
  PostHeadingDivCreatedAt,
  PostHeadingDivSubredditName,
  PostTitle,
  PostVotesCount,
} from "./style";
import Link from "next/link";
import { useVoteGet, useVoteUpdate } from "@/hooks/useVote";
import { useSession } from "next-auth/react";
interface PostProps {
  post: IPost;
  votesAmount: number;
  currentVote: any;
  onClick?: () => void;
}

enum VoteType {
  UP = "UP",
  DOWN = "DOWN",
}

const Post = ({ post, onClick, votesAmount, currentVote }: PostProps) => {
  const { data: session } = useSession();

  const [isHoveredUpvote, setIsHoveredUpVote] = useState<boolean>(false);
  const [isHoveredDownvote, setIsHoveredDownvote] = useState<boolean>(false);
  const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
  const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);

  const [voteType, setVoteType] = useState<VoteType>(currentVote?.type);
  const [votes, setVotes] = useState(votesAmount);

  const { mutateAsync, data } = useVoteUpdate(
    session?.user.id as string,
    post.id,
    voteType
  );
  useEffect(() => {
    if (!!voteType) {
      if (voteType === VoteType.UP) setIsUpvoteClicked(true);
      if (voteType === VoteType.DOWN) setIsDownvoteClicked(true);
    }
  }, [voteType]);

  useEffect(() => {
    if (data && typeof data.votesCount !== 'undefined') {
      setVotes(data.votesCount);
    }
  }, [data]);

  const handleUpVoteClick = async () => {
    setIsUpvoteClicked(!isUpvoteClicked);
    isDownvoteClicked && setIsDownvoteClicked(false);
    setVoteType(VoteType.UP);
    mutateAsync();
  };

  const handleDownVoteClick = async () => {
    setIsDownvoteClicked(!isDownvoteClicked);
    isUpvoteClicked && setIsUpvoteClicked(false);
    setVoteType(VoteType.DOWN);
    mutateAsync();
  };
  return (
    <PostContainer onClick={onClick}>
      <PostHeadingDiv>
        <PostHeadingDivSubredditName>
          <Link href={`/y/${post.subreddit.name}`}>
            y/{post.subreddit.name}
          </Link>
        </PostHeadingDivSubredditName>
        <h3>&#11825;</h3>
        <PostHeadingDivCreatedAt>
          Posted by u/{post.author.name} on {dateFormatter(post.createdAt)}
        </PostHeadingDivCreatedAt>
      </PostHeadingDiv>
      <PostDetailsDiv>
        <PostTitle>{post.title}</PostTitle>
        <PostDetailsDiv>{post.content.blocks[0]?.data.text}</PostDetailsDiv>
      </PostDetailsDiv>
      <PostActionsDiv>
        <PostActionsVoteDiv>
          <ArrowFatUp
            style={{ cursor: "pointer" }}
            size={18}
            weight={
              isUpvoteClicked ? "fill" : isHoveredUpvote ? "bold" : "duotone"
            }
            color={
              isUpvoteClicked
                ? "#FFB319"
                : isHoveredUpvote
                  ? "#FFB319"
                  : "#0000008f"
            }
            onMouseEnter={() => {
              setIsHoveredUpVote(true);
            }}
            onMouseLeave={() => {
              setIsHoveredUpVote(false);
            }}
            onClick={() => {
              handleUpVoteClick();
            }}
          />
          <PostVotesCount>{votes}</PostVotesCount>
          <ArrowFatDown
            style={{ cursor: "pointer" }}
            size={18}
            weight={
              isDownvoteClicked
                ? "fill"
                : isHoveredDownvote
                  ? "bold"
                  : "duotone"
            }
            color={
              isDownvoteClicked ? "red" : isHoveredDownvote ? "red" : "#999CA0"
            }
            onMouseEnter={() => {
              setIsHoveredDownvote(true);
            }}
            onMouseLeave={() => {
              setIsHoveredDownvote(false);
            }}
            onClick={() => {
              handleDownVoteClick();
            }}
          />
        </PostActionsVoteDiv>
        <PostCommentContainer>
          <ChatCenteredText size={18} />
          {post.comments.length}
        </PostCommentContainer>
      </PostActionsDiv>
    </PostContainer>
  );
};
export default Post;
