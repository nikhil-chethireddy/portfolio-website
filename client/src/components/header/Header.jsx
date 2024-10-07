import "./header.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [activeClass, setActiveClass] = useState("");

  const handleClickMenu = () => {
    setActiveClass("active");
  };

  const handleClickCross = () => {
    setActiveClass("");
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <span>Nikhil</span> Chethireddy
      </a>

      <nav className={`navbar ${activeClass}`}>
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="contactMe">
          Contact Me
        </a>
      </nav>

      <a href="#contact">
        <button className="gradient-btn">Contact Me</button>
      </a>
      {activeClass === "" ? (
        <TiThMenu id="menu-icon" onClick={handleClickMenu} />
      ) : (
        <IoMdClose id="menu-icon" onClick={handleClickCross} />
      )}
    </header>
  );
};

export default Header;
