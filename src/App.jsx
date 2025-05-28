import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Stars from "./sections/Stars";
import PageLoader from "./components/PageLoader";

const App = () => {
    const { active } = useProgress(); // true while assets (models, textures) are loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!active) {
      setIsLoading(false); // Immediately hide loader once loading is complete
    }
  }, [active]);

  if (isLoading) return <PageLoader />;
  return (
    <main className="text-3xl ">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <div className="relative z-0">
        <Contacts />
        <Stars/>
      </div>
    </main>
  );
};

export default App;
