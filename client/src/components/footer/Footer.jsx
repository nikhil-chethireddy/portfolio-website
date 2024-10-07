import "./footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="mailto:nikhilchethireddy@gmail.com">
          <BiLogoGmail />
        </a>
        <a href="https://linkedin.com/in/nikhilchethireddy">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/nikhil-chethireddy">
          <IoLogoGithub />
        </a>
      </div>

      <ul className="list">
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p className="copyright">© Nikhil Reddy | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
