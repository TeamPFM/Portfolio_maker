import { UserInfoGetResponse } from "@/models/myinfo";

export interface CommentProps {
  id: number;
  users: any;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BoardInfoGetResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  comments: CommentProps[];
  users: UserInfoGetResponse;
}

export interface CommentCreateRequest {
  boardId: string;
  content: string | null;
}

export interface StatusResponse {
  status: number;
  success: boolean;
}
