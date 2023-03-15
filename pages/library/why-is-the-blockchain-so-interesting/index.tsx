/* eslint-disable react/no-unescaped-entities */
import next from "next";
import Card from "../../../components/Card";

const WhyTheBlockchainIsInteresting = () => {
  return (
    <Card>
      <h3>Why is the blockchain interesting</h3>
      <p>
        The concept of a "chain-of-blocks" was introduced in the Bicoin white
        paper in October 2008, with the aim to creale-P2P money without banks."
        The paper, published under the pseudonym Satoshi Nakamoto, proposed a
        system where all computers in the network hold an identical copy of a
        ledger of transactions, which acts as a single point of reference for
        everyone in the network. All network nodes collectively update and
        manage this ledger, which represents a universal data set that every
        actor can trust, even though they might not know or trust each other.
        People and institutions who do not know or trust each other, reside in
        different countries, are subject to different jurisdictions, and who
        have no legally binding agreements with each other can now interact over
        the Internet without the need for trusted third parties like banks,
        Internet platforms, or other types f clearing institutions.
        Double-Spending Problem This new form of distributed data management
        resolved the double-spending problem over the Internet. The way the
        Internet is designed today, one can spend the same value issued as a
        digital file multiple times, because digital information can be copied,
        and copies of that : arge digital file can be sent from one computer to
        multiple other computers at the same time. Before the emergence of
        Bitcoin, ideas around cryptographically secured P2P networks had been
        discussed in different evoltionary stages, mostly in theoretical papers,
        since the 1980s (read more: Annex - Origins of Bitcoin. However, there
        had never been a practical implementation of a P2P network that managed
        to avoid the double-spending problem, without the need for trusted
        intermediaries guaranteeing value exchange. The Bitcoin protocol
        introduced a mech: nism of making it expensive to copy digital values.
        Chain of Blocks: In a blockchain network, token transactions are
        recorded in batches of data called "blocks" that are hashed " This
        cryptographic hash creates a digital fingerprint of the block (read
        more: Part 1 - Token Security: Cryptography) Each block includes the
        hash of the prior block, thereb linking one block with another into a
        chain of blocks. This process guarantees the historic integrity of all
        the blocks back to the first block, also referred to as the genesis
        block. If data in one block is altered, the hash value of the block and
        all subsequent blocks will change, and every node in the network will
        know that the data has been tampered with. This growing list of cnained
        blocks is also referred to as the ledger. The ledger is a file that
        maintains a growing list of transaction records, chained in blocks that
        are cryptographically sezured from tampering and revision. If
        manipulation attempts were made, the hash value of the manipulated
        ledger would not coincide with the hash value recorded on the copies of
        the ledger on all other nodes. The hash value of a block therefore
        serves as a counterfeit protection that can be used to check the
        authenticity of a transaction on a ledger
      </p>
      <p>
        The blockchain is an intriguing technology with many potential
        applications. It is a distributed ledger technology, meaning it records
        and stores information across a network of computers, instead of on a
        single server. This makes the blockchain incredibly secure, as it is
        virtually impossible to hack or alter the data once it has been written
        to the ledger. The blockchain’s distributed nature also makes it highly
        transparent, as all users can view the entire ledger. This makes it a
        great option for applications such as financial transactions, as it
        provides an immutable record of all transactions that have taken place.
        It also makes it possible to track who owns which assets, ensuring that
        all participants have an accurate view of the current state of the
        system. The blockchain also makes it possible to create smart contracts.
        These are pieces of code that are stored on the blockchain, and they can
        automatically execute transactions and other actions when certain
        conditions are met. This makes it possible to automate complex
        processes, and it could potentially revolutionize how businesses,
        governments, and individuals interact with each other. Finally, the
        blockchain is interesting because it is a secure and decentralized
        system. This means that it is not reliant on any single entity or
        organization, and it is not vulnerable to attacks or manipulation by
        malicious actors.
      </p>
    </Card>
  );
};

export default WhyTheBlockchainIsInteresting;
