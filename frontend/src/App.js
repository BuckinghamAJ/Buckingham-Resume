import "./App.css";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { useRef, useState } from "react";

function App() {
  const experiencesRef = useRef();

  const [isScrolling, setisScrolling] = useState(false);

  const scrollToExperience = () => {
    setisScrolling(true);
    experiencesRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar
        scrollToExperience={scrollToExperience}
        isScrolling={isScrolling}
      />
      <Header />
      <Experiences refProp={experiencesRef} />
      {/*<Portfolio />*/}
      <Footer />
    </>
  );
}

export default App;
