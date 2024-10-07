import "./services.css";
import { SiAccenture } from "react-icons/si";
import drdo from "../../assets/DrdoLogo.svg";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <img src={drdo} className="drdo" />
            <h4>Intership in DRDO</h4>
            <p>
              I had the privilege of interning at DRDO, specifically in the
              Advanced Systems Laboratory (ASL). During my time there, I focused
              on studying Solid Propulsion systems, gaining valuable insights
              into cutting-edge defense technologies and their applications in
              Aerospace Engineering.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <SiAccenture className="icon" />
            <h4>Application Development Associate</h4>
            <p>
              As an Associate Software Engineer at Accenture, I was deeply
              involved in ensuring the seamless quality and functionality of
              software systems. My key responsibilities included utilizing
              advanced testing frameworks, executing comprehensive regression
              testing, and providing detailed feedback to optimize overall
              product stability and reliability. I worked in close collaboration
              with developers and cross-functional teams, offering valuable
              insights to identify software defects and implement meaningful
              improvements, ultimately contributing to the success and
              efficiency of various projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
