import "./App.css";
import Header from "./component/Header";
import FeaturedBox from "./component/FeaturedBox";
import AboutBox from "./component/AboutBox";
import ProjectsBox from "./component/ProjectsBox";
import ContactBox from "./component/ContactBox";
import Footer from "./component/Footer";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Change Active Link
    const sections = document.querySelectorAll("section[id]");
    console.log(sections);
    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);

    const sr = ScrollReveal({
      // เรียกว่าใส่ค่า config
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    // Feature Box
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 200 });

    // Project Box
    sr.reveal(".project-box", { interval: 200 });

    // Heading
    sr.reveal(".top-header", {});

    // Left-right Animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    // Type Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["Lecturer", "Developer", "Back-End"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

// export default App;
 return <h1>Hello World</h1>
 function Header() {
  return <h1>Hello World</h1>;
}
export default Header;