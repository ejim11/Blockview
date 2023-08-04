import topics from "../../components/utils/topics";
import Link from "next/link";
import { libraryAction } from "../../slices/librarySlice";
import Card from "../../components/Card";
import { useAppDispatch } from "../../hooks/customHooks";
import { Topic } from "../../components/utils/types";

const ResourceLibrary = () => {
  const dispatchFn = useAppDispatch();

  const topicsList: JSX.Element[] = topics.map((topic: Topic, i: number) => (
    <li key={i}>
      <p className="text-color-dark-2 font-medium capitalize w-full px-[2rem] py-[1rem] bg-color-dark-blue text-color-white">
        {topic.title}
      </p>
      <ul>
        {topic.subTitles.map(
          (
            subTitle: { title: string; route: string } | undefined,
            i: number,
          ) => (
            <li
              key={i}
              onClick={() => {
                dispatchFn(libraryAction.setSubItem(subTitle?.route));
                dispatchFn(libraryAction.setNavIndex(topic.number));
              }}
            >
              <Link
                href={`/library/${subTitle?.route}`}
                className={`capitalize hover:text-color-light-blue transition-all duration-200 ease-in px-[2rem] py-[1rem] flex w-full ${
                  i % 2 === 0 ? "bg-color-border" : ""
                }`}
              >
                {subTitle?.title}
              </Link>
            </li>
          ),
        )}
      </ul>
    </li>
  ));

  return (
    <Card title="Welcome" bgImg={"bg-card-header"}>
      <p className="my-2  ">
        Web 3 and blockchain stand as two transformative technologies in the
        21st century, reshaping business, communication, and information access.
        Web 3 represents the future of the internet, promising enhanced
        security, convenience, and efficiency in accessing services and
        products.
      </p>
      <p>
        Blockchain, a decentralized ledger technology, ensures secure,
        unchangeable records of digital transactions. By combining Web 3 and
        blockchain, a novel digital economy emerges, facilitating trustworthy
        exchanges of data, money, and services. This holds potential to disrupt
        markets, generate opportunities, and establish a more just and secure
        digital realm.
      </p>
      <p className="my-2 ">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's delve into an in-depth exploration of blockchain, spotlighting its
        role in establishing a secure and transparent transaction network.
      </p>
      <ul className={"mt-[3rem] border border-color-border rounded-lg"}>
        {topicsList}
      </ul>
      <p className={"mt-[2rem]"}>
        Most of the information in the library is gotten from a book on token
        economy by Shermin Voshmgir. You can purchase it at{" "}
        <a
          href="https://www.amazon.com/Token-Economy-Web3-reinvents-Internet/dp/3982103819/ref=sr_1_1?crid=C28NZ3X659XQ&keywords=token+economy&qid=1685391333&sprefix=token+economy%2Caps%2C458&sr=8-1"
          className="text-color-light-blue"
          target="blank"
        >
          Token Economy: How the Web3 reinvents the Internet (Token Economy: How
          the Web3 reinvents the internet)
        </a>{" "}
        for a deeper insight.
      </p>
    </Card>
  );
};

export default ResourceLibrary;
