const API_PATH = {
  // User
  API_LOGIN: "/api/user/login",
  API_SIGNUP: "/api/user",

  // MyInfo
  API_GET_USER_INFO: "/api/users/info",
  API_UPDATE_USER_INFO: "/api/users/update",
  API_CREATE_PROFILE_IMAGE: "/api/users/img",
  API_UPDATE_PROFILE_IMAGE: "/api/users/img/update",

  // Projects
  API_CREATE_PROJECT: "/api/projects",
  API_GET_PROJECT: "/api/projects?user-id=",
  API_PUT_PROJECT: "/api/projects/",
  API_DELETE_PROJECT: "/api/projects/",
};

Object.freeze(API_PATH);

export default API_PATH;
