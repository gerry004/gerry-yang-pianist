import AudioPlayer from "./components/AudioPlayer";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-row h-screen border-2 border-black justify-center gap-16">
        <Hero />
        <AudioPlayer />
      </section>
      <Timeline />
    </div>
  );
}

export default App;
