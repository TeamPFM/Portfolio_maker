import Path from "@/utils/routes/Path";

import MainButton from "@/styles/ui-components/styled-button";
import { FaUserCircle } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const BeforeBar: string =
  "before:content-['|'] before:text-gray-300 before:text-xs before:pr-2";
const BottomLinkStyle: string = `hover:text-gray-500 transition-all px-1`;

const menuList: Array<string> = ["내 정보", "이력서"];
const bottomMenuList: Array<string> = ["홈", "로그아웃"];

const SideMenu = (props: { contentType: string; setContentType: Function }) => {
  const { HOME } = Path;

  return (
    <div className="basis-80 py-20 relative rounded-xl bg-white shadow-lg mr-5">
      <figure className="flex flex-col justify-center items-center relative">
        <div className="relative bg-gray-300 shadow-lg rounded-full p-[1px]">
          <FaUserCircle className="text-[120px] text-white" />

          <button className="absolute bottom-[4px] right-[4px] flex justify-center items-center rounded-full w-8 h-8 bg-indigo-300 hover:bg-indigo-400 transition-all border-white border-2">
            <MdModeEditOutline className="text-white text-lg" />
          </button>
        </div>

        <figcaption className="flex flex-col items-center justify-cente mt-4">
          <h3 className="text-xl font-bold">권순성</h3>
          <small className="text-gray-400">tnstjd120@gmail.com</small>
        </figcaption>
      </figure>

      <ul className="flex flex-col flex-1 mt-20">
        {menuList.map((v) => (
          <li className="border-b-[1px]">
            <button
              className={`${
                props.contentType === v && "text-indigo-400"
              } w-full text-left py-3 px-7 text-gray-600 hover:bg-gray-50 transition-all`}
              onClick={() => props.setContentType(v)}
            >
              {v}
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-4 right-5 text-gray-400 text-sm">
        {bottomMenuList.map((v, idx) => (
          <Link to={HOME} className={`${idx && BeforeBar} ${BottomLinkStyle}`}>
            {v}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
