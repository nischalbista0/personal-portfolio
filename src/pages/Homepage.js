import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NavigationDots from "../components/NavigationDots";
import SocialLinks from "../components/SocialLinks";

export default function Homepage() {
  return (
    <div className="bg-[#121212] min-h-[100vh]">
      <Navbar />

      <HeroSection />

      <SocialLinks />

      <NavigationDots />
    </div>
  );
}
