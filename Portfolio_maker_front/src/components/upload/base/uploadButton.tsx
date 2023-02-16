import { InfoButton } from '@/styles/ui-components/styled-button';


interface IProps {
  btnType: '저장' | '취소';
}

const classNameObj = {
  저장: '!bg-blue-400 !text-white',
  취소: '!border-gray-300 !bg-white !text-zinc-800'
};
 
const UploadButton = ({ btnType }: IProps) => {
  return <>{<InfoButton className={`w-full ${classNameObj[btnType]}`}>{btnType}</InfoButton>}</>;
};

export default UploadButton;
