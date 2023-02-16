import React, { ChangeEvent, useRef, useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const UploadImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState('');

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const file = (target.files as FileList)[0];

    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('loadend', (e: ProgressEvent<FileReader>) => {
      console.log(e.target?.result)
      setImage(e.target?.result as string);
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
        <label className="flex justify-center items-center h-[100%] text-gray-400">
          이미지를 첨부해주세요.
        </label>
        <input
          className="absolute top-0 left-0 hidden"
          type="file"
          ref={fileInputRef}
          onChange={onChangeImg}
        />
        <div></div>
      </div>
    </>
  );
};

export default UploadImage;
