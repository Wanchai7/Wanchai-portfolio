import React from "react";
import CV_View from "../assets/download/CV_View.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me </h1>
      </div>
      <div className="row">
        {/* About me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! I’m View, and I have a passion for full-stack development.
              I enjoy creating seamless user experiences by working on both the
              front-end and back-end of applications. In my free time, I love
              exploring new technologies and improving my skills through
              personal projects. I'm excited to connect with like-minded
              individuals and share ideas in the tech community!
            </p>
            <div className="about-btn">
              <a href={CV_View} target="_blank">
                <button className="btn">
                  Download CV <i className="uil uil-file-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Tailwind</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>Express.js</span>
              <span>Go</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
