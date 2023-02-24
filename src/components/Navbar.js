import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed h-[80px] w-full flex items-center justify-between bg-[#252525] py-4 px-8 bg-opacity-30 backdrop-blur-[4px]">
      <div>
        <h1 className="hidden text-[#6b7688] text-[20px] md:block">
          &lt;{" "}
          <span className="text-[23px] font-bold text-[#f8fafc]">
            Nischal Bista
          </span>{" "}
          /&gt;
        </h1>

        <div className="h-[55px] w-[60px] bg-[#313bac] rounded-[50%] flex items-center justify-center cursor-pointer md:hidden">
          <h1 className="text-[#f8fafc] text-[14px] font-bold">
            &lt; NB /&gt;
          </h1>
        </div>
      </div>

      <nav
        className={`${
          navbarOpen
            ? "translate-x-0 transition-all shadow-[#ffffff2c]"
            : "translate-x-full transition-none"
        } absolute z-40 top-0 right-0 pl-10 py-4 w-[80%] h-[100vh] bg-[#121212] shadow-lg duration-300 ease-linear 900:transition-none 900:p-0 900:translate-x-0 900:w-auto 900:h-auto 900:bg-transparent 900:static 900:shadow-none`}
      >
        <div
          className="absolute top-6 right-9 cursor-pointer 900:hidden"
          onClick={toggleNavbar}
        >
          <XMarkIcon strokeWidth="3px" className="w-8 text-[#313bac]" />
        </div>

        <ul className="flex flex-col gap-8 text-[18px] text-[#f8fafc] font-semibold relative top-16 900:flex-row 900:gap-10 900:static 900:text-[17px] lg:gap-14">
          <li class="relative">
            <a href="#" class="inline-block">
              Home
            </a>
            <div class="absolute -bottom-1 left-0 w-0 h-[3px] 900:bg-white rounded-md transition-all duration-300"></div>
          </li>

          <li class="relative">
            <a href="#" class="inline-block">
              About
            </a>
            <div class="absolute -bottom-1 left-0 w-0 h-[3px] 900:bg-white rounded-md transition-all duration-300"></div>
          </li>

          <li class="relative">
            <a href="#" class="inline-block">
              Work
            </a>
            <div class="absolute -bottom-1 left-0 w-0 h-[3px] 900:bg-white rounded-md transition-all duration-300"></div>
          </li>

          <li class="relative">
            <a href="#" class="inline-block">
              Skills
            </a>
            <div class="absolute -bottom-1 left-0 w-0 h-[3px] 900:bg-white rounded-md transition-all duration-300"></div>
          </li>

          <li class="relative">
            <a href="#" class="inline-block">
              Contact
            </a>
            <div class="absolute -bottom-1 left-0 w-0 h-[3px] 900:bg-white rounded-md transition-all duration-300"></div>
          </li>
        </ul>
      </nav>

      <div>
        <button
          class="w-12 h-6 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
          onClick={toggleDarkMode}
        >
          <div
            id="switch-toggle"
            class={`w-8 h-8 relative rounded-full transition duration-500 transform -translate-x-2 p-1 text-white ${
              darkMode ? "bg-gray-700" : "bg-yellow-500 translate-x-6"
            }`}
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </div>
        </button>
      </div>

      <div
        className="h-[40px] w-[40px] bg-[#313bac] rounded-[50%] flex items-center justify-center cursor-pointer 900:hidden"
        onClick={toggleNavbar}
      >
        <Bars2Icon strokeWidth="2px" className="w-7 text-white" />
      </div>
    </div>
  );
}
