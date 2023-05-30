import topics from "./utils/topics";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { libraryAction } from "../slices/librarySlice";

const TopicListModal = ({
  index,
  display,
  setDisplay,
}: {
  index: number | undefined;
  display: boolean;
  setDisplay: Function;
}) => {
  const router = useRouter();

  const dispatchFn = useAppDispatch();

  const subItem = useAppSelector((state) => state.library.subItem);

  const topicPath: string = router.asPath.slice(9);

  useEffect(() => {
    const route: any = localStorage.getItem("item");
    dispatchFn(libraryAction.setSubItem(route));
    // dispatchFn(libraryAction.setNavIndex(topic.number));
  }, [dispatchFn,subItem]);

  const closeTopicListModal: any = (e: {
    target: { dataset: { close: string } };
  }) => {
    if (e.target.dataset.close) {
      setDisplay(false);
    }
  };

  const topic: any = topics.find((topic: any) => topic.number === index);

  return (
    <div
      className={`h-[calc(100vh-8rem)] left-[8rem] sm:left-[7rem] text-[1.8rem] z-5 top-[8rem] w-[calc(100vw-6rem)] sm:w-[calc(100vw-7rem)] absolute bg-color-bg-transparent cursor-pointer transition-all duration-150 ease-linear ${
        display ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
      data-close={"close-modal"}
      onClick={closeTopicListModal}
    >
      <div
        className="w-[40%] sm:w-full bg-color-white h-full cursor-default "
        data-close={"close-modal"}
        onClick={closeTopicListModal}
      >
        <div className="w-full border-b border-color-border">
          <p className="w-[80%]  font-semibold text-[2.5rem] px-[2rem] py-[1.5rem]   text-color-dark-blue">
            {topic?.title}
          </p>
        </div>

        <ul className="">
          {topic?.subTitles.map(
            (item: { title: string; route: string }, i: number) => (
              <li
                key={i}
                className={`border-b border-color-border px-[2rem] py-[1.5rem]  font-medium hover:text-color-light-blue cursor-pointer  ${
                  topicPath === item.route || subItem === item.route
                    ? "text-color-light-blue"
                    : "text-color-dark-blue-2"
                }`}
                onClick={() => {
                  router.push(`/library/${item.route}`);
                  dispatchFn(libraryAction.setSubItem(item.route));
                  dispatchFn(libraryAction.setNavIndex(topic.number));

                  setDisplay(false);
                }}
              >
                {item.title}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopicListModal;
