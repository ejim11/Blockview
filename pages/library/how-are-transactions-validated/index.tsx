import React from "react";
import Card from "../../../components/Card";
import Image from "next/image";
import transactionValImg from "../../../public/assets/transactionvalidation.png";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const TransactionValidation = () => {
  const prev: Path = {
    path: "making-transactions-on-a-blockchain-network",
  };

  const next: Path = {
    path: "decentrallized-finance-(defi)",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title=" Validating Transactions On The Ethereum Network"
      bgImg={"bg-card-header"}
    >
      <FadeInText>
        After a transaction is made and broadcasted to the network, It goes to a
        temporary store known as the{" "}
        <span className="text-color-dark-blue font-medium">Mempool</span>. In
        here, Validators verify pending transactions and add them to a new block
        usually based on the amount of gas spent for the transaction.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        This is why during network congestions where there are high amounts of
        transactions, transactions with lower gas fee get added to the
        blockchain last thereby increasing the amount of time spent for the
        transaction to be complete.
      </FadeInText>
      <FadeInText>
        After the block containing the transaction is added to the Ethereum
        network(ethereum chain), the transaction is said to be completed.
      </FadeInText>
      <Image
        src={transactionValImg}
        alt="web history"
        className="w-[70%] md:w-[80%] sm:w-[95%] my-[4rem] mx-auto"
      />
    </Card>
  );
};

export default TransactionValidation;
