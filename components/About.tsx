import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4">
        About
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="./images/yeni-image.jpeg"
        className="-mb-20 md:mb-0 mt-[70px] md:mt-0   flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-4 px-0 md:px-10  mt-[10px]">
        <h4 className=" text-2xl md:text-3xl font-semibold">
          Here is a  
          <span className="underline decoration-[orange]"> little </span>
            Background
        </h4>
        <p className="text-base">
          My background in both SwiftUI and UIKit gives me a comprehensive
          understanding of iOS development, allowing me to adapt seamlessly to
          different project requirements. I&apos;ve honed my skills in writing clean
          and reusable code, ensuring that the solutions I provide are not just
          functional but also maintainable in the long run. I bring a
          collaborative and positive mindset to any team I join. I&apos;m not just
          open to change; I actively seek impactful opportunities to contribute
          and grow. My excellent reputation for integrity and productivity
          reflects my commitment to delivering quality work and fostering a
          positive team environment.
        </p>
      </div>
    </div>
  );
};

export default About;
