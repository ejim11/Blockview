import React, { useState } from "react";
import topics from "./utils/topics";
import { useRouter } from "next/router";
import TopicListModal from "./TopicListModal";
import { useEffect } from "react";

const LibraryNavBar = () => {
  const router = useRouter();

  const [topicIndex, setTopicIndex] = useState();
  const [displayModal, setDisplaymodal] = useState(false);
  const [navIndexOpen, setNavIndexOpen] = useState(undefined);

  useEffect(() => {
    const index: any = localStorage.getItem("NavOpenIndex");
    setNavIndexOpen(JSON.parse(index));
  }, []);

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
              className={`w-[70%] flex items-center justify-center h-14 shadow-sm border rounded-lg mb-5 font-extrabold  text-color-white transition-all duration-200 ease-linear ${
                navIndexOpen === topic.number
                  ? "bg-color-light-blue border-color-light-blue"
                  : "bg-color-dark-blue border-color-dark-blue"
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
        setNavOpen={setNavIndexOpen}
      />
    </div>
  );
};

export default LibraryNavBar;
