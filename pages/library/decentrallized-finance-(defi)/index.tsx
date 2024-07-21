/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../../components/Card";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const Defi = () => {
  const prev: Path = {
    path: "how-are-transactions-validated",
  };

  const next: Path = {
    path: "can-an-organisation-be-decentralized",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title="Decentralized Finance (DEFI)"
      bgImg={"bg-card-header"}
    >
      <FadeInText>
        Cryptographic tokens are a new type of asset that can do many different
        economic jobs. They can be created and traded easily, potentially
        turning many real-world assets or rights into "bankable funds." Turning
        real assets, digital assets, and access rights into tokens could change
        the role of central bank money, which now acts as a major way to
        exchange value in specific areas. As more people start using Web3 and
        its benefits grow, this change could happen faster. The rapid creation
        of these tokens shows that a new economic system is forming. This new
        system could blend the money system, financial system, and real economy
        together. Many new decentralized financial (DeFi) applications are
        appearing that do more than just simple payments. They allow people to
        issue, trade, lend, and protect assets easily, and also include things
        like gaming and NFTs.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        The term "DeFi encompasses any decentralized and permissionless
        financial application that builds on top of the blockchain, including
        privacy-preserving payment systems (privacy tokens), stability
        preserving payment systems (stable tokens), P2P exchanges (token
        exchanges), P2P fundraising (token sales), and P2P credit and lending
        (decentralized lending). P2P insurance, and a growing list of P2P
        derivatives. These Web3-based DeFi applications open traditional
        financial services to the general public, mitigating current
        inefficiencies of financial markets.
      </FadeInText>
      <FadeInText>
        The current financial system, even when using electronic methods, needs
        many middlemen to reduce risks, make markets, and keep money safe. This
        is because of the way our Internet is set up, relying on central
        servers. In a tokenized economy, blockchain solutions make things
        clearer, more accountable, and more efficient. Because blockchains are
        public, DeFi (decentralized finance) applications can be used by anyone
        with an Internet connection and a Web3 wallet. Once set up, these DeFi
        apps run on their own with very little need for middlemen, except for
        updates, fixing bugs, and solving disputes.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        A smart contract is a set of promises, specified in digital form,
        including protocols within which the parties perform on these promises.
        A smart contract, just like a vending machine, has logic programmed
        directly into it. That logic sets up how users must interact with the
        contract. If users interact outside of the scope of the programmed
        logic, then the program fails. Just like if you choose not to deposit
        money in a vending machine, it will simply not dispense a drink to you.
        Same with a smart contract! But smart contracts are cooler!
      </FadeInText>
      <FadeInText className="my-[1rem]">
        If users choose wallet solutions, they keep their private keys and have
        full control of their funds. This could remove the need for many
        financial services that currently reduce risks, help make markets, or
        protect funds from theft. Anyone can check and fix smart contract code,
        which helps the DeFi (decentralized finance) system grow quickly. All
        token transactions are public and can be verified by anyone, making
        financial services work together better and reducing problems in the
        market.
      </FadeInText>
      <FadeInText>
        Combining various DeFi solutions, such as "stable tokens,"
        "decentralized exchanges," and "decentralized lending," produce
        completely new products available to retail investors and the general
        public. Any private person could tokenize their real assets and use them
        as collateral for P2P lending solutions without bureaucracy by using a
        combination of simple DeFi applications. Such new services change the
        dynamics of our economic system and contribute to the merging of the
        real economy and the financial system, making their distinction
        increasingly impossible.
      </FadeInText>
    </Card>
  );
};

export default Defi;
