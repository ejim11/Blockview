import topics from "./utils/topics";
import { Topic } from "./utils/types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";

const TopicListModal = ({
  index,
  display,
  setDisplay,
  setIndex,
}: {
  index: number | undefined;
  display: boolean;
  setIndex: Function;
  setDisplay: Function;
}) => {
  const dispatchFn = useAppDispatch();

  const router = useRouter();

  const subItem = useAppSelector((state) => state.library.subItem);

  const closeTopicListModal: any = (e: {
    target: { dataset: { close: string } };
  }) => {
    if (e.target.dataset.close) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    const item: any = localStorage.getItem("item");
    dispatchFn(libraryAction.setSubItem(item));
  }, [dispatchFn]);

  const topic: Topic | undefined = topics.find(
    (topic: Topic) => topic.number === index
  );

  const libraryId = router.query.libraryId;

  return (
    <div
      className={`h-[calc(100vh-3.5rem)] left-[6rem] z-5 top-[3.6rem] w-[calc(100vw-6rem)] absolute bg-color-bg-transparent cursor-pointer transition-all duration-150 ease-linear ${
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
                subItem?.toLowerCase() === item.toLowerCase()
                  ? "text-color-light-blue"
                  : "text-color-dark-blue-2"
              }`}
              onClick={() => {
                router.push(
                  `/library/${item.toLowerCase().slice().split(" ").join("-")}`
                );
                setDisplay(false);
                dispatchFn(libraryAction.setNavIndex(topic.number));
                dispatchFn(libraryAction.setSubItem(item));
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
