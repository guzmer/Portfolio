import Education from "./pages/Education/Education";
import Layout from "./components/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import About from "./pages/About/About";
import Work from "./pages/Work/workExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <div>
      <MobileNav />
      <Layout />
      <div className="container">
      <About />
      <Work />
      <Education />
      <Techstack />
      <Projects />
      <Contact />
      </div>
    </div>
    <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
