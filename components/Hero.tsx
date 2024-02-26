import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";


type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, i'm Yeni.",
      "Welcome, It's nice to see you here!!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  function numberOfLines(num:any){
    let answer = ""
    switch (num) {
    case 1:
     return answer = "Equal";
      break;
    case 2:
      return answer = "Small";
      break;
    case 3:
      return answer = "Large";
    case 4:
      return answer = "Huge"
    }
  }

  // console.log(numberOfLines(0))
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.push("Banana123");
console.log(fruits)
console.log(fruit)

  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center, text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32  mx-auto object-center object-cover"
        src="./images/yeni.jpeg"
        alt="img"
      />
      <div className="z-20">
        <h2 className="tracking-[10px] md:tracking-[15px] text-sm pb-2 uppercase text-gray-500">
          IOS ENGINEER
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3"> {text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            {" "}
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            {" "}
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            {" "}
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contactme">
            {" "}
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
