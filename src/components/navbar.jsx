// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 w-10"
        >
          <text x="50" y="60" fontFamily="Arial" fontSize="35" fill="#A9A9A9">
            A
          </text>
          <text x="10" y="60" fontFamily="Arial" fontSize="70" fill="#fff">
            A
          </text>
        </svg>
      </div>

      <div className="flex items-center m-2 justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/asheerali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-2xl mx-2" />{" "}
        </a>
        <a
          href="https://github.com/asheerali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-2xl mx-2" />
        </a>
        <a
          href="https://x.com/asheerali11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-white text-2xl mx-2" />
        </a>
        <a href="mailto:asheerali1997@gmail.com">
          <IoMdContact className="text-white text-2xl mx-2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
