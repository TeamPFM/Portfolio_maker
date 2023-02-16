import React from "react";
import { motion } from "framer-motion"

import Header from '../../components/Header/Header'

const HomePage = () => {
  return (
      <>
        <Header />

        <motion.main
          className="h-[calc(100vh_-_80px)] mt-20 relative"
          animate={{
            background: ["rgb(129 140 248)", "#fff", "rgb(129 140 248)", "#fff", "rgb(129 140 248)"]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <motion.div 
            className="bg-indigo-400 w-60 h-60 absolute left-1/2 top-1/2 flex justify-center items-center text-2xl"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 45, 90, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              translateY: ["-50%","-50%","-50%","-50%","-50%"],
              translateX: ["-50%","-50%","-50%","-50%","-50%"],
              background: ["#fff", "rgb(129 140 248)", "#fff", "rgb(129 140 248)", "#fff"]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <motion.div 
              className="bg-white w-32 h-32"
              animate={{
                background: ["rgb(129 140 248)", "#fff", "rgb(129 140 248)", "#fff", "rgb(129 140 248)"],
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 45, 90, 360, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.div>

          <h2 className="absolute left-1/2 -translate-x-1/2 text-3xl py-10 font-semibold text-gray-800">
            Share your portfolio and get feedback!
          </h2>
        </motion.main>
      </>
    )
};

export default HomePage;
