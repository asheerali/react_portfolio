import { motion } from "framer-motion";
import { MASTER_THESIS } from "../constants";

const Thesis = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Master Thesis
      </motion.h1>
      <div>
        {MASTER_THESIS.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <motion.p
                // whileInView={{ opacity: 1, x: 0 }}
                // initial={{ opacity: 0, x: -100 }}
                // transition={{ duration: 0.5 }}
                className="mb-2 text-sm text-neutral-400"
              >
                {experience.year}
              </motion.p>
              <p className="mb-2 text-neutral-400">{experience.city_country}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <motion.h6
                // whileInView={{ opacity: 1, x: 0 }}
                // initial={{ opacity: 0, x: 100 }}
                // transition={{ duration: 0.5 }}
                className="mb-2 font-semibold"
              >
                {experience.role} -
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              {/* <p>
                Synthetic data creation of defect images for CNN training using
                Generative Networks:
              </p> */}
              <p className="mb-4 text-neutral-400">
                <span className=" text-neutral-100">
                  Synthetic data creation of defect images for CNN training
                  using Generative Networks:
                </span>{" "}
                {experience.description}
              </p>
              <div className="mb-6 flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="mr-4 mt-6 rounded bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thesis;
