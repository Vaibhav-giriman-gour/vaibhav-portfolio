import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { SectionWrapper } from "../hoc";
import { styles } from "../sections/styles";
import { motion } from "framer-motion";
import { textVariant, zoomIn, hoverScale } from "../utils/motion";
import { techStack, socialLinks } from "../constants";

const About = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 17.47, lng: 78.32, altitude: 1.5 },
        1000
      );
    }
  }, []);
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("girimanvaibhav@gmail.com");
    setHasCopied(true);
  };
  useEffect(() => {
    if (!hasCopied) return;
    let startTime = performance.now();
    let animationFrameId;

    const loop = (now) => {
      const elapsed = now - startTime;
      if (elapsed >= 2000) {
        setHasCopied(false);
      } else {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasCopied]);
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>About Me.</h2>
      </motion.div>

      <section className="c-space my-20" id="about">
        <motion.div variants={textVariant()}>
          <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-1">
              <motion.div className="grid-container" {...hoverScale(1.15, 0.3)}>
                <img
                  src="/assets/main.png"
                  alt="grid-1"
                  className="w-full max-h-[250px] h-fit object-contain"
                />
                <div>
                  <p className="grid-headtext">Hi, I'm Vaibhav</p>
                  <p className="grid-subtext">
                    With close to 3 years of experience in Frontend development,
                    I have honed expertise in designing and implementing
                    visually appealing and user-friendly interfaces.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-span-1 xl:row-span-1">
              <motion.div className="grid-container" {...hoverScale(1.15, 0.3)}>
                {/* <img
                                src="/assets/TechStack.png"
                                alt="grid-2"
                                className="w-full sm:h-[276px] h-fit object-contain rounded-3xl"
                            /> */}

                <div>
                  <p className="grid-headtext">Tech Stack</p>
                  <p className="grid-subtext">
                    I specialize in JavaScript, Tailwind, Redux with focus on
                    React JS eco-systems
                  </p>
                  <div className="flex flex-wrap gap-2 mt-10">
                    {/* <p className="grid-headtext">Skills</p> */}
                    {techStack.map((tech) => (
                      <p key={tech.id} className="grid-skills">
                        {tech.name}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-span-1 xl:row-span-2">
                            <motion.div className="grid-container" {...hoverScale(1.15, 0.3)}>

                <div className="rounded-3xl w-full xl:mt-10  xl:h-[350px] sm:h-[326px]  flex items-center justify-center">
                  <motion.div
                    variants={zoomIn(0.3, 0.8)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <Globe
                      ref={globeRef}
                      height={290}
                      width={290}
                      backgroundColor="rgba(0,0,0,0)"
                      backgroundImageOpacity={0.5}
                      showAtmosphere
                      showGraticules
                      showGlobe
                      globeImageUrl={
                        "//unpkg.com/three-globe/example/img/earth-night.jpg"
                      }
                      bumpImageUrl={
                        "//unpkg.com/three-globe/example/img/earth-night.jpg"
                      }
                      htmlElementsData={[
                        { lat: 17.47, lng: 78.32, name: "Hyderabad, India" },
                      ]}
                      htmlElement={(d) => {
                        const div = document.createElement("div");
                        div.innerHTML = "📍"; // Emoji as a marker
                        div.style.color = "red";
                        div.style.fontSize = "20px";
                        return div;
                      }}
                    />
                  </motion.div>
                </div>
                <div className="xl:mt-10">
                  <p className="grid-headtext">Availability 🌍</p>
                  <p className="grid-subtext">
                    Currently based in <strong>Hyderabad, India</strong>,
                    Available for work{" "}
                    <strong>remotely across time zones</strong> to collaborate
                    globally.
                  </p>
                  {/* <Button
                                    name={"Contact Me"}
                                    isBeam
                                    containerClass="w-full mt-10"
                                /> */}
                  <div className="space-y-2 xl:mt-10">
                    <p className="grid-subtext text-center">Contact Me</p>
                    <div
                      className={`copy-container ${
                        hasCopied ? "pointer-events-none opacity-70" : ""
                      }`}
                      onClick={!hasCopied ? handleCopy : undefined}
                    >
                      <img
                        src={
                          hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"
                        }
                        alt="Copy Contacts"
                      />
                      <p className="grid-subtext text-center">
                        girimanvaibhav@gmail.com
                      </p>
                    </div>
                    <div className="flex justify-center gap-5 mt-10">
                      {socialLinks.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          <img
                            src={link.icon}
                            alt={link.id}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="xl:col-span-2 xl:row-span-1">
              <motion.div className="grid-container" {...hoverScale(1.15, 0.3)}>

                <img
                  src="/assets/passionbulb.png"
                  alt="Passion Bulb"
                  className="w-full sm:h-[266px] h-fit object-contain"
                />
                <div>
                  <p className="grid-headtext">My Passion</p>
                  <p className="grid-subtext">
                    Fueled by creativity and a lifelong fascination with
                    technology, I love designing and developing applications.
                    From childhood curiosity about how websites work to building
                    them today, my passion drives me to craft seamless and
                    engaging digital experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about"); //HOC for About;
