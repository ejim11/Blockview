import Next from "next";
import topics from "../../components/utils/topics";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../hooks/customHooks";
import { libraryAction } from "../../slices/librarySlice";
import Card from "../../components/Card";

const ResourceLibrary = () => {
  const dispatchFn = useAppDispatch();
  const router = useRouter();

  const topicsList = topics.map((topic, i) => (
    <li key={i} className="mb-5">
      <span className="text-color-dark-2 font-medium">{topic.title}</span>
      <ul>
        {topic.subTitles.map((subTitle: string, i: number) => (
          <li
            key={i}
            onClick={() => {
              router.push(
                `/library/${subTitle
                  .toLowerCase()
                  .slice()
                  .split(" ")
                  .join("-")}`
              );
              dispatchFn(libraryAction.setNavIndex(topic.number));
              dispatchFn(libraryAction.setSubItem(subTitle));
            }}
          >
            <Link href={`/library/${subTitle.toLowerCase()}`}>{subTitle}</Link>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className=" w-[calc(100vw-6rem)] h-[calc(100vh-3.5rem)] overflow-y-auto  py-12 px-14 ">
      <div className=" w-full bg-color-white border border-color-border rounded-lg p-5">
        <h2 className="text-3xl font-medium text-color-dark-blue mb-2">
          Welcome,
        </h2>
        <p
          onClick={() => {
            router.push("/library/web2vs-web3");
          }}
        >
          {" "}
          show
        </p>
        <p className="my-2 ">
          Web 3 and blockchain are two of the most revolutionary technologies of
          the 21st century. They are transforming the way we do business,
          interact with each other, and access information. Web 3 is the next
          generation of the internet, which will enable users to access services
          and products more securely, conveniently, and efficiently than ever
          before.
        </p>
        <p>
          Blockchain is a distributed ledger technology that provides a secure,
          tamper-proof, and immutable record of digital transactions. Together,
          Web 3 and blockchain can enable the development of a new digital
          economy where data, money, and services can be exchanged with trust
          and transparency. This new digital economy will have the potential to
          create new opportunities and disrupt existing markets, while creating
          a more equitable and secure digital landscape.
        </p>
        <p className="my-2 ">
          We are going to dive deep and discover what the blockchain is and its
          uses mainly in providing a secure and transparent network.
        </p>
        <p className="text-2xl text-color-dark-blue mb-2 mt-4 font-medium">
          Topics
        </p>
        <ul>{topicsList}</ul>
      </div>
    </section>
  );
};

export default ResourceLibrary;
