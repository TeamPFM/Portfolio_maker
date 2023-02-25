import { MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadButton from "@/components/write/base/uploadButton";
import ProjectResponse from "@/models/projects";

interface IProps {
  id: number;
  setIsEditMode: (isEditMode: boolean) => void;
  // onEditProject: (id: number, data:ProjectResponse) => void;
}

const UpdateItem = ({ setIsEditMode, id }: IProps) => {
  const onEditProject = (e: MouseEvent<HTMLButtonElement>) => {
    // 수정 로직 작성
    
  };
  
  console.log({updateTarget: id})

  return (
    <>
      {/* 수정 */}
      <div className="py-2">
        <input
          className={`border w-[95%] h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
          type="text"
          name="pname"
          placeholder="프로젝트명을 입력해주세요."
          required
        />
      </div>
      <div className="py-2">
        <div className="pb-3">
          <span className="text-[20px] font-semibold">설명</span>
        </div>
        <textarea
          className={`border w-[95%] h-[200px] resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-gray-500`}
          name="pdesc"
          placeholder="프로젝트에 대한 설명을 입력해주세요."
          required
        />
      </div>
      <div className="py-2">
        <div className="pb-3">
          <span className="text-[20px] font-semibold">관련 링크</span>
        </div>
        <input
          className={`border w-[95%] h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
          type="text"
          name="pname"
          placeholder="프로젝트명을 입력해주세요."
          required
        />
      </div>
      <div className="btn-group w-full flex py-5 gap-3">
        <div className="flex-1">
          <UploadButton
            btnType="취소"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              setIsEditMode(false);
            }}
          />
        </div>
        <div className="flex-1">
          <UploadButton btnType="저장" type="submit" onClick={onEditProject} />
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
