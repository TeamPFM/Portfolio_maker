import { BasicButton } from "@/styles/ui-components/styled-button";
import Path from "@/utils/path/routes";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface IProps {
  path: string;
  text: string;
  className?: string
}

const PlusBtn = ({ path, text, className }: IProps) => {
  const navigate = useNavigate();

  const baseStyleClasses = 'add-btn w-[153px] p-2 bg-white text-black absolute top-[15px] right-[9px]';
  return (
    <div
    className={`${baseStyleClasses} ${className ?? ""}`}
    >
      <BasicButton
        onClick={() => {
          navigate(path, { replace: false });
        }}
      >
        <AiOutlinePlus size={12} />
      </BasicButton>
      <span
        className="hover:text-gray-500 cursor-pointer px-2"
        onClick={() => {
          navigate(path, { replace: false });
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default PlusBtn;
