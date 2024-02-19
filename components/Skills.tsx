import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skills from "@/data";

interface Props {}

const Skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto ">
      <h3 className="absolute top-24 tracking-[20px] text-2xl text-gray-500 uppercase">
        Skills
      </h3>
      <h3 className="absolute  top-36 uppercase tracking-[3px] text-gray-500  text-sm">
        {" "}
        Hover over a Skill for currency proficiency
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="grid md:grid-cols-4 grid-cols-3  gap-5 pt-[100px]"
      >
        {skills.map((skill: any) => {
          return <Skill  key={skill.id} skill={skill} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
