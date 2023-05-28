/* eslint-disable react/no-unescaped-entities */
import next from "next";
import Card from "../../../components/Card";
import doubleSpendingImg from "../../../public/assets/doublespending.png"
import noRespend from "../../../public/assets/NoRespend.png"

import Image from "next/image";

const WhyTheBlockchainIsInteresting = () => {
  return <Card prev={undefined} next={undefined}>
    <h3 className="mb-[2rem] font-semibold text-[2.5rem] text-color-dark-blue capitalize">Why is the blockchain so interesting?</h3>
    <p>
      Blockchain networks build on the idea of P2P networks, providing a universal data set that every actor can trust, even though they might not know or trust each other. Immutable copies of that data are stored and managed on every node in the network. 
    </p>
    <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem]">
    <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">Thought Experiment</h3>
    <p className="capitalize font-semibold text-color-dark-blue text-[2rem] mt-[3rem] ">Double-Spending Problem:</p>
  <p className="my-[1rem]">
       This new form of distributed data management resolved the double-spending problem over the Internet. The way the Internet is designed today, one can spend the same value issued as a digital file multiple times, because digital information can be copied, and copies of that same digital file can be sent from one computer to multiple other computers at the same time.
  </p>
  <Image src={doubleSpendingImg} alt = "double spending" className="w-[70%] my-[4rem] mx-auto" />
  <p>
  The Bitcoin protocol introduced a mechanism of making it expensive to copy digital values by recording transactions in batches of data called "blocks" that are "hashed" with a key. This cryptographic hash creates a digital
      fingerprint of the block of transactions. Each block has a nonce and includes the hash of the prior block, thereby linking one block with another into a chain of blocks. This process guarantees the historic integrity of all the blocks back to the first block, thereby preventing the re-spending of a transaction from a hacker or malicious user in the network. 
  </p>
  <Image src={noRespend} alt = "double spending" className="w-[70%] my-[4rem] mx-auto" />
    </div>
   

  </Card>
};

export default WhyTheBlockchainIsInteresting;
