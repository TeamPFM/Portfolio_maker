import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import usersResponse from "@/models/users";

interface IProps {
  about?: string;
}

const AboutMe = ({ about }: IProps) => {
  return (
    <>
      <div className="border-l-4 border-l-slate-400 border-b border-b-gray-200 px-3 py-2">
        <span className="text-xl font-semibold">About me</span>
      </div>
      {about ? (
        <div className="flex pt-8 w-full">
          <div className="flex justify-center items-center relative py-8 px-8 w-full bg-white shadow-lg rounded-lg overflow-y-auto">
            <p className="text-xl font-sans">{about}</p>
          </div>
        </div>
      ) : (
        <div className="flex pt-8 w-full">
          <div className="flex justify-center items-center relative py-8 px-8 w-full bg-white shadow-lg rounded-lg">
            <p className="text-lg text-coolGray-500 font-bold ">소개글을 작성해주세요!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
