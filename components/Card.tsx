import Link from "next/link";
import {motion,useScroll} from "framer-motion";
import {MutableRefObject, useRef} from "react";
import {RiBook3Line} from "react-icons/ri"
import {useAppDispatch} from "../hooks/customHooks";
import {libraryAction} from "../slices/librarySlice";

interface PageNavButtons{
   path: string;
}

const Card: React.FC<{ children: React.ReactNode, prev ?: PageNavButtons , next ?: PageNavButtons , title?: string, bgImg?: string  }> = ({ children, prev, next, title, bgImg }) => {

    const dispatch = useAppDispatch()

    const containerRef: MutableRefObject<null> = useRef(null)

    const { scrollYProgress } = useScroll({container: containerRef});

    const displayLibraryHandler = ():void => {
        console.log("visible")
        dispatch(libraryAction.displayLibrary(true))
    }

  return (
    <section className=" w-[calc(100vw-8rem)]  sm:w-full relative mt-[8rem] sm:mt-[7rem] h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] overflow-y-scroll  " ref={containerRef} >
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed h-[1rem] top-[8rem] sm:top-[7rem] left-[8rem] sm:left-0 right-0 origin-left w-full bg-color-light-blue z-20"
        />
        <div className={`w-full h-[22rem]  py-[1.5rem]  text-color-white text-[4rem] flex sm:flex-col sm:items-start items-center px-[2rem]   bg-no-repeat bg-cover bg-center ${bgImg? bgImg: "bg-color-border"}`} >
            <motion.div className={"sm:flex hidden w-[3.5rem] h-[3.5rem] rounded-full bg-color-white items-center text-color-dark-blue my-[2rem] justify-center"} onClick={displayLibraryHandler}>
                <RiBook3Line className = {"w-[2.5rem] h-[2.5rem]"}/>
            </motion.div>
            <p className={"logo-animation "}>{title}</p>
        </div>
      <div className=" w-full text-[1.7rem] bg-color-white  p-[3rem] sm:border-0 sm:p-[2rem]">
        {children}
      </div>
      <div className="my-[4rem] flex items-center p-[2rem]">
      {prev && <Link href = {prev.path} className=" bg-color-dark-blue text-color-white border-color-dark-blue border rounded-lg block py-[1rem] px-[2rem] hover:bg-color-white transition-all duration-200 ease-in w-max hover:text-color-dark-blue capitalize font-semibold">prev</Link>}
      {next&& <Link href = {next.path} className="ml-auto bg-color-dark-blue text-color-white border-color-dark-blue border rounded-lg block py-[1rem] px-[2rem] hover:bg-color-white transition-all duration-200 ease-in w-max hover:text-color-dark-blue capitalize font-semibold">next</Link>}
      </div>
    </section>
  );
};

export default Card;
