import "./education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>

      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2014</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>
              During my school years, I developed a strong interest in
              problem-solving and technology. I was actively involved in science
              projects and math competitions, which laid the foundation for my
              analytical thinking.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2016</div>
          <div className="timeline-content">
            <h3>Intermediate</h3>
            <p>
              In my intermediate years, I pursued a science stream, which helped
              sharpen my understanding of physics, chemistry, and mathematics.
              This period strengthened my technical aptitude and desire to
              explore complex systems, which eventually guided me toward
              engineering.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h3>Bachelor of Engineering</h3>
            <p>
              During my time as a Mechanical Engineering student at Osmania
              University, I gained a deep understanding of problem-solving,
              logical thinking, and critical analysis, which are skills that
              have proven valuable in my shift to software development. Although
              my academic focus was on engineering principles, I gradually
              became more interested in software development, particularly the
              MERN stack. This interest pushed me to hone my programming skills
              through self-study and projects. My background in engineering,
              coupled with my passion for coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
