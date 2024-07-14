import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import ScrollToTop from "react-scroll-to-top";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert("Phone number copied to clipboard!");
    },
    (err) => {
      console.error("Failed to copy: ", err);
    }
  );
};

const Contactsection = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <ScrollToTop
        smooth
        viewBox="0 0 17 20"
        svgPath="M12 8L8 12L16 12L12 8Z"
        color="#05020c"
        className="bg-gray-300 rounded-2xl "
      />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
          onClick={() => copyToClipboard(CONTACT.phoneNo)}
          style={{ cursor: "pointer" }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          className="border-b"
          href={`mailto:${CONTACT.email}`}
          style={{ display: "inline-block", transition: "transform 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          asheerali1997@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contactsection;
