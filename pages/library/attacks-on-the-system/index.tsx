/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";

const BlockchainAttacks = () => {
  return (
    <Card>
      <h2>Attacks on the blockchain</h2>
      <p>
        51% Attack Most of us have heard the term 51% attack before, and it
        sounds terrifying! A 51% attack refers to a point in time where a group
        of miners have control of more than 50% of the network and wish to act
        maliciously. How much damage can actually be done during this time?
        Let's think about what we have learned. Every block is built upon the
        hash of the block before it. To change a block that has been confirmed
        many times, let's say the block has been confirmed 6 times for example,
        the attacking blockchain would need to mine 8 new blocks before the
        existing blockchain mines 1 to be accepted as the Main Chain. This would
        require more than just 51% of the resources! Of course, the attacking
        blockchain could also just stubbornly stick to its chain for a longer
        period of time. The more time they do this, the more expensive the
        attack becomes. If they had these kind of resources, they could make
        significant money just playing along honestly! What can the attack
        actually accomplish? One thing that an attack could do is double-spend a
        transaction, by choosing to override it within the new blocks. So if
        someone sent you a large payment, they could attack the network and
        essentially override that payment. Of course, this attack would cost a
        lot of money, so it's very unlikely this would be cost-effective. For
        safety purposes, if someone sends you millions of dollars on the
        blockchain, maybe wait a day or two to be sure it's cleared. We'll talk
        more about UTXOs which will help us understand how double-spends are
        prevented.
      </p>
      <p>
        All entries on the ledger are read-only. Once a block of transactions is
        accepted by the network, it cannot be easily changed or ret loved. All
        blocks would have to be recomputed for that to happen, which would
        require the majority of the network participants to agree over such
        changes. An attacker would need to re lo the computational work of all
        successor blocks, on the majority of the network nodes. This would
        require control over, or bribing of, the majority of the network nodes.
        Even if it would be possible to perform these computations within the
        block-creation period, the cost would be much higher than the rewards
        for attacking the network. While manipulation is possible, the mech mism
        is designed to make it infeasible. These websites provide real-time
        information about how much it currently costs to attack different
        blockchain networks in a so-called "51% attack." A Proof-of-Work network
        is safe as long as more than50 percent of the work is being put in by
        miners who are honest. A "51% attack" happens when a single person or
        institution is able to control the majority of the hash rate or
        computing power to manipulate the network. In the ten-year history of
        Bitcoin, no manipulation by outside attackers has been successful. *
        Online tool to check what it would cost to attack the Bitcoin network:
        https://gobitcoin.io/tools/cost-51-attack/ * Online tool to check what
        it would cost to attack different blockchain networks:
        https://www.crypto51.app/ A successful 51 percent attack cotild have the
        following impact. It would allow you to ( change blocks by adding or
        removing transactions, which requires additional PoW the older a
        transaction is, the harder an attack gets), (if censor participants and
        therefore transactions of these participants; (mi) send transactions and
        then reverse them; and (iv) change protocol rules. What a 51 percent
        attack cannot do is change existing transactions or fake transactions,
        like: ( changing the amoun sent in an existing transaction; (i changing
        the recipient of an existing transaction, or (I) sending someone's
        tokens without their approval. This is because all transactions need to
        be signed with the private key of the token owner, which cannot be
        revealed by majority agreement of the network. Changing a detail in an
        existing transaction would render the ledger legitimate. as a
        transaction without a valid signature would be in it. These types of
        manipulations can only be achieved by brute-forcing the private-keys of
        a network actor. Alternatively, one could also breal: the cryptographic
        algorithm (SHA) to attack the network, which is why it is essential to
        use cryptographic algorithms that have been properly stress-tested (read
        more: Part 1 - Token Security: Cryptography).
      </p>
      <p>
        Blockchain technology is a revolutionary breakthrough in the field of
        distributed ledger technology that has created a secure and immutable
        way to store data. However, it is not immune to attacks. There are
        several types of attacks that can be launched against the blockchain.
        These include malicious nodes, Sybil attacks, double-spending attacks,
        51% attacks, Distributed Denial of Service (DDoS) attacks, race
        condition attacks, and selfish mining attacks. Malicious nodes can be
        used to manipulate the blockchain by sending false information or data
        that could disrupt or damage the blockchain. Sybil attacks involve
        creating multiple fake identities to gain control of a blockchain
        network. Double-spending attacks refer to the act of using the same
        coins or tokens more than once. A 51% attack requires an attacker to
        control more than 50% of the network’s computing power. DDoS attacks are
        used to overwhelm the network with traffic and disrupt its operations.
        Race condition attacks involve a malicious actor attempting to submit a
        transaction before other users. Finally, selfish mining attacks involve
        a malicious actor attempting to mine blocks for their own gain. All of
        these attacks can have devastating effects on the blockchain. To protect
        the blockchain from these attacks, developers have created various
        protocols and algorithms that
      </p>
      <p>
        The underlying challenge of a P2P network with a set of anonymous
        network nodes is how to deal with malicious network no des in the
        absence of centralized parties securing the system. One must always
        assume that there will be bad actors trying to disrupt any open and
        public network. How can such a distributed network reach consensus about
        which data is correct or which is not correct, or which process is true
        or false in such an untrusted setup? This is referred to as the
        "Byzantine Generals Pr‹ blem."A malicious node, also called a byzantine
        node, can intentionally send wrong information to all other nodes
        involved in the consensus process. Byzantine faihares are considered the
        most difficult class of failures in distributed networks. Reliable
        consensus mechanisms must be resilient against DoS (Distributed Denial
        of Service) attacks, sybil attacks,/ and other cyber attacks. Before the
        emergence of Bitcoin, it was believed to be impossible to achieve
        fault-tolerant and attack-resistant consensus among untrusted nodes in a
        P2P network. For the first time in the history of distributed computing,
        the Bitcoin protocol introduced a mathematical solution to this problem
        with the introduction of "Proof-of-Work," which made the economic cost
        of attacking the system disproportionate to the benefit of doing so. It
        sparked a new field of science around econon ic coordination games using
        cryptographic tools, also referred to as "Cryptoeconomics."
        Cryptoeconomics can be defined as the study of economic interaction in
        untrusted environments, whare every actor could potentially be corrupt.
        It is interdisciplinary, and requires a deep understanding of
        cryptography, economics, and P2P networks, and what motivates network
        actors. Pa blic-private key infrastructure guarantees attack-resistant
        access control of one's tokens. Hashing functions allow nodes to verify
        transactions that are done over the network. Both hashing finctions and
        public-private key cryptography are also required for the economic
        coordination game called Proof-of-Work to reward miners for adding
        truthful transaction blocks to the ledger. Cryptoeconomic mechanisms can
        provide a security equilibrium to make the network fault tolerant, and
        attack and collusion resistant. This allows anonymous network nodes to
        reach consensus about the state of all network interactions. The Bitcoin
        network is the first practical instance of cryptoeconomics. It produces
        "trust by math" rather than "trust by legal contract." However, security
        depends on the resilience of the assumptions made on how network actors
        will react to economic incentives. How people react to incentives has
        long been a field of study in economics. Cryptoeconomics therefore has
        much in common with mechanism design, a field of economics related to
        game theory. Game theory analyzes strategic interactions, which are
        referred to as games. It tries to understand the best strafegies for
        each player if both players maximize the best outcome for hemselves.
        Mechanism design defines desirable outcomes and works backward to create
        a game that incentivizes players toward that desired outcome. While
        cryptoeconomics is interdisciplinary, it is a discipline that was
        predominantly developed in the computer science community. It seems that
        there is still much room to incorporate methods from various economic
        disciplines, and other disciolines (more in the nest chapter and in Part
        4 - Purpose-Driven Iokens).
      </p>
      <p>
        Why is it expensive to manipulate a network transaction? Let's say that
        everybody is working on block 25. A Genesis Block ..but one mining node
        wants to manipulate a transaction.in block 21. The miner would have to
        make his/her own changes and redo all the transactions for blocks 21-24
        and compute block. 25. That's 4 blocks of expensive comput-ing. What's
        worse, the miner would have to do this before everybody else in the
        network finished just the one block, in this case block 25, that
        everyone is working on.
      </p>
    </Card>
  );
};

export default BlockchainAttacks;
