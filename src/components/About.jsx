import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { competencies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

export const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <span className="text-[50px] w-18 h-16">{icon}</span>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About my background</p>
        <p className={styles.sectionHeadText}>Core competencies</p>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With over {new Date().getFullYear() - 2014} years of hobbyist and
        professional development experience, {"I've"} learned a thing or two
        about building high-quality software.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The majority of my experience is within the React ecosystem, but{' '}
        {"I've"} spent recent years building kick-ass data products using Python
        and building great mobile experiences in React Native.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {competencies.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              {...service}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
