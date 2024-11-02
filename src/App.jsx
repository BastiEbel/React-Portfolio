import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Navbar from "./components/pages/Navbar";
import PortfolioProject from "./components/pages/PortfolioProject";
import Skill from "./components/pages/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skill />
      <PortfolioProject />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
