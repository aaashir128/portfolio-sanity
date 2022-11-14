import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center max-w-7xl items-center mx-auto justify-evenly px-10  md:text-left md:flex-row"
    >
      <h3 className="text-2xl absolute top-24 text-gray-500 tracking-[20px] uppercase">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[650px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>

        <p className="text-base">
          {/* I am Full-Stack Developer, enthusiastic and eager to explore new
          methodolgies. If you are looking for Web Development ,Hybrid App
          Development, Bug Fixing , Database Integration or User Authentication
          do CONTACT ME */}
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
