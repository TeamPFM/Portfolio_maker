import usersResponse from "@/models/users";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IProps {
  users: usersResponse | null;
}

const ProfileMe = ({ users }: IProps) => {
  return (
    <>
      <div>
        <div className="border-l-4 border-l-slate-400 border-b border-b-gray-200 px-3 py-2">
          <span className="text-xl font-semibold">{"이동현"}'s Resume</span>
        </div>
        {users ? (
          <div className="px-5 py-8">
            <div className="flex w-full">
              <figure className="flex-1 profile-img flex flex-col justify-center items-center relative">
                <div className="relative flex justify-center items-center w-[122px] h-[122px] bg-gray-300 shadow-lg rounded-full p-[1px]">
                  {users?.imagePath ? (
                    <div className="h-full w-full rounded-full overflow-hidden">
                      <img src={users?.imagePath} alt="" />
                    </div>
                  ) : (
                    <FaUserCircle className="text-[120px] text-white" />
                  )}
                </div>
                <figcaption className="flex flex-col items-center justify-cente mt-4">
                  <h3 className="text-xl font-bold">이동현</h3>
                </figcaption>
              </figure>
              <section className="about flex-[3] px-1 py-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <div>
                      <span className="text-2xl font-semibold">Contact</span>
                    </div>
                    <div>
                      <p className="text-2xl">Email: {"aaa@naver.com"}</p>
                      <p className="text-2xl">Phone: {"010-1234-5678"}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="text-2xl font-semibold">Link</span>
                    </div>
                    <Link to={"https://github.com/donghyunami"} target="_blank">
                      <span className="text-2xl">{"깃헙 링크"}</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <div className="flex justify-center items-center relative py-8 px-8 w-full h-40 bg-white shadow-lg rounded-lg">
              <p className="text-lg text-coolGray-500 font-bold ">내 정보를 작성해주세요!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileMe;
