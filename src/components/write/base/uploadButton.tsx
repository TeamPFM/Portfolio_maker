import { BasicButton } from '@/styles/ui-components/styled-button';
import { MouseEvent } from 'react';


interface IProps {
  btnType: '저장' | '취소';
  type?: "button" | "submit" | "reset",
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const classNameObj = {
  저장: '!h-full !bg-blue-400 !text-white !border-none',
  취소: '!border-gray-300 !bg-white !text-zinc-800'
};
 
const UploadButton = ({ btnType, type = 'button', onClick }: IProps) => {
  return <>{<BasicButton type={type} onClick={onClick} className={`w-full ${classNameObj[btnType]}`}>{btnType}</BasicButton>}</>;
};

export default UploadButton;
