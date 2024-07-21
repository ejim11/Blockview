import React from "react";
import Card from "../../../components/Card";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const OtherUseCases = () => {
  const prev: Path = {
    path: "can-an-organisation-be-decentralized",
  };

  return (
    <Card
      prev={prev}
      next={undefined}
      title="Other Usecases"
      bgImg={"bg-card-header"}
    >
      <FadeInText>
        We have a number of other use cases that are not covered in this
        project. We will focus on three usecases/applications of the blockchain
        technology. These are Decentralized Voting, Using Nfts for Real Estate
        Sales, Art and Documents Ownership And Decentralized Escrow System.
      </FadeInText>
      <p className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">
        Decentralized Voting
      </p>
      <FadeInText>
        Decentralized Voting is an application that allows users of a network or
        DAO to vote on various processes in the network. Users can vote for new
        proposals, elect new admins and update the protocols (rules) of the
        network. Rigging in a decentralized voting setup is impossible as the
        contract enforces the rules of voting and all the votes of the
        participants are accessible to anyone. The system is open, automatic and
        decentralized.
      </FadeInText>
      <FadeInText className="my-[1rem]">
        A very good use case of decentralized voting is in the government
        elections. Our voting systems are a joke and are very prone to rigging
        due to the fact most of the important processes are controlled by humans
        who are easy to fall to bribery to corrupt the system.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        If a decentralized voting system is used to conduct elections in a
        country like Nigeria, the election process would be 100% rig free and
        open to everyone in the country and even the entire world to see.
      </FadeInText>
      <p className="mt-[2.5rem] mb-[1rem] font-semibold text-[2rem]">
        Using Nfts for Real Estate Sales, Art and Documents Ownership
      </p>
      <FadeInText>
        Another very important usecase of blockchain technology is in the
        management of ownership of assets. This can be easily done with Nfts.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        Non Fungible Tokens popularly known as Nfts are tokens that have unique
        characteristics and due to this, they can represent digital ownership of
        some unique good on the blockchain. Literally any form of ownership or
        access control can managed with Nfts
      </FadeInText>
      <FadeInText>
        Nfts can be used in transferring ownership of a real estate (building)
        from the seller to the buyer of the house. Each real estate (building)
        asset is unique because they all have their specific owners and address.
        This uniqueness allows for the use of Nfts to manage sales of these
        assets since they are unique too, they can act as a representation on
        the asset on the blockchain. Therefore, once a seller sells the nft of
        his asset to a buyer, he automatically transfers ownership to the buyer.
      </FadeInText>
      <FadeInText className="my-[1rem]">
        This can be used in art and document ownership too as the nfts can be a
        representation of the art or document on the blockchain. Once the owner
        of the Nft sells it, they automatically transfer the ownership of that
        asset.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        A startup company in Nigeria is working on making use of this technology
        to enable upload, storage and easy verification of personal documents.
        These documents are minted as Nfts that are stored on the blockchain
        thereby making them accessible to anyone in the world for verification.
        You can learn more about them at{" "}
        <a
          href="https://www.techan.io"
          target="blank"
          className="text-color-light-blue no-underline"
        >
          Techan
        </a>
        .
      </FadeInText>
      <p className="mt-[2.5rem] mb-[1rem] font-semibold text-[2rem]">
        Decentralized Escrow System
      </p>
      <FadeInText>
        One of the main advantages of the blockchain technology is that it
        enables trust between users who do not know each other. This fosters
        transactions between people in different parts of the world who do not
        know nor trust each other. An Escrow contract mediates this form
        transaction effectively thereby removing the need for a third party to
        mediate the transaction. Since third parties mediating transactions now
        are mainly controlled humans, they are flawed because they can be
        corrupted.
      </FadeInText>
      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        I (Ejim Favour) built a test decentralized escrow application that can
        mediate transactions between two untrusted parties. You can have a feel
        of it at{" "}
        <a
          href="https://escrow-dapp-2vhxykfmj-ejim11.vercel.app/"
          target="blank"
          className="text-color-light-blue no-underline"
        >
          {" "}
          Escrow Dapp
        </a>
        .
      </FadeInText>
    </Card>
  );
};

export default OtherUseCases;
