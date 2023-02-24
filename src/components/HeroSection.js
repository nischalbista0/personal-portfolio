import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="py-[7rem] flex flex-col gap-2 items-center px-[16px] vsm:px-[32px] 900:flex-row 900:gap-6 900:items-stretch 900:pt-16 900:justify-center">
      <div className="flex flex-col items-center gap-12 900:self-center">
        <div className="bg-[#252525] rounded-[15px] shadow-black shadow-md py-4 px-6 flex flex-col gap-2 items-center sm:px-8">
          <div className="flex gap-1 items-end">
            <div className="text-[2.5rem]">
              <p>👋</p>
            </div>

            <div className="font-[Poppins] text-[#f8fafc] flex flex-col gap-2">
              <p className="text-[16px]">Hello, I am</p>
              <p className=" text-[2rem] font-bold leading-[40px]">
                Nischal Bista
              </p>
            </div>
          </div>

          <div>
            <button className="flex items-center gap-2 text-[#f8fafc] btn-bg-gradient px-[8px] py-[6px] rounded-[6px]">
              <ArrowDownTrayIcon className="text-white w-4" />
              <p>See my resume</p>
            </button>
          </div>
        </div>

        <div className="bg-[#252525] text-[18px] text-[#f8fafc] font-medium rounded-[15px] shadow-black shadow-md py-4 px-6 flex flex-col gap-2 items-center sm:px-8">
          <p>Web Developer</p>
          <p>Freelancer</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-[15%]">
          <img
            src="https://molemineportfolio.netlify.app/static/media/circle.134eeeb1e58895b892195fe8ed63bc9f.svg"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-[400px] 900:max-w-[500px]">
          <img
            src="https://molemineportfolio.netlify.app/static/media/profile.beb0a02d03bed43f1315.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full max-w-[550px] flex gap-3 px-[16px] mt-8 items-start justify-between vsm:px-[32px] 900:flex-col 900:w-auto 900:justify-evenly 900:mt-0">
        <div className="h-[70px] w-[70px] rounded-[50%] bg-[#252525] flex justify-center items-center 900:h-[100px] 900:w-[100px]">
          <img
            src="https://molemineportfolio.netlify.app/static/media/redux.c9be37e0fece29c624b0.png"
            alt=""
            className="h-[60%] w-[60%]"
          />
        </div>
        <div className="h-[100px] w-[100px] relative top-5 rounded-[50%] bg-[#252525] flex justify-center items-center 900:top-0 900:-right-5 900:h-[150px] 900:w-[150px]">
          <img
            src="https://molemineportfolio.netlify.app/static/media/React-h.2a0cac33f155e4a27216.png"
            alt=""
            className="h-[60%] w-[60%]"
          />
        </div>
        <div className="h-[70px] w-[70px] rounded-[50%] bg-[#252525] flex justify-center items-center 900:h-[100px] 900:w-[100px]">
          <img
            src="https://molemineportfolio.netlify.app/static/media/sass.36e863bfbcb25c109d00.png"
            alt=""
            className="h-[60%] w-[60%]"
          />
        </div>
      </div>
    </div>
  );
}
