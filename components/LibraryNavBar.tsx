import React, { useState } from "react";
import topics from "./utils/topics";
import { useRouter } from "next/router";
import TopicListModal from "./TopicListModal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";

const LibraryNavBar = () => {
  const router = useRouter();

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
      className="flex  
    "
    >
      <nav className="w-[6rem]  border-r border-color-border h-[calc(100vh-3.5rem)] ">
        <ul className="flex flex-col items-center pt-5">
          {topics.map((topic, i) => (
            <li
              key={i}
              className={`w-[70%] flex items-center justify-center h-14 shadow-sm border-4 rounded-lg mb-5 font-extrabold  transition-all duration-200 ease-linear bg-color-white ${
                navIndex === topic.number
                  ? " border-color-light-blue text-color-light-blue"
                  : " border-color-dark-blue text-color-dark-blue"
              }  text-xl cursor-pointer`}
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
        setIndex={setTopicIndex}
        setDisplay={setDisplaymodal}
        display={displayModal}
      />
    </div>
  );
};

export default LibraryNavBar;
