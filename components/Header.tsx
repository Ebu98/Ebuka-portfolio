import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-start sticky top-0 p-5 mx-auto max-w-7xl justify-between z-20 xl;items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex  items-center flex-row"
      >
        <SocialIcon
          url="https://www.instagram.com/tonyking_1234/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/EbukaKing10"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://wa.me/+2347039634445"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <SocialIcon
          url="https://github.com/Ebu98"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ebuka-king-0693741b2/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href='#contactme'>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <EnvelopeIcon className="cursor-pointer text-[gray] h-7 w-7 mr-4" />
        <p className="uppercase hidden   md:inline-flex text-gray-400 text-[14px]">
          Get In touch
        </p>
      </motion.div>
      </Link>
      
    </header>
  );
};

export default Header;
