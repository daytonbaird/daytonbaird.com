import { motion } from 'framer-motion';

import { styles } from '../styles';

import { fadeIn } from '../utils/motion';

import { staggerContainer } from '../utils/motion';
import { StarsCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <StarsCanvas />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="my-[25%]">
          <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h1
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, {"I'm"} <span className="text-[#1473fa]">Dayton</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('left', 'tween', 1.2, 1)}
              className={`${styles.heroSubText} text-white-100 mt-2`}
            >
              I design and build responsive, scalabe products for the web.
            </motion.p>
            <motion.p
              variants={fadeIn('left', 'tween', 2.2, 1)}
              className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Currently building data products over at{' '}
              <a className="text-blue" href="https://juicemedia.io/">
                Juice Media
              </a>
              .
            </motion.p>
          </motion.section>
        </div>
      </div>

      <div className="sm:hidden md:flex absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
