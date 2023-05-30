import Next from "next";
import topics from "../../components/utils/topics";
import Link from "next/link";
import { useRouter } from "next/router";
import { libraryAction } from "../../slices/librarySlice";
import Card from "../../components/Card";
import { useAppDispatch } from "../../hooks/customHooks";

const ResourceLibrary = () => {
  const router = useRouter();
  const dispatchFn = useAppDispatch();

  const topicsList = topics.map((topic, i) => (
    <li key={i} className="mb-5">
      <span className="text-color-dark-2 font-medium capitalize">{topic.title}</span>
      <ul>
        {topic.subTitles.map(
          (
            subTitle: { title: string; route: string } | undefined,
            i: number
          ) => (
            <li
              key={i}
              onClick={() => {
                dispatchFn(libraryAction.setSubItem(subTitle?.route));
                dispatchFn(libraryAction.setNavIndex(topic.number));
              }}
            >
              <Link href={`/library/${subTitle?.route}`} className="capitalize hover:text-color-light-blue transition-all duration-200 ease-in">
                {subTitle?.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </li>
  ));

  return (
    <Card prev = {undefined} next = {undefined}>
      <h2 className="text-[3rem] font-medium text-color-dark-blue mb-2">
        Welcome,
      </h2>
      <p className="my-2  ">
        Web 3 and blockchain are two of the most revolutionary technologies of
        the 21st century. They are transforming the way we do business, interact
        with each other, and access information. Web 3 is the next generation of
        the internet, which will enable users to access services and products
        more securely, conveniently, and efficiently than ever before.
      </p>
      <p>
        Blockchain is a distributed ledger technology that provides a secure,
        tamper-proof, and immutable record of digital transactions. Together,
        Web 3 and blockchain can enable the development of a new digital economy
        where data, money, and services can be exchanged with trust and
        transparency. This new digital economy will have the potential to create
        new opportunities and disrupt existing markets, while creating a more
        equitable and secure digital landscape.
      </p>
      <p className="my-2 ">
        We are going to dive deep and discover what the blockchain is and its
        uses mainly in providing a secure and transparent network for transactions.
      </p>
      <p className="text-[2rem] text-color-dark-blue mb-2 mt-[3rem] font-medium">
        Topics
      </p>
      <ul >{topicsList}</ul>
      <p>
        Most of the information in the library is gotten from a book on tokens by Shermin Voshmgir. You can purchase it at <a href="https://www.amazon.com/Token-Economy-Web3-reinvents-Internet/dp/3982103819/ref=sr_1_1?crid=C28NZ3X659XQ&keywords=token+economy&qid=1685391333&sprefix=token+economy%2Caps%2C458&sr=8-1" className="text-color-light-blue" target="blank">Token Economy: How the Web3 reinvents the Internet (Token Economy: How the Web3 reinvents the internet)</a> for a deeper understanding.
      </p>
    </Card>
  );
};

export default ResourceLibrary;
