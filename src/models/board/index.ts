import { UserInfoGetResponse } from "@/models/myinfo";
export default interface BoardResponse {
  id: number;
  title: string;
  userId: string;
  date: string;
  createdAt: string;
  deletedAt?: string;
  users: UserInfoGetResponse;
}
