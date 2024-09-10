import { Dispatch, SetStateAction } from "react";

interface IPostData {
  id: string;
  userName: string;
  profileImage: string;
  images: string[];
  contents: string;
  hashtags: string;
  created_at: string;
  comments: ICommentData[];
  likes: ILikeData[];
}

interface ICommentData extends ILikeData {
  contents: string;
  likes: ILikeData[];
}

interface ILikeData {
  userName: string;
  profileImage: string;
}

interface IOpenCommentsModal {
  isOpenCommentsModal: boolean;
  setIsOpenCommentsModal: Dispatch<SetStateAction<boolean>>;
}

export type { IPostData, ICommentData, ILikeData, IOpenCommentsModal };
