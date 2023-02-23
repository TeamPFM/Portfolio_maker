import { FunctionComponent } from "react";

interface IProps {
  title: string;
  inputType: string;
  inputName: string;
  className: string;
  essentialMark?: string;
  required?: boolean;
}

const RowForm = (props: IProps) => {
  const {
    title,
    inputType,
    inputName,
    className,
    essentialMark = "",
    required,
  } = props;

  return (
    <div className={`w-full flex items-center ${className}`}>
      <label
        className={`${essentialMark} basis-32 font-semibold`}
        htmlFor={inputName}
      >
        {title}
      </label>
      <input
        className="border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
        type={inputType}
        name={inputName}
        id={inputName}
        required={required}
      />
    </div>
  );
};

export default RowForm;
