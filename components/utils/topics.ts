import { Topic } from "./types";

const topics: Topic[] = [
  {
    number: 1,
    title: "Why The Web3?",
    subTitles: [
      { title: "The Web3 Revolution", route: "the-web3-revolution" },
      { title: "Cryptography", route: "cryptography" },
      {
        title: "How the Blockchain uses Cryptography",
        route: "how-the-blockchain-uses-cryptography",
      },
    ],
  },
  {
    number: 2,
    title: "The Blockchain",
    subTitles: [
      {
        title: "Why is the Blockchain so Interesting?",
        route: "why-is-the-blockchain-so-interesting",
      },
      {
        title: "The architecture of the blockchain",
        route: "the-architecture-of-the-blockchain",
      },
      {
        title: "Understanding the blockchain using Bitcoin and Ethereum",
        route: "understanding-the-blockchain-using-bitcoin-and-ethereum",
      },
      {
        title: "Attacks on the Network",
        route: "attacks-on-the-network",
      },
    ],
  },
  {
    number: 3,
    title: "Let's transact in Web 3",
    subTitles: [
      {
        title: "Making transactions on a blockchain network",
        route: "making-transactions-on-a-blockchain-network",
      },
      {
        title: "How are transactions validated?",
        route: "how-are-transactions-validated",
      },
    ],
  },
  {
    number: 4,
    title: "Applications of blockchain technology in our world",
    subTitles: [
      {
        title: "Decentrallized Finance (Defi)",
        route: "decentrallized-finance-(defi)",
      },
      {
        title: "Can an organisation be decentralized?",
        route: "can-an-organisation-be-decentralized",
      },
      {
        title: "Other Use cases",
        route: "other-use-cases",
      },
    ],
  },
];

export default topics;
