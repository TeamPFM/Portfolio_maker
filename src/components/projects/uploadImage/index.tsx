import {
  FunctionComponent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from "react";
import { ProjectImageResoponse } from "@/models/projects";
import MainButton from "@/styles/ui-components/styled-button";
import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";
import { BiImageAdd } from "react-icons/bi";

interface IProps {
  setProjectImage: Dispatch<SetStateAction<ProjectImageResoponse>>;
  projectImgName?: string;
}

const UploadImage: FunctionComponent<IProps> = (props) => {
  const { setProjectImage, projectImgName } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const { API_UPDATE_PROJECT_IMAGE } = API_PATH;

  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const file = (target.files as FileList)[0];

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("img", file);

    const { data } = await api.post<ProjectImageResoponse>(API_UPDATE_PROJECT_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data) {
      setImageUrl(data.imageName);
      setProjectImage(data);
    }
  };

  const onClickFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <p className={`relative pb-5 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}>
        이미지 첨부
        <button
          type="button"
          className="absolute right-[2px] top-[3px]"
          title="이미지 첨부"
          onClick={onClickFileInput}
        >
          <BiImageAdd className="text-[30px] text-blue-400" />
        </button>
      </p>
      <div
        className="relative w-full h-8 border border-dotted rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500 cursor-pointer"
        onClick={onClickFileInput}
      >
        <label className="flex justify-center items-center h-[100%] text-gray-400 cursor-pointer">
          이미지를 첨부해주세요.
        </label>
        <input
          className="absolute top-0 left-0 hidden"
          type="file"
          accept=".jpg, .jpeg, .png , .gif"
          ref={fileInputRef}
          onChange={onChangeImg}
        />
      </div>
      <div className="relative flex justify-center items-cente py-5 px-4">
        {Image && (
          <>
            <div className="absolute top-4 right-0">
              <MainButton
                type="button"
                onClick={() => {
                  setImageUrl("");
                  return;
                }}
              >
                이미지 취소
              </MainButton>
            </div>
            {imageUrl && (
              <div className="img-preview pt-8">
                <div className="pt-8 w-[500px] h-[500px]">
                  <img
                    className="object-contain w-full h-full"
                    src={`http://pfmback-env-1.eba-cmbywf2u.ap-northeast-2.elasticbeanstalk.com/img/${imageUrl}`}
                    alt="project-img"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UploadImage;
