import { motion } from "framer-motion";
import { TECHNOLOGIES, colors } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: 0 }, 
  animate: {
    x: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Testing = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies/Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 max-w-screen-md mx-auto"
      >
        {TECHNOLOGIES.map(({ icon: Icon, label, text }, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 flex items-center w-60">
              <motion.div
                variants={iconVariants(2.5 + index)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-neutral-800 p-4"
              >
                <Icon className={`text-7xl ${colors[index]}`} />
              </motion.div>
              <span className="ml-4 text-center">{label}</span>
            </div>
            <div className="border-l-2 border-neutral-800 h-16 mx-4 m-4"></div>
            <span className="text-left">{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testing;
