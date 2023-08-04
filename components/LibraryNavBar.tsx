import React, { useState, useRef, MutableRefObject } from "react";
import topics from "./utils/topics";
import { NextRouter, useRouter } from "next/router";
import TopicListModal from "./TopicListModal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";
import { Topic } from "./utils/types";
import { useMediaQuery } from "react-responsive";
import { useDimensions } from "./use-dimension";
import { motion } from "framer-motion";

const LibraryNavBar = () => {
  type Subtitle = {
    title: string;
    route: string;
  };

  const isMobile: boolean = useMediaQuery({ query: "(max-width: 634px)" });

  const dispatchFn = useAppDispatch();

  const navIndex = useAppSelector((state) => state.library.navIndex);

  const libraryIsVisible: boolean = useAppSelector(
    (state) => state.library.libraryVisible,
  );

  const router: NextRouter = useRouter();

  const containerRef: MutableRefObject<null> = useRef(null);

  const { height }: { height: number } = useDimensions(containerRef);

  const [topicIndex, setTopicIndex] = useState<undefined | number>();
  const [displayModal, setDisplaymodal] = useState<boolean>(false);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const topicPath: string = router.asPath.slice(9);

  const chosenTopic: Topic | undefined = topics.find(
    (topic: Topic): boolean | undefined => {
      const [subTitle]: Subtitle[] = topic.subTitles.filter(
        (subTitle: Subtitle): boolean => subTitle?.route === topicPath,
      );
      if (subTitle) return true;
    },
  );

  useEffect((): void => {
    const index: any = localStorage.getItem("NavOpenIndex");
    dispatchFn(libraryAction.setNavIndex(JSON.parse(index)));
    setTopicIndex(index);
  }, [dispatchFn]);

  return (
    <motion.div
      className={`flex mt-[8rem] sm:absolute sm:left-0 sm:top-[7rem] sm:mt-0 z-40 sm:bg-color-dark-blue ${
        libraryIsVisible
          ? "sm:opacity-100 sm:visible"
          : "sm:opacity-0 sm:invisible sm:-z-10"
      }`}
      initial={false}
      ref={containerRef}
      animate={!isMobile ? "open" : libraryIsVisible ? "open" : "closed"}
      custom={height}
      variants={sidebar}
    >
      <nav className="w-[8rem] sm:w-[7rem]  border-r border-color-border h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] ">
        <ul className="flex flex-col items-center pt-5">
          {topics.map((topic: Topic, i: number) => (
            <li
              key={i}
              className={`w-[70%] flex items-center  text-[2rem] justify-center h-[5rem] shadow-sm border-4 rounded-lg mb-5 font-extrabold  transition-all duration-200 ease-linear bg-color-white ${
                chosenTopic?.number === topic.number ||
                navIndex === topic.number
                  ? " border-color-light-blue text-color-light-blue"
                  : " border-color-dark-blue text-color-dark-blue"
              }  cursor-pointer`}
              onClick={(): void => {
                const index: any = topic.number;
                setDisplaymodal(true);
                setTopicIndex(index);
              }}
            >
              {topic.number}
            </li>
          ))}
        </ul>
      </nav>
      <TopicListModal
        index={topicIndex}
        setDisplay={setDisplaymodal}
        display={displayModal}
      />
    </motion.div>
  );
};

export default LibraryNavBar;
