export interface UserInfoGetResponse {
  id: number;
  email: string;
  name: string;
  about: string;
  link: string;
  phone: string;
  imagePath: string;
  imageName: string;
}

export interface UserInfoUpdateRequest {
  // name: string;
  phone: string;
  link: string;
  about: string;
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
