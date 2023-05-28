import Card from "../../../components/Card";
import next from "next";
import Image from "next/image";
import webHistory from "../../../public/assets/historyofweb.png"
import centralizedImg from "../../../public/assets/centralized.png"
import decentralizedImg from "../../../public/assets/decentralized.png"

const Web2AndWeb3 = () => {

  const next = {
    title: "next",
    path: "cryptography"
  }

  

  return (
    <Card next={next} prev={undefined}  >
      <h3  className="mb-[2rem] font-semibold text-[2.5rem]">The Web3 Revolution</h3>
      <p>
        The WWW (World Wide Web) revolutionized information, and  the Web2
        transformed interactions, the Web3 has the potential to revolutionize
        agreements and value exchange. The Web3 changes the data structures in
        the backend of the Internet, introducing a universal state ledger where all transactions are stored and protected 
        by incentivizing network actors with network tokens  to validate and verify transactions in the network. The backbone of the Web3
        is represented by a series of blockchain networks or similar distributed
        ledgers.
      </p>
     <Image src={webHistory} alt = "web history" className="w-[70%] my-[4rem] mx-auto" />
      <p>
        The Internet we have today is broken. We do not control our data, nor do
        we have a native value settlement layer.  Our data architectures are still based on the concept
        of the stand-alone computer, where data is centrally stored and managed
        on a server, and sent or retrieved by a client. Every time we interact
        over the Internet, copies of our data get sent to the server of a
        service provider, and every time that happens, we lose control over our
        data. This raises issues of trust. Can I trust those people and institutions that store
        and manage my data against any form of corruption internally or
        externally, on purpose or by accident? Centralized data structures not
        only raise issues of security, privacy and control of personal data, but
        also produce many inefficiencies along the supply chain of goods and
        services.
      </p>
      <Image src={centralizedImg} alt = "web history" className="w-[50%] h-[40rem] my-[4rem] mx-auto" />
      <p className="text-[2rem] text-center font-semibold mt-[2rem] mb-[4rem]">Data Monopoly (Single Point Of Failure)</p>
      <p className="my-[2rem]">
        The emergence of the WWW in the early 1990s increased the usability of
        the Internet with visually appealing and easy-to-navigate websites,
        years later, the Internet became more mature, and programmable. We saw
        the rise of the so-called Web2, which brought us social media,
        e-commerce and knowledge platforms. The Web2 revolutionized social
        interactions, bringing producers and consumers of formation, goods, and
        services closer together. The Web2 allowed us to enjoy peer-to-peer
        (P2P) interactions on a global scale, but always with a middleman: a
        platform acting as a trusted intermediary between two people who do not
        know or trust each other. While these Internet platforms have done a
        fantastic job of creating a P2P economy, they also dictate all the rules
        and they control the data of their users.
      </p>
      <p>
        In this context, blockchain networks seem to be a driving force of the
        next-generation Internet, what some refer to is the Web3. They reinvent
        the way that data is stored and managed over the Internet, providing a
        unique universal state layer that is collectively managed
        by all nodes(computers) in the network. This unique state layer, for the first
        time, provides a native value settlement layer for the Internet in the
        absence of intermediaries. It enables true P2P transactions, and it all
        started with tie emergence of Bitcoin.
      </p>
      <Image src={decentralizedImg} alt = "web history" className="w-[50%] h-[40rem] my-[4rem] mx-auto" />
      <p className="text-[2rem] text-center font-semibold mt-[2rem] mb-[4rem]">Data Sovereignity (No Single Point Of Failure)</p>
      <p>
         Data is collaboratively
        managed by a P2P network of computers The management rules are
        formalized in the protocol and secured by majority consensus of all
        network participants, who are incentivized with a network token for
        their activities. The protocol formalizes the governance rules of the
        network and ensures that people who do not know or trust each other
        reach and settle agreements over the Web. While trying to manipulate
        data on a server resembles treaking into a house, where security is
        provided by a fence and an alarm system, the Web3 is designed in a way
        that you would need to break into multiple houses around the globe
        simultaneously, which each have their own fence and alarm system. This
        is possible but prohibitively expensive.
      </p>

    </Card>
  );
};

export default Web2AndWeb3;
