/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/customHooks";
import { libraryAction } from "../../slices/librarySlice";
// import homeData from "../../components/utils/homeData";
import bg from "../../public/assets/worldblock.jpeg";
import { motion } from "framer-motion";
// import { HomeData } from "../../components/utils/types";

export default function Home(): JSX.Element {
  const dispatchFn = useAppDispatch();

  const textDownVariant = {
    up: {
      opacity: 0,
      y: -40,
    },
    down: {
      opacity: 1,
      y: 0,
      ease: "easeInOut",
    },
  };

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
      <div className="flex flex-col w-full">
        <main className="flex w-full flex-col">
          <section
            style={{
              backgroundImage: `linear-gradient(#06283D, #1365df74), url(${bg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
            className="  w-full shadow-xl  h-screen text-color-white flex flex-col items-center justify-center text-center px-[4rem] sm:px-[2rem]"
          >
            <motion.h1
              initial="up"
              animate="down"
              transition={{ duration: 0.7 }}
              variants={textDownVariant}
              className="text-[5.5rem] sm:text-[3.5rem]"
            >
              The Future of Finance: The Blockchain
            </motion.h1>
            <motion.p
              className="text-[2rem] mt-2 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Discover profound insights into blockchain's transformative
              influence on business, economy, and society.
            </motion.p>
          </section>
          {/* <section className="py-[8rem] px-[10rem] xlg:px-[5rem] sm:px-[2rem] grid grid-cols-view-grid gap-[3rem]">
            {homeData.map((data: HomeData, i) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                key={data.title}
                className={`border border-color-dark-blue bg-color-dark-blue text-color-white rounded-lg p-[1.5rem]`}
              >
                <p className="text-[2rem] text-center">{data.title}</p>
                <p className="text-justify mt-[1.5rem]">{data.text}</p>
              </motion.div>
            ))}
          </section> */}
        </main>
        {/* <footer className="px-[3rem]">
          <p className="border-t border-color-dark-blue w-full py-[2rem] text-[1.4rem] text-center">
            Blockview © copyright 2024
          </p>
        </footer> */}
      </div>
    </>
  );
}
