import topics from "./utils/topics";
import { Topic } from "./utils/types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const TopicListModal = ({
  index,
  display,
  setDisplay,
  setIndex,
  setNavOpen,
}: {
  index: number | undefined;
  display: boolean;
  setIndex: Function;
  setDisplay: Function;
  setNavOpen: Function;
}) => {
  console.log(index);

  const router = useRouter();

  console.log(router);

  const closeTopicListModal: any = (e: {
    target: { dataset: { close: string } };
  }) => {
    if (e.target.dataset.close) {
      setDisplay(false);
    }
  };

  const [subList, setSubList] = useState("");

  useEffect(() => {
    const item: any = localStorage.getItem("item");
    setSubList(item);
  }, []);

  const topic: Topic | undefined = topics.find(
    (topic: Topic) => topic.number === index
  );

  const libraryId = router.query.libraryId;

  return (
    <div
      className={`h-[calc(100vh-3.6rem)] left-[6rem] z-5 top-[3.6rem] w-[calc(100vw-6rem)] absolute bg-color-bg-transparent cursor-pointer transition-all duration-150 ease-linear ${
        display ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
      data-close={"close-modal"}
      onClick={closeTopicListModal}
    >
      <div className="w-[40%] sm:w-full bg-color-white h-full cursor-default ">
        <div className="w-full shadow-sm">
          <p className="w-[80%]  font-semibold text-2xl py-2 px-4  text-color-dark-blue">
            {topic?.title}
          </p>
        </div>

        <ul className="">
          {topic?.subTitles.map((item: string, i: number) => (
            <li
              key={i}
              className={`shadow-sm px-4 py-2 text-base font-medium hover:text-color-light-blue cursor-pointer  ${
                libraryId === item.toLowerCase() ||
                subList?.toLowerCase() === item.toLowerCase()
                  ? "text-color-light-blue"
                  : "text-color-dark-blue-2"
              }`}
              onClick={() => {
                router.push(`/library/${item.toLowerCase()}`);
                setDisplay(false);
                setNavOpen(topic.number);
                localStorage.setItem(
                  "NavOpenIndex",
                  JSON.stringify(topic.number)
                );
                setSubList(item);
                localStorage.setItem("item", item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicListModal;
