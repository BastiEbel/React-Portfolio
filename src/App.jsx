import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PortfolioProject from "./components/PortfolioProject";
import Skill from "./components/Skill";

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
