import React, { useEffect, useRef, MouseEvent, FormEvent } from "react";
import UploadButton from "@/components/projectWrite/base/uploadButton";
import useUpdateProjectMutation from "@/hooks/mutation/project/useUpdateProjectMutation";
import ProjectResponse from "@/models/projects";

interface IProps {
  project: ProjectResponse;
  setIsEditMode: (isEditMode: boolean) => void;
}

const UpdateItem = ({ setIsEditMode, project }: IProps) => {
  const { id, name, description, link } = project;
  const projectNameRef = useRef<HTMLInputElement | null>(null);
  const projectDescRef = useRef<HTMLTextAreaElement | null>(null);
  const projectLinkRef = useRef<HTMLInputElement | null>(null);
  const mutation = useUpdateProjectMutation();

  useEffect(() => {
    if (projectNameRef.current && projectDescRef.current && projectLinkRef.current) {
      projectNameRef.current.value = name;
      projectDescRef.current.value = description;
      projectLinkRef.current.value = link;
    }
  }, []);

  const onEditProject = (e: FormEvent<HTMLFormElement>) => {
    // 수정 로직 작성
    e.preventDefault();
    if (projectNameRef.current && projectDescRef.current && projectLinkRef.current) {
      const updateData = {
        name: projectNameRef.current.value,
        description: projectDescRef.current.value,
        link: projectLinkRef.current.value,
      };
      mutation.mutate({ id, ...updateData });
      setTimeout(() => {
        setIsEditMode(false);
      }, 100);
    }
  };

  return (
    <form onSubmit={onEditProject}>
      {/* 수정 */}
      <div className="py-2">
        <input
          className={`border w-[95%] h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
          type="text"
          name="pname"
          placeholder="프로젝트명을 입력해주세요."
          ref={projectNameRef}
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
          ref={projectDescRef}
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
          ref={projectLinkRef}
          required
        />
      </div>
      <div className="btn-group w-full flex py-5 gap-3">
        <div className="flex-1">
          <UploadButton
            btnType="취소"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              if (window.confirm("취소하면 수정하신 내용이 삭제됩니다.\n그래도 취소하실건가요?")) {
                setIsEditMode(false);
              } else {
                return;
              }
            }}
          />
        </div>
        <div className="flex-1">
          <UploadButton btnType="저장" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default React.memo(UpdateItem);
