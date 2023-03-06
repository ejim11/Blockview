/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";

const BlockchainandCryptography = () => {
  return (
    <Card>
      <h3>Cryptographic Hash Function</h3>
      <p>
        A hash function is a mathematical function that converts a numerical
        input value into another compressed numerical value. The input to the
        hash function is of arbitrary length but output is always of fixed
        length. Properties of Cryptographic Hash Functions Non-reversibility:
        also know as one-way function. A good hash should make it very hard to
        reconstruct the original password from the output or hash. Diffusion, or
        avalanche effect​: A change in just one bit of the original password
        should result in change to half the bits of its hash. In other words,
        when a password is changed slightly, the output of enciphered text
        should change significantly and unpredictably. Determinism​: A given
        password must always generate the same hash value or enciphered text.
        Collision resistance​: It should be hard to find two different passwords
        that hash to the same enciphered text. Non-predictable: ​The hash value
        should not be predictable from the password.
      </p>
      <h3>Examples of Cryptographic Hash Functions</h3>
      <p>
        Cryptographic hash functions are widely used in cryptocurrencies to pass
        transaction information anonymously. For example, bitcoin​, the original
        and largest cryptocurrency, uses the SHA-256 cryptographic hash function
        in its algorithm. Similarly, IOTA, a platform for the ​Internet of
        Things​, has its own cryptographic hash function, called Curl. However,
        hashes have other applications in the real world. These are some of the
        most common cryptographic applications: Password Verification: Storing
        passwords in a regular text file is dangerous, so nearly all sites store
        passwords inputs their password, it is hashed and the result is compared
        to the list of hashed values stored on the company's servers. Signature
        Generation and Verification: Verifying signatures is a mathematical
        process used to verify the authenticity of digital documents or
        messages. A valid digital signature, where the prerequisites are
        satisfied, gives its receiver strong proof that the message was created
        by a known sender and that the message was not altered in transit. A
        digital signature scheme typically consists of three algorithms: a key
        generation algorithm; a signing algorithm: given a message and a private
        key, produces a signature; and a signature verifying algorithm. Merkle
        Trees​, a technology used in cryptocurrencies, is a kind of digital
        signature. Verifying File and Message Integrity: Hashes can be used to
        make sure messages and files transmitted from sender to receiver are not
        tampered with during transit. The practice builds a "chain of trust."
        For example, a user might publish a hashed version of their data and the
        key so that recipients can compare the hash value they compute to the
        published value to make sure they align.
      </p>
    </Card>
  );
};

export default BlockchainandCryptography;
