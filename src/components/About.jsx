import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { techs } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[180px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] xs:min-h-[150px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Junior Web Developer with a strong passion for delivering creative and 
        functional digital solutions, where I have gained a profound understanding of web programming.
        <br />
        I am enthusiastic about continuously developing myself as a Web Developer and contributing to creating engaging and beneficial online experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {techs.map((tech, index) => (
          <TechCard key={tech.title} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
