import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainButton from "@/styles/ui-components/styled-button";

import Path from "@/utils/routes/Path";

const HomePage = () => {
  const navigate = useNavigate();
  const { LOGIN } = Path;

  return (
    <div className="overflow-hidden">
      <motion.main
        className="h-[calc(100vh_-_80px)] relative"
        animate={{
          background: [
            "rgb(129 140 248)",
            "#fff",
            "rgb(129 140 248)",
            "#fff",
            "rgb(129 140 248)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <motion.div
          className="bg-indigo-400 w-60 h-60 absolute left-1/2 top-1/2 flex justify-center items-center text-2xl"
          animate={{
            scale: [1, 3, 3, 2, 1],
            rotate: [0, 45, 90, 360, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            translateY: ["-50%", "-50%", "-50%", "-50%", "-50%"],
            translateX: ["-50%", "-50%", "-50%", "-50%", "-50%"],
            background: [
              "#fff",
              "rgb(129 140 248)",
              "#fff",
              "rgb(129 140 248)",
              "#fff",
            ],
          }}
          transition={{
            duration: 3, //초 단위
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <motion.div
            className="bg-white w-32 h-32"
            animate={{
              background: [
                "rgb(129 140 248)",
                "#fff",
                "rgb(129 140 248)",
                "#fff",
                "rgb(129 140 248)",
              ],
              scale: [1, 2, 2, 1.5, 1],
              rotate: [0, 45, 90, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-lg bg-indigo-400/25 p-5 rounded-lg">
          <h2 className="text-3xl py-20 font-semibold text-gray-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            corporis eaque ducimus.
          </h2>

          <MainButton
            className="w-full"
            onClick={() => navigate(LOGIN, { replace: true })}
          >
            포트폴리오 만들기
          </MainButton>
        </div>
      </motion.main>
    </div>
  );
};

export default HomePage;
