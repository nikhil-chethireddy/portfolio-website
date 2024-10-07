import "./home.css";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdCallMade } from "react-icons/md";
import profilePic from "../../assets/profilePic.png";
import resume from "../../assets/NIKHIL's Resume.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Nikhil's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Nikhil</span>
        </h1>
        <h3 className="text-animation">
          I am a <span></span>
        </h3>
        <p>
          A passionate MERN Stack Developer with strong foundation in full-stack
          web development. I specialize in creating scalable, dynamic web
          applications using MongoDB, Express.js, React, and Node.js, leveraging
          the full power of the JavaScript ecosystem.
        </p>
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
        <div className="btn-group">
          <a className="btn" onClick={handleDownload}>
            Resume
          </a>
          <a href="tel:+919515815364" className="btn">
            <MdCallMade /> 9515815364
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={profilePic} alt="profilePic" />
      </div>
    </section>
  );
};

export default Home;
