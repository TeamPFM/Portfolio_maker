import { BasicButton } from '@/styles/ui-components/styled-button';
import React from 'react';
import UploadButton from '../base/uploadButton';
import DatePicker from '../datePicker';
import SelectedSkills from '../selectedSkills';
import UploadImage from '../uploadImage';

const WriteForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target)
  };
  return (
    <section className="w-full bg-warmGray-100 flex flex-col p-[1.8rem]">
      <div className="w-auto flex justify-center">
        <div className="max-w-3xl py-7 w-7/12">
          <div className="p-5 gap-5 w-full flex flex-col rounded bg-white">
            <header className='py-4'>
              <span className="text-[20px] font-normal">프로젝트</span>
            </header>
            <div className="write-form">
              <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                <div className="project-info w-full pb-5 gap-3 flex">
                  <div className="flex-1 project-title">
                    <p
                      className={`pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}
                    >
                      프로젝트명
                    </p>
                    <input
                      className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
                      type="text"
                      name="pname"
                      placeholder="프로젝트명을 입력해주세요."
                      required
                    />
                  </div>
                  <div className="flex-1 personnel">
                    <p
                      className={`pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}
                    >
                      맡은 역할
                    </p>
                    <input
                      className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
                      name="personnel"
                      type="number"
                      placeholder="맡은 역할을 입력해주세요."
                      onChange={(evt) => {
                        const newregisterEmail =
                          Number(evt.target.value) >= 0 ? evt.target.value : 0;
                        console.log(newregisterEmail);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="date-picker pb-5">
                  <DatePicker />
                </div>
                <div className="upload-image pb-5">
                  <UploadImage />
                </div>
                <div className="desc pb-5">
                  <p
                    className={`pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}
                  >
                    프로젝트 설명
                  </p>
                  <textarea
                    className={`border w-full h-[200px] resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-gray-500`}
                    name="personnel"
                    placeholder="프로젝트에 대한 설명을 입력해주세요."
                    required
                  />
                </div>
                <div className='selected_skills '>
                  <SelectedSkills />
                </div>
                <div className="btn-group w-full flex py-5 gap-3">
                  <div className="flex-1">
                    <UploadButton btnType="취소" />
                  </div>
                  <div className="flex-1">
                    <UploadButton btnType="저장" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteForm;
