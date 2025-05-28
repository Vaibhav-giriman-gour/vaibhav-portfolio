import React, { Suspense } from "react";
import { useState, useRef, useMemo, lazy, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "./styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Toaster, toast } from "react-hot-toast";

const StyledEarth = lazy(() => import("../components/StyledEarth"));

const Contacts = () => {
  const isSmall = useMediaQuery({ maxWidth: 350 });
  const isMobile = useMediaQuery({ minWidth: 351, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);

  // Load likes from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) setLikes(parseInt(storedLikes));
  }, []);

  // Save likes to localStorage
  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vaibhav",
          from_email: form.email,
          to_email: "gvaibhavcc@gmail.com",
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      setLoading(false);
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster position="bottom-center" className="text-sm" reverseOrder={false} toastOptions={{
    style: {
      fontSize: '14px', // Example: set font size for all toasts
    },}}/>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center gap-2`}>
          Get In Touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact Me.</h3>
      </motion.div>
      <section className="c-space my-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 mt-12 w-full gap-5 overflow-hidden"
          id="contact"
        >
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="min-h-[500px] rounded-lg h-96 md:h-full overflow-hidden"
          >
            <Canvas
              camera={{ position: [-4, 3, 6], fov: 50, near: 0.1, far: 200 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <ambientLight intensity={[Math.PI]} />
              <directionalLight position={[15, 10, 5]} intensity={1} />
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                  autoRotate
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <StyledEarth scale={sizes.styledEarthSacale}
                position={[0, 0, 0]} />
              </Suspense>
            </Canvas>
          </motion.div>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex flex-col justify-center gap-5 relative sm:p-2 py-5 px-5 shadow-2xl shadow-black-200"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-2 flex flex-col gap-8 grid-container"
            >
              <label className="flex flex-col">
                <span className="grid-headtext">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="input-fields"
                />
              </label>
              <label className="flex flex-col">
                <span className="grid-headtext">Your Email</span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your Email?"
                  className="input-fields"
                />
              </label>
              <label className="flex flex-col">
                <span className="grid-headtext">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="input-fields"
                />
              </label>
              <button
                type="submit"
                className="btn py-3 px-5 outline-none w-fit"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* Floating Like Button */}
      <div
        className="fixed bottom-5 right-5 sm:bottom-3 sm:right-3 z-50 flex items-center space-x-2 bg-[#1C1C21] shadow-lg px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setLikes((prev) => prev + 1)}
      >
        <span role="img" aria-label="like">❤️</span>
        <span className="text-sm font-medium text-[#aaa6c3]">{likes}</span>
      </div>
    </>
  );
};

export default SectionWrapper(Contacts, "contact"); //HOC for Contacts
