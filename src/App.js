import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const timelineRef = useRef();
  const contactRef = useRef();
  return (
    <div>
      <Navbar homeRef={homeRef} timelineRef={timelineRef} contactRef={contactRef} />
      <section ref={homeRef} className="mt-[64px] py-10 px-6 bg-yellow-100">
        <Hero />
      </section>
      {/* <section ref={timelineRef}>
        <Timeline />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer /> */}
    </div>
  );
}

export default App;
