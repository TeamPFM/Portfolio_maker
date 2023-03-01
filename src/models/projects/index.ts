export default interface ProjectResponse {
  id: number;
  name: string;
  description: string;
  link: string;
  imageName?: "";
  imagePath?: "";
}

export interface ProjectImageResoponse {
  imageName: "";
  imagePath: "";
}
