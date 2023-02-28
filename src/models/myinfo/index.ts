export interface SkillsProps {
  id: number;
  name: string;
}

export interface UserInfoGetResponse {
  id: number;
  email: string;
  name: string;
  about: string;
  link: string;
  phone: string;
  skills: SkillsProps[];
  imagePath: string;
  imageName: string;
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
