/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";
import CryptographictxImg from "../../../public/assets/cryptographictransaction.png"
import Image from "next/image";

const BlockchainandCryptography = () => {

const prev ={
  path :"cryptography"
}

const next = {
  path : "why-is-the-blockchain-so-interesting"
}

  return (
    <Card prev={prev} next={next}>
      <h3  className="mb-[2rem] font-semibold text-[2.5rem]">How The Blockchain Uses Cryptography</h3>
      <p>
        The Blockchain uses cryptographic algorithms to encrypt and decrypt
        data. Just asymmetric cryptography in the previous section, on the blockchain, transactions and messages are encrypted using a  private key and sent to the public network to be verified and stored.
      </p>
      <p className="my-[1rem]"> Therefore, in this situation Bob makes a transaction by sending some tokens to his friend. He then signs the transaction using his private key and broadcasts it to the network. Now anyone in the network can verify that Bob sent some money to his friend and also see details of the transaction. The private key acts  Bob's signature for signing transactions and messages in the network.</p>
     <p>
      Cryptography is also used the storage of transactions on the blockchain. In the next chapter on architecture of the blockchain, we will elucidate on how the blockchain stores transactions using cryptographic algorithms.
     </p>
     <Image src={CryptographictxImg} alt = "crypttx" className="w-[70%] my-[4rem] mx-auto" />
    </Card>
  );
};

export default BlockchainandCryptography;
