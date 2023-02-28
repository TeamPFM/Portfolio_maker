import { useState, useEffect, Dispatch } from "react";
import { UserInfoGetResponse } from "@/models/myinfo";
import SideMenu from "@/components/myinfo/SideMenu";
import InfoContent from "@/components/myinfo/InfoContent";
import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";

export interface MyInfoProps {
  userInfo: UserInfoGetResponse;
  setUserInfo: Dispatch<React.SetStateAction<UserInfoGetResponse>>;
}

const MyInfoPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoGetResponse>({
    id: 0,
    email: "",
    name: "",
    about: "",
    link: "",
    phone: "",
    imagePath: "",
    imageName: "",
  });
  const { API_GET_USER_INFO } = API_PATH;

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await api
      .get(API_GET_USER_INFO)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full h-full p-5">
      <div className="flex w-full h-full max-w-[1400px] mx-auto">
        <SideMenu userInfo={userInfo} setUserInfo={setUserInfo} />
        <InfoContent userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
    </div>
  );
};

export default MyInfoPage;
