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
    <nav className="mt-9 ctn relative flex justify-between items-center">
      <Link to="/">
        <img src="/assets/logo.svg" alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
      </Link>

      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed w-full max-w-[19.4375rem] bg-white top-[6.25rem] right-smcontainer flex flex-col gap-6  items-center shadow p-6 "
        >
          <ul className="flex flex-col gap-6 ">
            {LINKS.map((link) => (
              <li key={link.text}>
                <Link to={link.to} className=" text-stress text-lg text-center font-bold">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <span className="w-full h-0 border border-stress opacity-10"></span>
          <Link
            to={LOGIN.to}
            className="text-stress text-lg text-center font-bold opacity-50"
          >
            {LOGIN.text}
          </Link>
        </div>
      )}

      <button aria-label={"open menu"} onClick={toggleSidebar}>
        <img src={`/assets/icon-${isSidebarOpen ? "close" : "hamburger"}.svg`} alt="" />
      </button>
    </nav>
  );
};
