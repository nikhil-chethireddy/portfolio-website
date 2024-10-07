import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Education />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
