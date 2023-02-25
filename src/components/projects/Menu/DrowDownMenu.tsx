import { DefaultButton } from "@/styles/ui-components/styled-button";
import React, { useState } from "react";
import { MdEdit, MdMoreVert, MdOutlineDeleteOutline } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface IProps {
  id?: number;
  onRemoveProject: (id?: number) => void;
  onEditProject: (id?: number) => void;
}

const DrowDownMenu = ({ id, onRemoveProject, onEditProject }: IProps) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <DefaultButton
        className="bg-white"
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        <MdMoreVert />
      </DefaultButton>
      {isVisible && (
        <ul className="w-[110px] absolute top-10 left-0 shadow-lg rounded">
          <li className="p-2 hover:bg-slate-300 active:bg-default-active">
            <Link to="" className="flex justify-center items-center gap-3 text-lg">
              <span className="text-2xl text-gray-700">
                <MdOutlineDeleteOutline />
              </span>
              <span
                className="text-base"
                onClick={() => {
                  console.log({ id });
                  onRemoveProject(id);
                }}
              >
                삭제
              </span>
            </Link>
          </li>
          <li className="p-2 hover:bg-slate-300 active:bg-default-active">
            <Link to="" className="flex justify-center items-center gap-3 text-lg">
              <span className="text-2xl text-gray-700">
                <MdEdit />
              </span>
              <span className="text-base">수정</span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default DrowDownMenu;
