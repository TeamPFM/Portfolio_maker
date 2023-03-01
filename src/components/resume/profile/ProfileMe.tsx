import usersResponse from "@/models/users";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface INew extends usersResponse {
  skills?: {id: number, name: string}[];
}

interface IProps {
  users: INew;
}

const ProfileMe = ({ users }: IProps) => {
  return (
    <>
      <div className="w-full bg-gray-800 text-white rounded-t-lg shadow-lg">
        <div className="p-5 bg-gray-800 border-solid rounded-t-lg">
          <span className="text-xl font-semibold">{users?.name}'s Resume</span>
        </div>
        {users ? (
          <div className="bg-white text-black flex">
            <div className="w-full flex justify-center items-center relative py-8 px-8 w-ful">
              <figure className="flex-1 profile-img flex flex-col justify-center items-center relative">
                <div className="relative flex justify-center items-center w-[122px] h-[122px] bg-gray-300 shadow-lg rounded-full p-[1px]">
                  {users?.imagePath ? (
                    <div className="h-full w-full rounded-full overflow-hidden">
                      <img src={`http://pfmback-env-1.eba-cmbywf2u.ap-northeast-2.elasticbeanstalk.com/img/${users?.imagePath}`} alt="" />
                    </div>
                  ) : (
                    <FaUserCircle className="text-[120px] text-white" />
                  )}
                </div>
                <figcaption className="flex flex-col items-center justify-cente mt-4">
                  <h3 className="text-xl font-bold">{users?.name}</h3>
                </figcaption>
              </figure>
              <section className="profile flex-[4] pl-[60px]">
                <div className="flex flex-col gap-9">
                  <div>
                    <div>
                      <span className="text-2xl font-semibold">Contact</span>
                    </div>
                    <div>
                      <p className="text-xl">Email: {users?.email || "미지정"}</p>
                      <p className="text-xl">Phone: {users?.phone || "미지정"}</p>
                    </div>
                  </div>
                  <div className="skills flex flex-wrap gap-3 pb-3">
                    {
                      users && (!users.skills?.length && (<div>미지정</div>))
                    }
                    {users &&
                      users.skills?.map(({id, name}) => (
                        <div key={id} className="flex justify-center items-center px-3 py-2 rounded-md bg-main text-white cursor-pointer">
                           <span>{name}</span>
                        </div>
                      ))}
                  </div>
                  <div>
                    <div>
                      <span className="text-xl font-semibold">Link</span>
                    </div>
                    <Link to={users?.link} target={users?.link && "_blank"}>
                      <span className="text-xl">{users?.link || "미지정"}</span>
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
