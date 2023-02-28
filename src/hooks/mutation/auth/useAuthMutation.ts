import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";
import AuthResponse, { LoginRequest } from "@/models/auth";
import token from "@/libs/token";
import { AUTH_KEY } from "@/components/constants/key";

const { API_LOGIN, API_SIGNUP } = API_PATH;

// 로그인
const loginFetcher = (reqData: LoginRequest) => {
  return api
    .post<AuthResponse>(API_LOGIN, reqData)
    .then(({ data }) => {
      token.setToken("token", data.token);
    })
    .catch(console.error);
};

export const useUserLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(loginFetcher, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([AUTH_KEY]);
    },
  });
};

// 회원가입
const signupFetcher = (reqData: LoginRequest) => {
  return api
    .post<AuthResponse>(API_SIGNUP, reqData)
    .then(({ data }) => data)
    .catch(console.error);
};

export const useUserSignupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(signupFetcher, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([AUTH_KEY]);
    },
  });
};
