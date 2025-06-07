import React from "react";
import mit from "../assets/images/Wanchai.png";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Wanchai Chiangfung</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            สวัสดีครับ/ค่ะ! ฉันเป็นนักพัฒนา Full-Stack
            ที่หลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่ใช้งานได้จริง
            ด้วยความสามารถในการทำงานทั้งด้าน Front-End และ Back-End
            ฉันสามารถสร้างประสบการณ์ผู้ใช้ที่มีคุณภาพสูงและโค้ดที่มีประสิทธิภาพได้
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="#">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="#">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={go} alt="go" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
