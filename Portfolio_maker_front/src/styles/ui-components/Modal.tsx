import { CommonDivProps } from "@/utils/common-props";
import { FunctionComponent } from "react";
import ReactModal from "react-modal";

export interface ModalProps extends Omit<ReactModal.Props, "style"> {
  isOpen: boolean;
  style?: React.CSSProperties;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
  const {
    isOpen,
    children,
    className,
    style: reactStyle,
    ...restProps
  } = props;
  const reactModalStyle = reactStyle as ReactModal.Styles;

  const baseStyleClasses =
    "fixed left-1/2 -translate-x-1/2 translate-y-[calc(50vh-50%)] bg-white border-2 rounded-md overflow-hidden";

  return (
    <ReactModal
      {...restProps}
      isOpen={isOpen}
      style={reactModalStyle}
      className={`${baseStyleClasses} ${className}`}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
