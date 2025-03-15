import Education from "./pages/Education/Education";
import Layout from "./components/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import About from "./pages/About/About";
import Work from "./pages/Work/workExp";
import Contact from "./pages/Contact/Contact"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <div>
      <Layout />
      <About />
      <Work />
      <Education />
      <Techstack />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;
