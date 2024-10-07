import "./projects.css";
import project1 from "../../assets/projectsScreenshots/project1.jpeg";
import project2 from "../../assets/projectsScreenshots/project2.png";
import project3 from "../../assets/projectsScreenshots/project3.png";
import project4 from "../../assets/projectsScreenshots/project4.png";
import project5 from "../../assets/projectsScreenshots/project5.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt="project1" />
          <h3>Chat Web App</h3>
          <p>
            A full-featured real-time chat web app using the MERN stack,
            enhanced with Redux Toolkit for state management and Socket.io for
            real-time messaging. It includes password encryption with bcrypt,
            JWT-based authentication, and online user status tracking, ensuring
            secure communication and seamless interactions.
          </p>
          <a href="https://chat-app-1g5w.onrender.com/" className="btn">
            Review Project
          </a>
        </div>

        <div className="project-card">
          <img src={project2} alt="project2" />
          <h3>Food Delivey Web App</h3>
          <p>
            A comprehensive full-stack food delivery app using the MERN stack.
            The app allows users to browse restaurant menus, place orders, and
            track your Orders. It features user authentication with JWT, a
            responsive frontend with React.js, and a scalable backend with
            Node.js and MongoDB.
          </p>
          <a href="https://telangana-ruchulu.netlify.app/" className="btn">
            Review Project
          </a>
        </div>

        <div className="project-card">
          <img src={project3} alt="project3" />
          <h3>GPT UI/UX Design</h3>
          <p>
            This page showcases a fully responsive, sleek homepage for a GPT AI
            tool, built with React and CSS. It offers an immersive full-length
            design, optimized for all devices, featuring a clean, modern
            aesthetic, smooth transitions, and user-friendly interactions.
          </p>
          <a href="https://gpt-ui-ux.netlify.app/" className="btn">
            Review Project
          </a>
        </div>

        <div className="project-card">
          <img src={project4} alt="project4" />
          <h3>Myntra clone</h3>
          <p>
            This project is a Myntra clone built using React, Redux, and
            Bootstrap. It replicates key features like product listings,
            shopping cart, and user interface elements. The app provides a
            responsive layout, efficient state management, smooth page
            transitions, and an engaging user experience.
          </p>
          <a
            href="https://github.com/nikhil-chethireddy/Myntra-clone"
            className="btn"
          >
            Review Project
          </a>
        </div>

        <div className="project-card">
          <img src={project5} alt="project5" />
          <h3>Amazon Home page clone</h3>
          <p>
            This project is a basic clone of the Amazon homepage, built with
            HTML and CSS as a web development practice. It includes a navigation
            bar, header with a search bar, product sections, a footer.
          </p>
          <a
            href="https://github.com/nikhil-chethireddy/Amazon-Home-Page-Clone"
            className="btn"
          >
            Review Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
