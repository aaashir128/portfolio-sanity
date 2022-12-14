import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aaashir128@gmail.com?subject=${formData.subject}$body=Hi, my nameIs ${formData.name}. ${formData.message} `;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have gor just what you need. <span>Let&apos;s Talk.</span>
        </h4>

        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="h-6 w-6 text-blue-500 animate-pulse" />
          <p className="text-2xl">+92 347 2419300</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="h-6 w-6 text-blue-500 animate-pulse" />
          <p className="text-2xl"> aaashir128@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="h-6 w-6 text-blue-500 animate-pulse" />
          <p className="text-2xl">Rafi Banglows, Malir, Karachi</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
