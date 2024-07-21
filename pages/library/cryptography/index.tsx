/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";
import Image from "next/image";
import symmetricImg from "../../../public/assets/symmetric.png";
import AsymmetricImg1 from "../../../public/assets/asymmetric1.png";
import AsymmetricImg2 from "../../../public/assets/asymmetric2.png";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const Cryptography = () => {
  const prev: Path = {
    path: "the-web3-revolution",
  };

  const next: Path = {
    path: "how-the-blockchain-uses-cryptography",
  };

  return (
    <Card prev={prev} next={next} title="Cryptography" bgImg={"bg-card-header"}>
      <FadeInText>
        Historically, up until the 1970s, cryptography was the study of
        encrypting messages so that they could not be decrypted even if
        intercepted. Cryptography was used for passing important secrets,
        especially within the military. The sender would take their message and
        pass it through a function to create an encrypted output. This could be
        something as simple as moving each character in a string down one
        position in the alphabet. For instance "abc" becomes "bcd". This
        function is not particularly difficult to crack, especially once you
        know its secret! As cryptography advanced over the years, more complex
        functions were introduced to hide messages better.
      </FadeInText>
      <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">
        Symmetric-key Cryptography
      </h3>
      <FadeInText>
        One important leap forward was the idea of a secret key. If two parties
        can meet prior to their exchange of messages they both can come to an
        agreement upon a particular key. This key plus a function (like the
        alphabet shift mentioned above) could be used together to create a more
        secure encryption. Having keys on both sides of the message is
        considered symmetric-key cryptography.
      </FadeInText>
      <Image
        src={symmetricImg}
        alt="web history"
        className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
      />
      <FadeInText className="my-[3rem]">
        As mentioned above, the state of the art cryptography had been
        increasingly complex versions of symmetric-key cryptography. The
        objective of the game was to never let your adversary have your key.
        And, of course, in military situations, countries were doing everything
        in their power to break your code! With the advent of personal computing
        on the horizon, some cryptographers started to think outside the box.
        People would want to be able to communicate with each other securely
        without having to worry about eavesdroppers. Of course, they could meet
        somewhere in person and exchange keys any time people wanted to talk
        securely, but this seemed a bit old fashioned.
      </FadeInText>
      <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">
        Asymmetric-key Cryptography
      </h3>
      <FadeInText>
        This got cryptographers thinking: how could two parties communicate
        securely without having met beforehand to exchange keys? This was a
        tough problem! Was it even possible? In 1976 Whitfield Diffie proposed
        an idea. What if there was a public key? Many established cryptographers
        dismissed this idea out of hand. After all, the whole purpose of an
        encryption key was to keep it private! As it turns out, a public key
        introduces some extremely important cryptographic properties!
      </FadeInText>
      <div className="bg-[#f1f3f5] p-[2rem] sm:p-[1rem] rounded-lg mt-[2rem]">
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          Thought Experiment
        </h3>
        <FadeInText>
          Take a minute to walk through this thought experiment with me
          conceptually:
        </FadeInText>
        <FadeInText>
          Imagine you have two special keys: a private key and a public key. If
          you lock a message with the private key, only the public key can
          unlock it, and if you lock a message with the public key, only the
          private key can unlock it. Each key can only unlock messages locked by
          the other key.
        </FadeInText>
        <FadeInText className="my-[1rem]">
          Now imagine Bob has declared a public key far and wide as the key that
          identifies him. Bob will keep a private key that corresponds to his
          public key. When he uses his private key to encrypt a message, he can
          share it publicly to be decrypted using his public key. Upon
          decrypting this message, we can say beyond the shadow of a doubt that
          only Bob could have written this message. The only key that could have
          encrypted the message is the corresponding private key which only Bob
          has access to. In practice, this would create an unforgeable digital
          signature for Bob.
        </FadeInText>
        <Image
          src={AsymmetricImg1}
          alt="web history"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
        <FadeInText>
          On the flip side, what if a message was encrypted using Bob's public
          key? Of course, anyone can do this since Bob's public key is available
          to everyone. The benefit comes in that only Bob can decrypt the
          message. In this way, a friend of Bob's can write a message that can
          only be read by Bob. They could send it through any network,
          regardless of its security so long as it reaches Bob. They could rest
          assured that nobody would be able to decrypt the message except for
          Bob.
        </FadeInText>
        <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">
          End Thought Experiment
        </h3>
        <FadeInText>
          This was the insight that struck Whitfield Diffie in 1976. The only
          problem was, he didn't have any practical way to make this happen. He
          had a concept, but he did not have a mathematical function with these
          properties! Diffie would work with both Martin Hellman and Ralph
          Merkle in search of such a system.
        </FadeInText>
        <Image
          src={AsymmetricImg2}
          alt="web history"
          className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto"
        />
      </div>
    </Card>
  );
};

export default Cryptography;
