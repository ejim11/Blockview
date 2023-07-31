import Link from "next/link";
import {motion,useScroll} from "framer-motion";
import {useRef} from "react";

interface PageNavButtons{
   path: string;
}

const Card: React.FC<{ children: React.ReactNode, prev ?: PageNavButtons , next ?: PageNavButtons , title?: string, bgImg?: string  }> = ({ children, prev, next, title, bgImg }) => {

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({container: containerRef});


  return (
    <section className=" w-[calc(100vw-8rem)] sm:w-[calc(100vw-4.5rem)] relative mt-[8rem] sm:mt-[7rem] h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] overflow-y-scroll  md:p-[3rem] sm:p-[1rem]" ref={containerRef} >
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed h-[1rem] top-[8rem] sm:top-[7rem] left-[8rem] sm:left-[4.5rem] right-0 origin-left w-full bg-color-light-blue z-20"
        />
        <div className={`w-full h-[20rem]  text-color-white text-[4rem] flex items-center px-[2rem]  bg-no-repeat bg-cover bg-center ${bgImg? bgImg: "bg-color-border"}`} >
            <p className={"logo-animation"}>{title}</p>
        </div>
      <div className=" w-full text-[1.7rem] bg-color-white  p-[3rem] sm:border-0 sm:p-0">
        {children}
      </div>
      <div className="my-[4rem] flex items-center">
      {prev && <Link href = {prev.path} className=" bg-color-dark-blue text-color-white border-color-dark-blue border rounded-lg block py-[1rem] px-[2rem] hover:bg-color-white transition-all duration-200 ease-in w-max hover:text-color-dark-blue capitalize font-semibold">prev</Link>}
      {next&& <Link href = {next.path} className="ml-auto bg-color-dark-blue text-color-white border-color-dark-blue border rounded-lg block py-[1rem] px-[2rem] hover:bg-color-white transition-all duration-200 ease-in w-max hover:text-color-dark-blue capitalize font-semibold">next</Link>}
      </div>
    </section>
  );
};

export default Card;
