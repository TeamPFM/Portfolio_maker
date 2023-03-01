export interface SkillsProps {
  id: number;
  name: string;
}

export interface UserInfoGetResponse {
  about: string;
  createdAt?: string;
  deletedAt?: string;
  email: string;
  id: number;
  imageName: string;
  imagePath: string;
  link: string;
  name: string;
  phone: string;
  updatedAt?: string;
  skills?: { id: number, name: string }[]
}

export interface UserInfoUpdateRequest {
  name: string;
  phone: string;
  link: string;
  about: string;
  skill: string;
}

export interface UserInfoUpdateResponse {
  status: number;
  success: boolean;
}

export interface UserInfoImageResoponse {
  url: string;
}

export interface UserInfoImageUpdateResponse {
  status: number;
  success: boolean;
}
