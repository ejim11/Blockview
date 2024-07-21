/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../../components/Card";
import Image from "next/image";
import networkAttackImg from "../../../public/assets/networkattack.png";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const NetworkAttacks = () => {
  const prev: Path = {
    path: "understanding-the-blockchain-using-bitcoin-and-ethereum",
  };

  const next: Path = {
    path: "making-transactions-on-a-blockchain-network",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title="Network Attacks"
      bgImg={"bg-card-header"}
    >
      <h3 className="mb-[2rem] font-semibold text-[2.5rem]"></h3>
      <FadeInText>
        All entries on the blockchain are read-only. Once a block of
        transactions is accepted by the network, it cannot be easily changed or
        removed. All blocks would have to be recomputed for that to happen,
        which would require the majority of the network participants to agree
        over such changes. An attacker would need to redo the computational work
        of all successor blocks, on the majority of the network
        nodes(Computers). This would require control over, or bribing of, the
        majority of the network nodes. Even if it would be possible to perform
        these computations within the block-creation period, the cost would be
        much higher than the rewards for attacking the network. While
        manipulation is possible, the mechanism is designed to make it
        infeasible.
      </FadeInText>
      <div className="bg-[#f1f3f5] p-[2rem] rounded-lg sm:p-[1rem] mt-[2rem]">
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">
          Thought Experiment
        </h3>
        <p className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          51% Attack:
        </p>
        <p>
          A Proof-of-Work network, like Bitcoin, stays safe as long as most of
          the miners (computers doing the work) are honest. A "51% attack"
          happens if one person or group controls more than half of the
          computing power. They could then manipulate the network and change the
          records. In Bitcoin's 15 years, no one has been able to successfully
          take control and manipulate the network.
        </p>
        <p>
          A successful 51 percent attack could have the following impact: It
          would allow you to
        </p>
        <ul className="capitalize list-disc pl-[2rem] mt-[1rem]">
          <li>change network rules</li>
          <li>
            change blocks by adding or removing transactions, which requires
            additional Proof-of-Work (the older a transaction is, the harder an
            attack gets)
          </li>
          <li>
            Censor participants and therefore transactions of these participants
          </li>
          <li>send transactions and then reverse them</li>
        </ul>
        <p className="mt-[2rem]">What a 51 percent attack cannot do is</p>
        <ul className="capitalize list-disc pl-[2rem] mt-[1rem]">
          <li>
            change existing transactions or fake transactions, like: ( changing
            the amount sent in an existing transaction)
          </li>
          <li>sending someone's tokens without their approval</li>
        </ul>
        <p>
          {" "}
          This is because all transactions need to be signed with the private
          key of the token owner, which cannot be revealed by majority agreement
          of the network. Changing a detail in an existing transaction would
          render the ledger "Illegitimate," as a transaction without a valid
          signature would be in it.
        </p>
        <Image
          src={networkAttackImg}
          alt="network attack"
          className="w-[70%] md:w-[80%] sm:w-[95%] my-[4rem] mx-auto"
        />
      </div>
    </Card>
  );
};

export default NetworkAttacks;
