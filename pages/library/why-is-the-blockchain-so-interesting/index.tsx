/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";
import doubleSpendingImg from "../../../public/assets/doublespending.png";
import noRespend from "../../../public/assets/protected.png";
import { Path } from "../../../components/utils/types";

import Image from "next/image";
import FadeInText from "../../../components/FadeInText";

const WhyTheBlockchainIsInteresting = () => {
  const prev: Path = {
    path: "how-the-blockchain-uses-cryptography",
  };

  const next: Path = {
    path: "the-architecture-of-the-blockchain",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title="Why is the blockchain so interesting?"
      bgImg={"bg-card-header"}
    >
      <FadeInText>
        Blockchain networks are like groups of computers working together. They
        create a shared data set that everyone can trust, even if they don't
        know each other. Each computer in the network keeps an unchangeable copy
        of this data and helps manage it.
      </FadeInText>
      <div className="bg-[#f1f3f5] p-[2rem] sm:p-[1rem] rounded-lg mt-[2rem]">
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          Thought Experiment
        </h3>
        <FadeInText className="capitalize font-semibold text-color-dark-blue text-[2rem] mt-[3rem] ">
          Double-Spending Problem:
        </FadeInText>
        <FadeInText className="my-[1rem]">
          This new form of distributed data management resolved the
          double-spending problem over the Internet. The way the Internet is
          designed today, one can spend the same value issued as a digital file
          multiple times, because digital information can be copied, and copies
          of that same digital file can be sent from one computer to multiple
          other computers at the same time.
        </FadeInText>
        <Image
          src={doubleSpendingImg}
          alt="double spending"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
        <FadeInText>
          The Bitcoin protocol has a clever way to make copying digital money
          difficult. It groups transactions into batches called "blocks" and
          locks each block with a special code called a "hash." This hash works
          like a unique fingerprint for the block. Each block also has a special
          number called a "nonce" and includes the hash of the previous block,
          connecting them together in a chain. This chain of blocks, or
          "blockchain," ensures that every block is linked back to the very
          first one. This system makes sure all the blocks are secure and stops
          hackers or bad users from spending the same money twice.
        </FadeInText>
        <Image
          src={noRespend}
          alt="double spending"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
      </div>
    </Card>
  );
};

export default WhyTheBlockchainIsInteresting;
