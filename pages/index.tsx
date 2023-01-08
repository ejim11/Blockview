import Head from "next/head";
import Image from "next/image";
import decentralize from "../public/assets/decentralize.png";
import publicKeyImg from "../public/assets/public-key.png";
import blockchainImg from "../public/assets/blockchain.png";
import { Inter } from "@next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockview</title>
        <meta
          name="description"
          content={"Get the best insights on blockchain"}
        />
      </Head>
      <section className="bg-gradient-to-b  from-color-dark-blue-2 to-color-white h-[85vh] text-color-white flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl">The Future of Finance: The Blockchain</h1>
        <p className="text-2xl mt-2">
          Get the Best Abstracted Insights on Blockchain Technology and Its
          Impacts on Business, Economy, and Life.
        </p>
        <div className="text-2xl mt-6">
          <button className="mr-4 border rounded-lg px-5 py-2 border-color-dark-blue-2 bg-color-dark-blue-2 hover:text-color-dark-blue-2 hover:bg-color-white transition-all duration-200 ease-in">
            Get started
          </button>
          <button className=" border rounded-lg px-5 py-2 text-color-dark-blue-2 border-color-dark-blue-2  hover:bg-color-white transition-all duration-200 ease-in">
            Playground
          </button>
        </div>
      </section>
      <section>
        <div className="flex items-center px-12 mt-4">
          <div className="w-1/2">
            <h3 className="text-5xl">
              Comprehend Distributed Decentralized Networks
            </h3>
            <p className="mt-4 text-xl">
              We will go through the basics of distributed decentralized
              networks, such as how they work, their advantages, and the
              challenges of implementing them. You will then learn about the
              various applications of distributed decentralized networks, from
              data storage to cryptocurrency. We will also discuss the potential
              for these networks to impact other areas, such as healthcare,
              finance, and government
            </p>
          </div>
          <Image
            src={decentralize}
            alt="decentralize"
            className="w-[37rem] h-[37rem]"
          />
        </div>
        <div className="flex items-center px-12 mt-4">
          <Image
            src={publicKeyImg}
            alt="publicKey"
            className="w-[35rem] h-[30rem]"
          />
          <div className="w-1/2 ml-14">
            <h3 className="text-5xl">
              Grasp The Idea Behind Public Key Cryptography
            </h3>
            <p className="mt-4 text-xl">
              Public Key Cryptography is a powerful tool for secure data
              transmission. We will provide an overview of the basics of Public
              Key Cryptography and its applications, discuss the different types
              of Public Key Cryptography, the use of asymmetric encryption
              algorithms, and the advantages of using it. Finally, we will cover
              best practices for implementing Public Key Cryptography in a
              secure environment.
            </p>
          </div>
        </div>
        <div className="flex items-center px-12 mt-4">
          <div className="w-1/2">
            <h3 className="text-5xl">
              {" "}
              Understand Why It Is Called A Blockchain
            </h3>
            <p className="mt-4 text-xl">
              We will go through the basics of the blockchain, such as how it
              works, the block infrastructure and the security advantages of
              implementing them. You will then learn how blocks in the chain are
              formed, validated and mined. In the playground, we will explore
              the properties of the blocks and understand how they came about.
            </p>
          </div>
          <Image
            src={blockchainImg}
            alt="blockchain"
            className="w-[37rem] h-[37rem]"
          />
        </div>
      </section>
    </>
  );
}
