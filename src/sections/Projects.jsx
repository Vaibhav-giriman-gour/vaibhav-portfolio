import React, { Suspense, useState, useMemo, lazy } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../sections/styles";
import { SectionWrapper } from "../hoc";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";
import SciFiDesktop from "../components/SciFiDesktop";

const DemoDesktop = lazy(() => import("../components/DemoDesktop"));

const Projects = () => {
  // const controls = useControls("DemoDesktop", {
  //   positionX: { value: 0.3, min: -10, max: 10 },
  //   positionY: { value: -3, min: -10, max: 10 },
  //   positionZ: { value: 3.4, min: -10, max: 10 },
  //   scaleX: { value: 1.5, min: 0.1, max: 5 },
  //   scaleY: { value: 1.5, min: 0.1, max: 5 },
  //   scaleZ: { value: 1.5, min: 0.1, max: 5 },
  //   rotationX: { value: 1.86, min: -Math.PI, max: Math.PI },
  //   rotationY: { value: 0.15, min: -Math.PI, max: Math.PI },
  //   rotationZ: { value: -0.30, min: -Math.PI, max: Math.PI },
  // });
  const isSmall = useMediaQuery({ maxWidth: 350 });
  const isMobile = useMediaQuery({ minWidth: 351, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  const [selectProjectIndex, setSelectProjectIndex] = useState(0);
  const currentProject = myProjects[selectProjectIndex];

  const projectCount = myProjects.length;
  const handleNavigation = (direction) => {
    setSelectProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Projects.
        </h2>
      </motion.div>
      <section className="c-space my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 w-full gap-5">
          <div className="flex flex-col justify-center gap-5 relative sm:p-2 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0 pointer-events-none">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover  rounded-xl"
              />
            </div>
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="Logo"
                className="w-10 h-10 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-5 text-white my-3">
              <p className="text-lg text-white font-semibold animatedText">
                {currentProject.title}
              </p>
              <p className="sub-font-size animatedText tracking-wider text-[#afb0b6]">
                {currentProject.desc}
              </p>
              <ul className="list-disc ml-5 text-[#afb0b6]  space-y-2 ">
                {currentProject.subdesc.map((item, index) => (
                  <li key={index} className="sub-font-size">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 flex-wrap items-center justify-between">
              <div className="flex gap-2 items-center flex-wrap ">
                {currentProject.tags.map((tag) => (
                  <div key={tag.id} className="tech-logo bg-opacity-100">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <a
                className="flex gap-2 items-center sub-font-size text-[#afb0b6] cursor-pointer hover:text-white  transition-all"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check it out</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
            </div>
            <div className="flex justify-between items-center mt-7 text-[#afb0b6] ">
              <button
                className="arrow-btn hover:text-white transition-all"
                onClick={() => handleNavigation("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="arrow-btn hover:text-white transition-all"
                onClick={() => handleNavigation("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="border border-[#1C1C21] bg-[#0c0c0c] min-h-[500px] rounded-lg h-96 md:h-full">
            <Leva />
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              
                <ambientLight intensity={[Math.PI]} />
                <pointLight position={[0, 5, 5]} intensity={5} />
                <pointLight position={[-5, 2, 5]} intensity={5} color="white" />
                <pointLight position={[0, -2, -5]} intensity={5} color="#ffffff" />
                <directionalLight position={[15, 10, 5]} intensity={1}/>
                
                <Suspense fallback={<CanvasLoader />}>
                  <group>
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                  
                />                    
                    <SciFiDesktop
                      scale={sizes.demoDesktopScale}
                      position={sizes.demoDesktopPosition}
                      rotation={sizes.dempDesktopRotation}
                      texture = {currentProject.texture}
                    />
                    {/* <DemoDesktop
                      scale={sizes.demoDesktopScale}
                      position={sizes.demoDesktopPosition}
                      rotation={sizes.dempDesktopRotation}
                      texture = {currentProject.texture}
                    /> */}
                  </group>
                </Suspense>
              

            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Projects, "projects"); //HOC for Projects
