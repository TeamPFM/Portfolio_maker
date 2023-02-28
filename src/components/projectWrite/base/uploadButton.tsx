import { SubButton } from '@/styles/ui-components/styled-button';
import { MouseEvent } from 'react';


interface IProps {
  btnType: '저장' | '취소';
  type?: "button" | "submit" | "reset",
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const classNameObj = {
  저장: '',
  취소: '!border-gray-300 !bg-white !text-zinc-800'
};
 
const UploadButton = ({ btnType, type = 'button', onClick }: IProps) => {
  return <>{<SubButton type={type} onClick={onClick} className={`w-full font-bold ${classNameObj[btnType]}`}>{btnType}</SubButton>}</>;
};

export default UploadButton;
