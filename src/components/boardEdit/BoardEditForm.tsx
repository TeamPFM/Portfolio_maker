import { useState, useRef, useEffect, useLayoutEffect, FormEvent, MouseEvent } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Path from "@/utils/path/routes";
import UploadButton from "../projectWrite/base/uploadButton";
import useBoardFindOneQuery from "@/hooks/query/boards/useBoardFindOneQuery";
import useCreateBoardsMutation from "@/hooks/mutation/boards/useCreateBoardsMutation";
import useUpdateBoardsMutation from "@/hooks/mutation/boards/useUpdateBoardsMutation";

interface IObject {
  [key: string]: string;
}

const pathNamesTitle: IObject = {
  "board-new": "글 작성",
  "board-update": "글 수정",
};

const BoardWriteForm = () => {
  const [curPathName, setCurPathName] = useState("");
  const [title, setTitle] = useState<string>("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const boardtTitleRef = useRef<HTMLInputElement | null>(null);
  const boardDescRef = useRef<HTMLTextAreaElement | null>(null);
  const createMutatiton = useCreateBoardsMutation();
  const updateMutatiton = useUpdateBoardsMutation();

  const { BOARD, BOARD_NEW, BOARD_UPDATE } = Path;

  const postId: number = Number(searchParams.get("postId"));
  const { data: boardItem, isLoading, isError } = useBoardFindOneQuery(postId);
  const getPathName = [BOARD_NEW, BOARD_UPDATE].find((item) => item === location.pathname);

  useEffect(() => {
    if (boardItem) {
      boardtTitleRef.current && (boardtTitleRef.current.value = boardItem.title);
      boardDescRef.current && (boardDescRef.current.value = boardItem.content);
    }
  }, [boardItem]);

  useLayoutEffect(() => {
    if (getPathName) {
      setTitle(pathNamesTitle[getPathName?.split("/")[1]]);
      setCurPathName(getPathName);
    }
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (boardtTitleRef.current && boardDescRef.current) {
      const editData = {
        title: boardtTitleRef.current.value,
        content: boardDescRef.current.value,
      };

      if (curPathName === BOARD_NEW) {
        // 글작성 페이지에서 요청
        console.log("작성페이지", editData);
        createMutatiton.mutate(editData);
        navigate(BOARD, { replace: true });
      } else {
        // 글수정 페이지에서 요청
        console.log("수정페이지", editData);
        updateMutatiton.mutate({postId, ...editData});
        navigate(BOARD, { replace: true });
      }
    }
  };

  if (curPathName === BOARD_UPDATE && isLoading) {
    return <div>불러오는중..</div>;
  }

  return (
    <section className="w-full pb-[7px]">
      <div className="w-auto flex justify-center">
        <div className="max-w-[40rem] py-10 w-7/12">
          <header className="py-3 px-5 w-full bg-gray-800 text-white rounded-t-lg">
            <span className="text-[20px] font-bold">{title}</span>
          </header>
          <div className="py-3 px-5 gap-5 w-full bg-white shadow-lg rounded-b-lg">
            <div className="write-form">
              <form className="flex-col gap-3" onSubmit={onSubmit}>
                <div className="project-info w-full pb-5 gap-3 flex">
                  <div className="flex-1 project-title">
                    <p
                      className={`pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}
                    >
                      제목
                    </p>
                    <input
                      className={`border w-full h-8 rounded-sm py-6 px-4 focus:outline-none focus:border-gray-500`}
                      type="text"
                      name="pname"
                      placeholder="제목을 입력해주세요."
                      autoComplete="off"
                      ref={boardtTitleRef}
                      required
                    />
                  </div>
                </div>
                <div className="desc pb-5">
                  <p
                    className={`pb-2 font-bold after:content-['*'] after:ml-1.5 after:text-red-400`}
                  >
                    내용
                  </p>
                  <textarea
                    className={`border w-full h-[200px] resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-gray-500`}
                    name="pdesc"
                    placeholder="프로젝트에 대한 설명을 입력해주세요."
                    ref={boardDescRef}
                    required
                  />
                </div>
                <div className="btn-group w-full flex py-5 gap-3">
                  <div className="flex-1">
                    <UploadButton
                      btnType="취소"
                      onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        if (
                          window.confirm(
                            "취소하면 수정하신 내용이 삭제됩니다.\n그래도 취소하실건가요?"
                          )
                        ) {
                          navigate(BOARD, { replace: true });
                        } else {
                          return;
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <UploadButton btnType="저장" type="submit" />
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

export default BoardWriteForm;
