import { useState, useRef, MouseEvent, KeyboardEvent } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';

const SelectedSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickSkills = (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
    if (inputRef.current) {
      if (inputRef.current.value !== '') {
        setSkills([...skills, inputRef.current.value]);
        inputRef.current.value = '';
      }
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      onClickSkills(e);
    }
  };

  return (
    <>
      <p className={`relative pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}>
        사용된 기술
        <button
          onClick={onClickSkills}
          type="button"
          className="absolute right-[2px] cursor-pointer"
        >
          <AiFillPlusSquare className="text-blue-400 text-[30px]" />
        </button>
      </p>
      <div className="skills flex flex-wrap gap-3 pb-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="">
            <span>{skill}</span>
          </div>
        ))}
      </div>
      <input
        onKeyDown={onKeyDown}
        className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
        type="text"
        name="skills"
        ref={inputRef}
        autoComplete="off"
        placeholder="프로젝트에 사용된 기술을 추가해주세요."
      />
    </>
  );
};

export default SelectedSkills;
