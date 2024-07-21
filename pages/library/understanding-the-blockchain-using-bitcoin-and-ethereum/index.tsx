/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../../components/Card";
import Image from "next/image";
import nakamotoConImg from "../../../public/assets/nakamotoconsensus.png";
import dataIntImg from "../../../public/assets/DataIntegrity.png";
import stakedImg from "../../../public/assets/stakeconsensus.png";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const UnderstandingBlockchain = () => {
  const prev: Path = {
    path: "the-architecture-of-the-blockchain",
  };

  const next: Path = {
    path: "attacks-on-the-network",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title="Understanding The Blockchain Using Bitcoin And Ethereum"
      bgImg={"bg-card-header"}
    >
      <FadeInText>
        In the previous chapter, we mentioned that in order to change the ledger
        data on all copies of the ledger throughout the whole network, the
        network nodes(computers) need to reach a mutual agreement about such a
        change. This is called{" "}
        <span className="text-color-dark-blue font-semibold">Consensus</span> in
        the blockchain.
      </FadeInText>
      <FadeInText className="my-[1rem]">
        If We assume there are malicious nodes(computers) in the network.
        Therefore, the system must be able to withstand not only simple node
        failures(single computer failure) but also attacks to a certain extent.
      </FadeInText>
      <FadeInText>
        There are various consensus mechanisms used in the blockchain used by
        different networks to reach agreement on what is true or false in the
        network. For example, Bitcoin uses the{" "}
        <span className="text-color-dark-blue font-semibold">
          Nakamoto Consensus
        </span>{" "}
        which employs the longest chain rule while the Ethereum network uses a
        Proof-of-Stake based consensus mechanism.
      </FadeInText>
      <FadeInText className="mb-[1rem] mt-[2rem] font-semibold text-[2rem] text-color-dark-blue capitalize">
        consensus on the bitcoin network
      </FadeInText>
      <FadeInText>
        The Nakamoto consensus couples a Sybil protection mechanism of
        Proof-of-Work with the longest-chain rule, a novel consensus invented by
        Satoshi Nakamoto for Bitcoin in 2008. This means the node(computer) with
        the longest chain of blocks is the most correct and detailed node and
        thus network actors will choose it as the correct node(computer) in any
        dispute.
      </FadeInText>
      <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem] sm:p-[1rem] mb-[4rem]">
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          Thought Experiment
        </h3>
        <FadeInText className="my-[1rem]">
          Let's assume there is a dispute on the Bitcoin network between two
          nodes(computers). The network will choose the node with the longest
          chain of blocks as the correct block. This is because that node has
          more amount of verified history of the Bitcoin network than the other
          and as such can be trusted to give the correct state of the
          blockchain.
        </FadeInText>
        <Image
          src={nakamotoConImg}
          alt="nakamoto"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
      </div>
      <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
        Proof of Work Mechanism
      </h3>
      <FadeInText>
        Proof-of-work is a way for the Bitcoin network to decide which computer
        (node) figured out the puzzle first and added the latest batch of
        transactions (block) to the blockchain.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        Mining is the process of solving a complex computer problem by
        brute-forcing(guessing) a number(nounce) that when used with the rest of
        the block details generates a valid hash for the block. The process of
        solving the problem involves high computation which is the work done by
        the miner and proof of that work is broadcasted to the network to show
        which node solved the problem first, thus the name Proof-of-work. After
        broadcasting it to the network, that block is added to the blockchain
        and the miner incentivized for securing the network.
      </FadeInText>
      <FadeInText>
        A valid hash for a blockchain is a special code that meets specific
        rules. For example, it might need to start with three zeros. The more
        zeros needed, the harder the problem. A miner (computer) begins with a
        number called a nonce set to 0. The miner keeps changing the nonce by
        adding 1 each time and recalculating the hash. When the miner finds a
        nonce that makes the hash start with the required number of zeros, they
        have a valid hash.
      </FadeInText>
      <FadeInText className="  mb-[1rem] mt-[2rem]  font-semibold text-[2rem] text-color-dark-blue capitalize">
        Data Integrity On Blockchain Networks
      </FadeInText>
      <FadeInText>
        how do we make sure the state of the data is never corrupted in any way
        (ie, data lost, data maliciously manipulated, etc)? The next parts of
        the section touch on how difficult it is to manipulate data in a block
        that already has many blocks mined on top of it. Since data is an input
        variable for the hash of each block, changing the data will change that
        block's hash. The new hash will not have three leading zeros, and
        therefore becomes invalid. Manipulating data in a block that has been
        nested deeply in the chain is a fool's errand.
      </FadeInText>
      <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem] sm:p-[1rem]   mb-[4rem]">
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          Thought Experiment
        </h3>
        <FadeInText>
          To give an example: In Bitcoin's genesis block, Frank sent 10 BTC to
          Halley. Manipulating this value from 10 BTC to 20 BTC (Maybe Halley
          wants some more BTC!) would require IMMENSE computational power as
          halley will need to rehash other blocks, recall that more blocks are
          still being mined so halley will need to also hash the current blocks
          mined. This is not feasible as it requires so much computational power
          and resources.
        </FadeInText>
        <Image
          src={dataIntImg}
          alt="nakamoto"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
      </div>
      <h3 className=" mt-[2rem]  mb-[1rem] font-semibold text-[2rem] text-color-dark-blue capitalize">
        consensus on the ethereum network
      </h3>
      <FadeInText>
        The Ethereum network makes use of a Proof-of-Stake based mechanism to
        reach consensus on the state of their blockchain network.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        The Proof-of-Stake mechanism involves network actors staking a certain
        amount of network token choosen by the network. This ensures that
        network actors have a lot to loose if they choose to be malicious. These
        network actors are called <span>Validators</span> as all they do is to
        validate a block and broadcast to the network.
      </FadeInText>
      <FadeInText>
        In Proof-of-Stake, there is no need for mining or computational work as
        the network chooses which network participant gets to validate a block
        based on the proof of staked network tokens.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        On the Ethereum network, about 32ETH Tokens must be staked before
        becoming a validator on the network.
      </FadeInText>
      <Image
        src={stakedImg}
        alt="staked"
        className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
      />
    </Card>
  );
};

export default UnderstandingBlockchain;
