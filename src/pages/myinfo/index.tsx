import { useState } from "react";
import SideMenu from "@/components/myinfo/SideMenu";
import InfoContent from "@/components/myinfo/InfoContent";

const MyInfoPage = () => {
  const [contentType, setContentType] = useState<string>("내 정보");

  return (
    <div className="w-full h-full p-5  bg-gray-50">
      <div className="flex w-full h-full max-w-[1400px] mx-auto">
        <SideMenu contentType={contentType} setContentType={setContentType} />
        <InfoContent contentType={contentType} />
      </div>
    </div>
  );
};

export default MyInfoPage;
