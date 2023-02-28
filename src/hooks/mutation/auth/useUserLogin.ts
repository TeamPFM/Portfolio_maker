import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";
import AuthResponse, { AuthRequest } from "@/models/auth";

const { API_LOGIN, API_CREATE_BOARD } = API_PATH;

const fetcher = (reqData: AuthRequest) => {
  api
    .post<AuthResponse>(API_LOGIN, reqData)
    .then(({ data }) => {
      // token.setToken("token", data.token);
      // navigate(HOME, { replace: true });
    })
    .catch(console.error);
};

// const useCreateBoardsMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation(postFetch, {
//     onError: (error) => {
//       return error;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries<string>(["board"]);
//     },
//   });
// };

// export default useCreateBoardsMutation;
