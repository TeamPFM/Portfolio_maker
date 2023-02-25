import { useState, useEffect, Dispatch } from "react";
import { UserInfoGetResponse } from "@/models/myinfo";
import SideMenu from "@/components/myinfo/SideMenu";
import InfoContent from "@/components/myinfo/InfoContent";
import api from "@/libs/axios/api";

export interface MyInfoProps {
  contentType: string;
  setContentType: Dispatch<React.SetStateAction<string>>;
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
  const [contentType, setContentType] = useState<string>("내 정보");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await api
      .get("api/users/info")
      .then((res) => {
        setUserInfo(res.data);
        console.log(userInfo);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full h-full p-5 bg-gray-50">
      <div className="flex w-full h-full max-w-[1400px] mx-auto">
        <SideMenu
          contentType={contentType}
          setContentType={setContentType}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <InfoContent
          contentType={contentType}
          setContentType={setContentType}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </div>
    </div>
  );
};

export default MyInfoPage;
