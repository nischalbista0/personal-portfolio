import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="bg-[#121212] min-h-[100vh]">
      <Navbar />

      <HeroSection />
    </div>
  );
}
