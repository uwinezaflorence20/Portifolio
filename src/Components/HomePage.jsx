import "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Service from "./Service";
import Skills from "./Skills";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Homepage = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white min-h-screen pt-8 flex flex-col justify-center items-center">
        <div className="flex flex-col px-32 gap-40 md:flex-row items-center ">
          <div className="text-center md:text-left md:w-1/2">
            <motion.p initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-lg md:text-xl text-gray-400 mb-2">
              Software Developer
            </motion.p>
            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-3xl md:text-5xl font-bold mb-2">
              Hello I'm
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-4xl md:text-5xl font-bold text-green-400">
              Florence Uwineza
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4 text-gray-400">
              I am a Front-End and UI/UX designer and am proficient in various programming languages and technologies.
            </motion.p>

            <motion.a initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} href="my.pdf" download>
              <motion.button initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mt-6 bg-green-500 text-black py-2 px-6 rounded-full hover:bg-green-600">
                Download CV
              </motion.button>
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative mt-10 md:mt-0 md:ml-10">
            <motion.div animate={{ boxShadow: [
              "0 0 10px rgba(79, 208, 154, 0.8)",
              "0 0 30px rgba(79, 208, 154, 0.8)",
              "0 0 10px rgba(79, 208, 154, 0.8)"
            ] }} transition={{ repeat: Infinity, duration: 2 }} className="relative w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-green-400">
              <img src="/img.jpg" alt="Florence Uwineza" className="absolute inset-0 w-full h-full rounded-full" />
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-12 flex space-x-12 gap-20 px-32">
          {[
            { label: "Years of experience", value: 2 },
            { label: "Projects completed", value: 4 },
            { label: "Technologies mastered", value: 8 },
            { label: "Code commits", value: 500 }
          ].map((item, index) => (
            <div key={index} className="text-center flex gap-2">
              <div className="rounded-full bg-green-400 w-16 h-16 flex items-center justify-center mx-auto">
                <h3 className="text-white text-2xl font-bold">
                  <CountUp start={0} end={item.value} duration={2} />
                </h3>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {item.label.split(" ").map((word, i) => (
                  <span key={i}>{word} <br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Resume />
      <Service />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Homepage;
