import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  MouseEvent,
  KeyboardEvent,
  Dispatch,
} from "react";

import { SkillsProps } from "@/models/myinfo";

interface IProps {
  strSkills: string;
  setStrSkills: Dispatch<React.SetStateAction<string>>;
  initSkills: string[];
}

const SelectedSkills = (props: IProps) => {
  const { strSkills, setStrSkills, initSkills } = props;
  const [skills, setSkills] = useState<string[]>([...initSkills]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClickSkills = (
    e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    if (!inputRef.current) {
      return;
    }

    setSkills([...skills, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
      onClickSkills(e);
    }
  };

  useEffect(() => {
    !skills[0] && setSkills([...initSkills]);
  }, [initSkills]);

  useEffect(() => {
    setStrSkills(skills + "");
  }, [skills]);

  return (
    <div className="mb-8">
      <fieldset className={`w-full flex items-center mb-5`}>
        <label className={`basis-32 font-semibold`} htmlFor="">
          Skills
        </label>
        <input
          onKeyDown={onKeyDown}
          className={`border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2`}
          type="text"
          name="skills"
          ref={inputRef}
          autoComplete="off"
          placeholder="사용 기술을 입력하고 Enter 해주세요"
        />
      </fieldset>

      <div className="skills flex flex-wrap gap-3 pb-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center px-3 py-2 rounded-md bg-main text-white cursor-pointer"
            onClick={() => {
              setSkills(skills.filter((v) => v !== skill));
            }}
          >
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default React.memo(SelectedSkills);
