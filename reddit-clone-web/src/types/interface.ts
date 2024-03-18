interface IUser {
  id: string;
  email: string;
  name: string;
  username: string;
  password: string;
  image: string;
}

interface ISubReddit {
  id: string;
  name: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
}

interface IBlockData {
  data: {
    text: string;
  };
}
interface IContent {
  time: number;
  blocks: IBlockData[];
  version: string;
}

interface IPost {
  id: string;
  title: string;
  content: IContent;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  subredditId: string;
  author: IUser;
  subreddit: ISubReddit;
  comments: any[];
  postVotes: any[];
}

export type { IPost };
