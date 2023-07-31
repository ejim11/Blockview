import decentralizedImg from "../../public/assets/distNet.jpeg"
import pubKeyImg from "../../public/assets/pubkey3.jpeg"
import bkchainImg from "../../public/assets/blockchainHome.jpeg"
import {HomeData} from "./types";



const homeData: HomeData[] = [
    {
        title: "Security with public key cryptography",
        text: "Public key cryptography is a powerful tool for secure data transmission. We will provide an overview of the basics of public key cryptography and its applications, discuss the different types of public key cryptography, the use of asymmetric encryption algorithms, and the advantages of using it. ",
        image: pubKeyImg
    },
    {
    title: " Decentralized distributed networks",
    text: "In the library, We will go through the rudiments of decentralized distributed networks such as what they are, how they work, their advantages, and the challenges of implementing them. You will then learn about the various applications of decentralized distributed networks, from data storage to cryptocurrency. We will also discuss the potential for these networks to impact other areas, such as healthcare, finance, and government.",
    image: decentralizedImg
},
{
    title: "Understand why it is called a blockchain",
    text: "We will breakdown the basics of the blockchain, the block infrastructure and the security advantages of implementing them. You will then learn how blocks in the chain are formed, validated and mined. In the Explorer, You will be able to see the properties of a mined block in the ethereum network and understand their various definitions.",
    image: bkchainImg
},

]

export default homeData