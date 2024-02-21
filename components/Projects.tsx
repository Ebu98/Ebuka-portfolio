import React from "react";
import { motion } from "framer-motion";
import projects from "@/data2";
import Link from "next/link";
import { uuid } from "uuidv4";

type Props = {};

const Projects = (props: Props) => {
  const project = projects;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0 bg-[#F9FAFB]"
    >
      <h3 className="tracking-[20px] text-2xl text-[#000] absolute top-24 uppercase  ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x h-screen  snap-mandatory z-20 pt-10 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {" "}
        {project.map((oneProject, i) => (
          <Link key={uuid()} href={oneProject.link} target="_blank">
            <div
              key={uuid()}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 "
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className=" h-[200px] w-[200px] md:w-[300px] md:-[300px] object-contain"
                src={oneProject.img}
                alt=""
              />

              <div className="px-0 md:px-10  max-w-6xl space-y-4 lg:space-y-10  ">
                <h4
                  className=" text-2xl md:text-4xl font-semibold text-center uppercase
                 "
                >
                  <span className=""></span>
                  {oneProject.title}
                </h4>
                <div className="flex justify-evenly">
                  {oneProject.technologies.map((tech) => {
                    return (
                      <img
                        key={uuid()}
                        src={tech}
                        alt=""
                        className="h-10 w-10 lg:w-20 lg:h-20"
                      />
                    );
                  })}
                </div>
                <p className="text-lg text-center md:text-left font-semibold">
                  {oneProject.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="h-[500px] left-0 -skew-y-0 absolute top-250%] w-full bg-[#808000]" /> */}
      {/* <div className="h-[500px] left-0 -skew-y-0 absolute top- 90% w-full bg-gray-400" /> */}
    </motion.div>
  );
};

export default Projects;
