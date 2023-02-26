import MainButton from "@/styles/ui-components/styled-button";
import { ChangeEvent, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";

// interface IProps  {
//   setProjectImageUrl: 
// }
const UploadImage = (setProjectImageUrl: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectImage, setProjectImage] = useState("");

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const file = (target.files as FileList)[0];

    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend", (e: ProgressEvent<FileReader>) => {
      console.log(e.target?.result);
      setProjectImage(e.target?.result as string);
    });
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
          accept=".jpg, .jpeg, .png"
          ref={fileInputRef}
          onChange={onChangeImg}
        />
      </div>
      <div className="relative flex justify-center items-cente py-5 px-4">
        {projectImage && (
          <>
            <div className="absolute top-4 right-0">
              <MainButton
                type="button"
                onClick={() => {
                  setProjectImage("");
                  return;
                }}
              >
                이미지 취소
              </MainButton>
            </div>
            <div className="img-preview pt-8">
              <div className="w-[150px]">
              <img src={projectImage} alt="project-img" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UploadImage;
