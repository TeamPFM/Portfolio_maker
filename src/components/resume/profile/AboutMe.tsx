interface IProps {
  about?: string;
}

const AboutMe = ({ about }: IProps) => {
  return (
    <>
      <section className="w-full bg-gray-800 text-white rounded-t-lg shadow-lg">
        <div className="p-5 bg-gray-800 border-solid rounded-t-lg">
          <span className="text-2xl font-semibold">About me</span>
        </div>
      </section>
      <section className="bg-white text-black flex">
        <div className="w-full flex relative py-8 px-8 h-[250px] bg-white shadow-lg rounded-lg overflow-y-auto">
          {about ? (
            <p className="text-xl font-sans">
              <span>{about}</span>
            </p>
          ) : (
            <p className="w-full text-lg text-coolGray-500 font-bold text-center">
              <span>소개글을 작성해주세요!</span>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
