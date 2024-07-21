/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";
import Image from "next/image";
import webHistory from "../../../public/assets/historyofweb.png";
import centralizedImg from "../../../public/assets/centralized.png";
import decentralizedImg from "../../../public/assets/decentralized.png";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";
import { useEffect } from "react";

const Web2AndWeb3 = () => {
  const next: Path = {
    path: "cryptography",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Card
      next={next}
      prev={undefined}
      title="The Web3 Revolution"
      bgImg={"bg-card-header"}
    >
      {/* <h3 className="mb-[2rem] font-semibold text-[2.5rem]">
        The Web3 Revolution
      </h3> */}
      <FadeInText>
        The World Wide Web changed how we access information, and Web2 changed
        how we interact online. Now, Web3 could revolutionize how agreements and
        value are exchanged. Web3 updates how data is stored behind the scenes
        on the Internet. It introduces a universal ledger where every
        transaction is recorded securely. This ledger uses network tokens to
        reward those who verify transactions, ensuring everything is accurate
        and trustworthy. The foundation of Web3 is built on blockchain networks
        or similar systems that spread out information across many computers.
      </FadeInText>
      <Image
        src={webHistory}
        alt="web history"
        className="w-[70%] md:w-[80%] sm:w-[95%] my-[4rem] mx-auto"
      />
      <FadeInText>
        The Internet we use today has some big problems. We don't have control
        over our data, and there's no built-in system for transferring value.
        Our current data systems are based on old concepts where data is stored
        on a central server and accessed by a client. Whenever we use the
        Internet, copies of our data are sent to the service provider's server,
        which means we lose control over it. This situation creates trust
        issues. Can we trust the people and organizations managing our data to
        protect it from corruption, whether intentional or accidental?
        Centralized data storage leads to concerns about security, privacy, and
        control of personal data. It also causes inefficiencies in the supply
        chain of goods and services.
      </FadeInText>
      <Image
        src={centralizedImg}
        alt="web history"
        className="w-[50%] md:w-[80%] sm:w-[95%]  h-[40rem] my-[4rem] mx-auto"
      />
      <p className="text-[2rem] text-center font-semibold mt-[2rem] mb-[4rem]">
        Data Monopoly (Single Point Of Failure)
      </p>
      <FadeInText className="my-[2rem]">
        In the early 1990s, the World Wide Web made the Internet easier to use
        with attractive and easy-to-navigate websites. Over time, the Internet
        grew and became more advanced. This led to the rise of Web2, which
        introduced social media, online shopping, and knowledge-sharing
        platforms. Web2 changed how we interact online, bringing people closer
        together for sharing information, buying, and selling goods and
        services. However, these interactions always required a middleman, like
        a platform, to facilitate and control the exchanges. Now, blockchain
        networks are driving the next version of the Internet, called Web3. Web3
        changes how data is stored and managed, creating a universal layer that
        all network computers manage together. This new layer allows for direct
        transactions between people without intermediaries, enabling true
        peer-to-peer (P2P) interactions. It all began with the creation of
        Bitcoin.
      </FadeInText>

      <Image
        src={decentralizedImg}
        alt="web history"
        className="w-[50%] md:w-[80%] sm:w-[95%]  h-[40rem] my-[4rem] mx-auto"
      />
      <p className="text-[2rem] text-center font-semibold mt-[2rem] mb-[4rem]">
        Data Sovereignity (No Single Point Of Failure)
      </p>
      <FadeInText>
        In Web3, lots of computers work together to take care of data. They
        follow special rules called a protocol, and everyone agrees on these
        rules to keep things safe. The people running these computers get
        tokens, like little rewards, for their help. These rules make sure that
        even if people don't know or trust each other, they can still make deals
        online. The universal layer that enables this is so secure, Imagine
        trying to sneak into one house with a fence and an alarm. That's like
        messing with data on a regular server. But Web3 is like having to sneak
        into many houses all over the world at the same time, each with its own
        fence and alarm. It's so hard and expensive that it's almost impossible
        to do.
      </FadeInText>
    </Card>
  );
};

export default Web2AndWeb3;
