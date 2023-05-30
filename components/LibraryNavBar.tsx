import React, { useState } from "react";
import topics from "./utils/topics";
import { useRouter } from "next/router";
import TopicListModal from "./TopicListModal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";

const LibraryNavBar = () => {
  const router = useRouter();

  const topicPath: string = router.asPath.slice(9);

  const chosenTopic = topics.find((topic) => {
    const [subTitle] = topic.subTitles.filter(
      (subTitle) => subTitle?.route === topicPath
    );
    if (subTitle) return true;
  });

  const dispatchFn = useAppDispatch();

  const navIndex = useAppSelector((state) => state.library.navIndex);

  const [topicIndex, setTopicIndex] = useState();
  const [displayModal, setDisplaymodal] = useState(false);

  useEffect(() => {
    const index: any = localStorage.getItem("NavOpenIndex");
    dispatchFn(libraryAction.setNavIndex(JSON.parse(index)));
  }, [dispatchFn]);

  return (
    <div
      className="flex mt-[8rem] sm:mt-[7rem]
    "
    >
      <nav className="w-[8rem] sm:w-[7rem]  border-r border-color-border h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] ">
        <ul className="flex flex-col items-center pt-5">
          {topics.map((topic, i) => (
            <li
              key={i}
              className={`w-[70%] flex items-center  text-[2rem] justify-center h-[5rem] shadow-sm border-4 rounded-lg mb-5 font-extrabold  transition-all duration-200 ease-linear bg-color-white ${
                chosenTopic?.number === topic.number ||
                navIndex === topic.number
                  ? " border-color-light-blue text-color-light-blue"
                  : " border-color-dark-blue text-color-dark-blue"
              }  cursor-pointer`}
              onClick={() => {
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
    </div>
  );
};

export default LibraryNavBar;
