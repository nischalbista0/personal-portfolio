import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="fixed top-0 left-4 h-[100vh] flex items-center justify-center hidden 900:flex">
      <div className="flex flex-col gap-3">
        <div className="h-[40px] w-[40px] bg-white text-[#6b7688] flex items-center justify-center rounded-[50%] transition-all duration-200 ease-linear cursor-pointer hover:bg-[#313bac] hover:text-white">
          <FaGithub className="w-5 h-5" />
        </div>

        <div className="h-[40px] w-[40px] bg-white text-[#6b7688] flex items-center justify-center rounded-[50%] transition-all duration-200 ease-linear cursor-pointer hover:bg-[#313bac] hover:text-white">
          <FaLinkedin className="w-5 h-5" />
        </div>

        <div className="h-[40px] w-[40px] bg-white text-[#6b7688] flex items-center justify-center rounded-[50%] transition-all duration-200 ease-linear cursor-pointer hover:bg-[#313bac] hover:text-white">
          <FaInstagram className="w-5 h-5" />
        </div>

        <div className="h-[40px] w-[40px] bg-white text-[#6b7688] flex items-center justify-center rounded-[50%] transition-all duration-200 ease-linear cursor-pointer hover:bg-[#313bac] hover:text-white">
          <FaFacebook className="w-5 h-5" />
        </div>

        <div className="h-[40px] w-[40px] bg-white text-[#6b7688] flex items-center justify-center rounded-[50%] transition-all duration-200 ease-linear cursor-pointer hover:bg-[#313bac] hover:text-white">
          <FaTwitter className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
