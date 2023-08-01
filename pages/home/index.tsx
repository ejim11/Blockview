import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/customHooks";
import { libraryAction } from "../../slices/librarySlice";
import homeData from "../../components/utils/homeData";
import Link from "next/link";
import bg from "../../public/assets/worldblock.jpeg"
import {motion} from "framer-motion";
import {HomeData} from "../../components/utils/types";

export default function Home(): JSX.Element {
    // types
    type HomeBtnLink = {
        title: string,
        path: string
    }

  const dispatchFn = useAppDispatch();

    const homeBtnLinks : HomeBtnLink[] = [
        {
            title: "Get started",
            path: "/library"
        },
        {
            title: "Explorer",
            path: "/explorer"
        }
    ]

    const textDownVariant = {
        up: {
            opacity: 0, y: -40,
        },
        down: {
            opacity: 1, y: 0, ease: 'easeInOut',
        },
    }

    useEffect((): void => {
        const storedNavIndex: any = localStorage.getItem("NavOpenIndex");
        const index = JSON.parse(storedNavIndex);
        const storedSubItem: any = localStorage.getItem("item");

        dispatchFn(libraryAction.setNavIndex(index));
        dispatchFn(libraryAction.setSubItem(storedSubItem));
    });


  return (
    <>
      <Head>
        <title>Blockview</title>
        <meta
          name="description"
          content={"Blockview: Get the best insights on blockchain"}
        />
      </Head>
      <div className="flex flex-col">
      <main className="flex w-full flex-col">

        <section style={{
      backgroundImage: `linear-gradient(#06283D, #1365df74), url(${bg.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }} className=" home-page-clip   h-screen text-color-white flex flex-col items-center justify-center text-center px-8 sm:px5">
          <motion.h1 initial = "up" animate = "down"  transition = {{duration: .7}} variants = {textDownVariant} className="text-[5.5rem] sm:text-[3.5rem]">
            The Future of Finance: The Blockchain
          </motion.h1>
          <motion.p className="text-[2rem] mt-2 " initial={{opacity: 0}} animate={ {opacity: 1}} transition={{duration: 1}}>
            Get the best abstracted insights on blockchain technology and its
            impacts on business, economy, and life.
          </motion.p>
          <div className="text-[1.8rem] mt-[3rem] sm:flex  sm:w-full sm:justify-center ">
            {
              homeBtnLinks.map((link:HomeBtnLink, index: number) => {
                              return (
                                <Link  href={link.path} key={index} className="fade-in mr-[3rem] sm:mr-[2rem] sm:last:mr-0 sm:mb-4 border rounded-lg px-[2rem] py-[1rem] border-color-dark-blue bg-color-white text-color-dark-blue hover:text-color-light-blue transition-all duration-200 ease-in">
                                    {link.title} 
                                </Link>
                              )
                            })
            }
          </div>
        </section>
        <section className="py-[8rem] px-[10rem] xlg:px-[5rem] sm:px-[2rem]">
         {homeData.map((data: HomeData,i: number) =>
             <motion.div  initial={{ opacity: 0, y: 200 }} transition = {{duration: 1}} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} key={i} className="flex items-center  justify-between my-[8rem] sm:px-5 mt-12 md:flex-col">
            <div className={`w-[45%] xmd:w-[50%]  md:w-full md:text-center ${i%2 === 0 ? "order-1": "order-2 md:order-1"}`}>
              <h3 className="text-[3.5rem] text-color-dark-blue sm:text-[3rem] ">
                {data.title}
              </h3>
              <p className="mt-4 text-[1.8rem] text-justify xmd:text-center">
               {data.text}
              </p>
            </div>
             <div className={`overflow-hidden rounded-lg w-[45%] md:w-[80%] sm:w-[95%] md:mt-[2rem] shadow-2xl  h-[40rem] ${i%2 === 0 ? "order-2": "order-1 md:order-2"}`}>
                 <Image
                     src={data.image}
                     alt={data.title}
                     className={`w-full h-full hover:scale-110 transition-all duration-200 ease-in rounded-lg   md:mx-auto `}
                 />
             </div>
          </motion.div>)}
        </section>
      </main>
      <footer className="px-[3rem]">
     <p className="border-t border-color-light-blue w-full py-[2rem] text-[1.4rem] text-center">
© copyright  2023
     </p>
      </footer>
      </div>
    </>
  );
}
