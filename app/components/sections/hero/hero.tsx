import { Link } from "react-router-dom";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative mt-16 pb-[5.75rem] lg:mt-[7.75rem] lg:pb-[11rem] ">
      <div
        className={`absolute w-2/4 h-[26.5625rem] bg-shade top-[-7.75rem] right-0 rounded-bl-[60px]
          lg:w-[48.9583333%] lg:h-[26.6875rem] lg:top-[-13.75rem]  
        `}
      ></div>
      <div className="relative z-10 ctn overflow-hidden grid grid-cols-1 gap-[5.4375rem] lg:grid-cols-[29.375rem,1fr] lg:gap-[10rem] ">
        <div className="relative w-[154.9839228%] pb-[76.8488746%] lg:order-2 lg:w-[190.8333333%] lg:pb-[94.7900109%]  ">
          <img
            src="/assets/illustration-devices.svg"
            alt=""
            className="absolute w-full h-full top-0 left-0 "
          />
        </div>
        <header className="lg:mt-[2.375rem]">
          <p className="flex items-center gap-4 text-text">
            <strong className="py-1 px-2.5 text-white bg-stress rounded-full ">NEW</strong>{" "}
            MONOGRAPH DASHBOARD
          </p>
          <h1 className="text-mhxl font-bold mt-4 max-w-[29.375rem] lg:text-lhxl ">
            POWERFUL INSIGHTS INTO YOUR TEAM
          </h1>
          <p className="text-mtxl text-text max-w-[16.625rem] mt-4 lg:mt-8 ">
            Project planning and time tracking for agile teams
          </p>
          <div className="mt-6 flex items-center gap-6 lg:mt-16 ">
            <Link
              to="/"
              className={`h-10 grid place-items-center px-6 text-sm font-bold text-white bg-primary 
                rounded-md tracking-wider hover:opacity-75
                lg:h-12 lg:text-base lg:px-8
              `}
            >
              SCHEDULE A DEMO
            </Link>
            <span className="text-stress opacity-50 text-sm tracking-widest ">
              TO SEE A PREVIEW
            </span>
          </div>
        </header>
      </div>
    </section>
  );
};
