import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = { projects: Project[] };

const projects = [1, 2, 3, 4, 5];
function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-[#DFF6FF]">
        {projects.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <Link href={project?.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
                className="w-[80%] h-[80%] hover:cursor-pointer"
                src={urlFor(project?.image).url()}
                alt=""
              />
            </Link>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project?.title}
              </h4>

              <div className="flex flex-wrap items-center space-x-4 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    className="w-10 h-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
