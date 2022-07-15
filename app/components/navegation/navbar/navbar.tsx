import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";

const LINKS = [
  { to: "/", text: "PRODUCT" },
  { to: "/", text: "FEATURES" },
  { to: "/", text: "PRICING" },
];

const LOGIN = { to: "/", text: "LOGIN" };

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function isInside(target: HTMLElement | null): boolean {
      if (target === null) return false;
      return target === sidebarRef.current || isInside(target.parentElement);
    }

    const clickHandler = (e: MouseEvent) => {
      if (isSidebarOpen && !isInside(e.target as HTMLElement)) {
        closeSidebar();
      }
    };

    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, [isSidebarOpen]);

  return (
    <nav className="mt-9 ctn relative z-50 flex justify-between items-center lg:mt-16">
      <Link to="/" aria-label="homepage">
        <img src="/assets/logo.svg" alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
      </Link>

      <div
        ref={sidebarRef}
        className={`absolute w-full max-w-[19.4375rem] bg-white top-16 right-smcontainer 
          flex-col gap-6  items-center shadow p-6 ${isSidebarOpen ? "flex" : "hidden"}
          lg:static lg:flex-row lg:flex lg:shadow-none lg:gap-10 lg:p-0 lg:bg-transparent lg:max-w-max
        `}
      >
        <ul className="flex flex-col gap-6 lg:flex-row lg:gap-10 "> 
          {LINKS.map((link) => (
            <li key={link.text}>
              <Link
                to={link.to}
                onClick={closeSidebar}
                className=" text-stress text-lg text-center font-bold lg:hover:underline lg:hover:underline-offset-4 "
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <span className="w-full h-0 border border-stress opacity-10 lg:border-none lg:rounded-full lg:bg-stress lg:p-[0.1875rem] "></span>
        <Link
          onClick={closeSidebar}
          to={LOGIN.to}
          className="text-stress text-lg text-center font-bold opacity-50 lg:hover:underline lg:hover:underline-offset-4 "
        >
          {LOGIN.text}
        </Link>
      </div>
      <button aria-label={"open menu"} onClick={toggleSidebar} className="lg:hidden">
        <img src={`/assets/icon-${isSidebarOpen ? "close" : "hamburger"}.svg`} alt="" />
      </button>
    </nav>
  );
};
