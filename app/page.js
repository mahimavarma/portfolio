import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      </div>
      
    </main>
  );
}
