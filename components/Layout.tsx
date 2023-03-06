import Next from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUncharted } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
import LibraryNavBar from "./LibraryNavBar";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [displayNav, setDisplayNav] = useState(false);

  const links: { path: string; title: string; min: string }[] = [
    { path: "/", title: "Home", min: "home" },
    { path: "/library", title: "Library", min: "library" },
    { path: "/explorer", title: "Explorer", min: "explorer" },
  ];

  const mainRoute = useAppSelector((state) => state.library.mainRoute);

  const dispatchFn = useAppDispatch();

  const routePath: string = useRouter().pathname;

  useEffect(() => {
    const storedRoute: any = localStorage.getItem("mainRoute");
    if (storedRoute) {
      dispatchFn(libraryAction.setMainRoute(storedRoute));
    }
  }, [dispatchFn]);

  console.log(mainRoute);

  const toggleNavDisplay = () => {
    setDisplayNav((prevState) => !prevState);
  };

  return (
    <div className="sm:relative w-screen h-screen ">
      <header className="flex items-center h-14 px-5  border-b border-color-border">
        <FaUncharted className="text-color-dark-blue mr-2 w-6 h-6" />
        <a className="text-color-dark-blue text-2xl font-bold tracking-wide">
          BLOCKVIEW
        </a>
        {!displayNav && (
          <RiMenu3Fill
            className="hidden sm:block ml-auto w-6 h-6"
            onClick={toggleNavDisplay}
          />
        )}
        <nav
          className={`ml-auto sm:absolute sm:h-screen sm:flex sm:top-0 sm:w-full sm:left-0 sm:ml-0 sm:transition-all sm:bg-color-bg-transparent z-10  sm:duration-300 ${
            displayNav ? " sm:translate-x-0" : "sm:-translate-x-full"
          }`}
          data-close="closeNavModal"
          onClick={(e: any) => {
            if (e.target.dataset.close) {
              toggleNavDisplay();
            }
          }}
        >
          <ul className="flex items-center sm:flex-col sm:bg-color-dark-blue sm:w-[75%] sm:pt-4 ">
            {links.map((item, i) => (
              <li key={i} className="sm:w-full sm:my-2">
                <Link
                  onClick={() => {
                    toggleNavDisplay();
                    dispatchFn(libraryAction.setMainRoute(item.min));
                  }}
                  href={item.path}
                  className={`ml-4 text-lg sm:ml-0   sm:px-4 sm:py-4 ${
                    mainRoute === item.min
                      ? "text-color-dark-blue-2 sm:text-color-light-blue"
                      : "text-[#84A9AC] sm:text-color-white"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <RxCross1
            className="hidden sm:block ml-auto w-6 h-6 mt-4 mr-4"
            onClick={toggleNavDisplay}
          />
        </nav>
      </header>
      <main className="flex w-full  ">
        {routePath.includes("library") && <LibraryNavBar />}
        {children}
      </main>
    </div>
  );
};

export default Layout;
