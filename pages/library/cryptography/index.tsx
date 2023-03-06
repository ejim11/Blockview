/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";

const Cryptography = () => {
  return (
    <Card>
      <h3>Cryptography Historically</h3>
      <p>
        It's helpful to take a look back at the study of cryptography over the
        years to understand where and when digital signatures came into play.
        Historically, up until the 1970s, cryptography was the study of
        encrypting messages so that they could not be decrypted even if
        intercepted. Cryptography was used for passing important secrets,
        especially within the military. The sender would take their message and
        pass it through a function to create an encrypted output. This could be
        something as simple as moving each character in a string down one
        position in the alphabet. For instance "abc" becomes "bcd". This
        function is not particularly difficult to crack, especially once you
        know its secret! As cryptography advanced over the years, more complex
        functions were introduced to hide messages better. One important leap
        forward was the idea of a secret key. If two parties can meet prior to
        their exchange of messages they both can come to an agreement upon a
        particular key. This key plus a function (like the alphabet shift
        mentioned above) could be used together to create a more secure
        encryption. Having keys on both sides of the message is considered
        symmetric-key cryptography.
      </p>
      <h3>Personal Computing</h3>
      <p>
        As mentioned above, the state of the art cryptography had been
        increasingly complex versions of symmetric-key cryptography. The
        objective of the game was to never let your adversary have your key.
        And, of course, in military situations, countries were doing everything
        in their power to break your code! With the advent of personal computing
        on the horizon, some cryptographers started to think outside the box.
        People would want to be able to communicate with each other securely
        without having to worry about eavesdroppers. Of course, they could meet
        somewhere in person and exchange keys any time people wanted to talk
        securely, but this seemed a bit old fashioned. This got cryptographers
        thinking: how could two parties communicate securely without having met
        beforehand to exchange keys? This was a tough problem! Was it even
        possible? In 1976 Whitfield Diffie proposed an idea. What if there was a
        public key? Many established cryptographers dismissed this idea out of
        hand. After all, the whole purpose of an encryption key was to keep it
        private! As it turns out, a public key introduces some extremely
        important cryptographic properties! Take a minute to walk through this
        thought experiment with me conceptually: Start Thought Experiment Let's
        say there is a private key that can decrypt a message from a public key
        and vice-versa. Each key is the only key that can decrypt a message
        encrypted by the other key. Now imagine Bob has declared a public key
        far and wide as the key that identifies him. Bob will keep a private key
        that corresponds to his public key. When he uses his private key to
        encrypt a message, he can share it publicly to be decrypted using his
        public key. Upon decrypting this message, we can say beyond the shadow
        of a doubt that only Bob could have written this message. The only key
        that could have encrypted the message is the corresponding private key
        which only Bob has access to. In practice, this would create an
        unforgeable digital signature for Bob. On the flip side, what if a
        message was encrypted using Bob's public key? Of course, anyone can do
        this since Bob's public key is available to everyone. The benefit comes
        in that only Bob can decrypt the message. In this way, a friend of Bob's
        can write a message that can only be read by Bob. They could send it
        through any network, regardless of its security so long as it reaches
        Bob. They could rest assured that nobody would be able to decrypt the
        message except for Bob. End Thought Experiment This was the insight that
        struck Whitfield Diffie in 1976. The only problem was, he didn't have
        any practical way to make this happen. He had a concept, but he did not
        have a mathematical function with these properties! Diffie would work
        with both Martin Hellman and Ralph Merkle in search of such a system.
      </p>
      <h3>Cryptographic Hash Function</h3>
      <p>
        A hash function is a mathematical function that converts a numerical
        input value into another compressed numerical value. The input to the
        hash function is of arbitrary length but output is always of fixed
        length.
      </p>
      <h3>Properties of Cryptographic Hash Functions</h3>
      <p>
        Non-reversibility: also know as one-way function. A good hash should
        make it very hard to reconstruct the original password from the output
        or hash. Diffusion, or avalanche effect​: A change in just one bit of
        the original password should result in change to half the bits of its
        hash. In other words, when a password is changed slightly, the output of
        enciphered text should change significantly and unpredictably.
        Determinism​: A given password must always generate the same hash value
        or enciphered text. Collision resistance​: It should be hard to find two
        different passwords that hash to the same enciphered text.
        Non-predictable: ​The hash value should not be predictable from the
        password.
      </p>
    </Card>
  );
};

export default Cryptography;
