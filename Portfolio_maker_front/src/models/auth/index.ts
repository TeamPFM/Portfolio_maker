export  interface AuthRequest {
  email: string;
  name: string;
  password: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export default interface AuthResponse {
  messege: string;
  token: string;
}
