import decentralizedImg from "../../public/assets/distNet.jpeg";
import pubKeyImg from "../../public/assets/pubkey3.jpeg";
import bkchainImg from "../../public/assets/blockchainHome.jpeg";
import { HomeData } from "./types";

const homeData: HomeData[] = [
  {
    title: "Security with public key cryptography",
    text: "Imagine having two special keys: one you give to everyone (public key) and one you keep secret (private key). Public key cryptography is like a magic lock that only opens with the secret key. It's a way to send super secret messages that only the person with the secret key can read. We'll talk about how this works, different kinds of these locks, and why they're so important for keeping information safe",
    image: pubKeyImg,
  },
  {
    title: " Decentralized distributed networks",
    text: "We're going to learn about special computer networks called decentralized networks. We'll talk about what they are, how they work, and why they're useful. Then, we'll see how these networks can be used for things like storing information, using cryptocurrency, and even improving healthcare and government.",
    image: decentralizedImg,
  },
  {
    title: "Why it is called a blockchain",
    text: "Imagine a special list called a blockchain. We'll learn how this list is made up of smaller pieces called blocks. These blocks are super secure and hard to change. We'll see how new blocks are added to the list and how everyone agrees that the list is correct. Then, we'll look at real examples of these blocks on the internet and understand what all the information in them means.",
    image: bkchainImg,
  },
];

export default homeData;
