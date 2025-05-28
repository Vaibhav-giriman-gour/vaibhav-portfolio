import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo, lazy } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { useProgress } from "@react-three/drei";




const GamingDesktop = lazy(() => import("../components/GamingDesktop"));
const ReactLogo = lazy(() => import("../components/ReactLogo"));

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 350 });
  const isMobile = useMediaQuery({ minWidth: 351, maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });

  const sizes = useMemo(() => calculateSizes(isSmall, isMobile, isTablet), [
    isSmall,
    isMobile,
    isTablet,
  ]);
    const { progress, active } = useProgress();

  return (
    <section className="min-h-screen w-full flex flex-col relative gap-2">
      <div className="w-full mx-auto flex flex-col sm:mt-28 mt-35 c-space gap-6">
        <p className="sm:text-2xl text-lg font-medium font-sans text-white text-center">
          Hi, I'm Vaibhav Giriman Gour <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Frontend Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" gl={{ preserveDrawingBuffer: true }} shadows>
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile} isSmall={isSmall} scale={sizes.deskScale} position={sizes.deskPosition}>
              <GamingDesktop
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={sizes.deskRotation}
              />
            </HeroCamera>
            <pointLight position={[2, 2, 5]} intensity={3} decay={2} color="white" castShadow />
            <Suspense fallback={null}>
              <ReactLogo position={sizes.reactLogoPosition} />
            </Suspense>
            <ambientLight intensity={2} />
            <directionalLight position={[0, 10, 10]} intensity={5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space" >
        <a href="#about">
          <Button  name="Let's work together!!" isBeam containerClass="sm:w-fit w-full sm:min-w-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;