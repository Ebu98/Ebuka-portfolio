import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ebukaking98@gmail.com?subject=${formData.subject}&body=Hi Ebuka, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left px-10 md:flex-row max-w-7xl justify-evenly items-center mx-auto">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        contact
      </h2>

      <div className="flex flex-col space-y-6 mt-[100px]">
        <h4 className="font-semibold text-center text-2xl md:text-4xl  ">
          I have got just what you need.{" "}
          <span className=" underline decoration-[#f7ab0a]">Lets Talk</span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center  ">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#808000]  " />
            <p className="font-semibold text-xl md:text-4xl">+2347039634445</p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#808000]  " />
            <p className="font-semibold text-xl md:text-4xl">
              ebukaking98@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#808000]  " />
            <p className="font-semibold text-xl md:text-4xl">Lagos,Nigeria</p>
          </div>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-[95%] flex flex-col space-y-2 mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                className="contactInput w-[50%]"
                placeholder="Name"
                type="text"
              />
              <input
                {...register("email")}
                className="contactInput w-[50%]"
                placeholder="Email"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button className="bg-[#808000] py-3 px-2 rounded-md font-bold text-white text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
