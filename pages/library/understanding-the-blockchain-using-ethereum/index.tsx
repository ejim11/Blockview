/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";

const EthereumInBlockchain = () => {
  return (
    <Card>
      <p>
        What is Ethereum? The computer science "technical" definition: Ethereum
        is a deterministic but practically unbounded state machine, consisting
        of a globally accessible singleton state and a virtual machine that
        applies changes to that state. The practical definition: Ethereum is an
        open source, globally decentralized computing infrastructure that
        executes programs called smart contracts Uses a blockchain to
        synchronize and store the system’s state changes Uses a cryptocurrency
        called ether to meter and constrain execution resource costs The visual
        definition: Imagine thousands of computers all over the world connected
        by the Internet... Each runs same computer program, always! These are
        the nodes… This program sets out rules (consensus!) for how the
        computers should work together How to talk to each other? How to store
        data? How to decide what is what… In a real sense, it is one computer.
        This computer is Ethereum.
      </p>
      <p>
        Properties of the Ethereum Computer Ok, so Ethereum is a computer that
        can't even keep up with all the other modern PCs, why would I want to
        use it?! Let's look at some properties of the Ethereum computer that
        make it actually useful... 1. Ethereum = Truly Global Singleton Ethereum
        is possibly the first global singleton computer ever, that is
        fundamentally not localized (meaning, it's not located in any one single
        location). All other computers are either physical machines (laptops) or
        virtual machines, which reside in physical machines. Ethereum does not
        reside in any single machine, no physical presence in any part of the
        world… yet there is only one! Take a minute to really internalize the
        above statement! 🤯 2. Censorship Resistance No authority, government or
        corporation is behind the Ethereum computer. No one owns it, can shut it
        off or can use it as an advanced user (ie. a system administrator in a
        typical client-server setup). 3. Ethereum = Ubiquitous & Accessible
        Where there is Internet, there is Ethereum. There are no barriers to
        participation. If you can connect to WiFi, you can interact with the
        Ethereum computer. If you want to write to the Ethereum computer, you'll
        just need some ETH on top of an Internet connection - to pay gas! So,
        the Ethereum computer is ubiquitous (everywhere!). In terms of
        accessibility, Ethereum's main smart contract programming language is
        currently Solidity - a language with strong similarities in design to
        JavaScript. JS is the programming language that powers the Internet.
        Therefore, the learning curb for new Ethereum devs is not that
        particularly difficult - it's very similar to the most popular
        programming language on the planet. This means the Ethereum computer is
        not hidden behind layers of complexity, it is accessible, as a start, to
        anyone that knows (or learns!) JavaScript. 4. Ethereum = Natively
        Multi-User The Ethereum computer, thanks to the wide input range of the
        keccack256 hash function, has a practically infinite range possible for
        account creation. The range is 2^160, a number so incredibly large, that
        our puny human brains cannot even comprehend it. Basically, the Ethereum
        computer can supply as many accounts as we'll ever need - and then more.
        Try creating a new account now, easy as pie! Here's a cool video that
        breaks down such large number ranges used in cryptography! 🎥 5.
        Ethereum is Verifiable & Auditable Any code deployed onto the Ethereum
        computer is honored now and forever. Smart contracts inherit the
        cryptographic properties of the Ethereum computer: immutability,
        censorship-resistance and verifiability. Once you deploy a smart
        contract, unless you explicitly code in a clause with a call to
        selfdestruct, that contract will live on the Ethereum computer FOREVER.
        No one can change it, not even Vitalik.
      </p>
      <p>
        So... Why Ethereum? The Ethereum platform enables developers to build
        powerful decentralized applications with built-in economic functions,
        while providing high availability, transparency, and neutrality. The
        point of Ethereum isn’t to be fast or cheap, the point is to be
        trustworthy. Any program that runs on the Ethereum computer is
        guaranteed to run the same way everywhere, on every node. Data stored on
        the Ethereum computer is available everywhere, and it is permanent. Now
        that's a cool computer right there!
      </p>
      <p>
        Ethereum vs. Bitcoin One of the key differences between Ethereum and
        Bitcoin is that Ethereum has a virtual machine built into it that
        supports Turing-Complete languages, which means developers can build
        arbitrary applications and programs on top of it. In contrast, Bitcoin's
        Script language is purposefully restricted to simple true/false
        evaluations of conditions correlating to whether or not a UTXO can be
        spent. It does not allow for loops. Note that adding loop functionality
        is not particularly difficult, it's simply a matter of adding a
        conditional jump (i.e. if this condition is true, go to this line of
        code). Programs written in Turing-complete languages have a property
        that makes it impossible to tell if those programs will ever terminate.
        Alan Turing proved it is generally impossible to do so, known as The
        Halting Problem. Let's consider the following JavaScript code: Looking
        at the conditions, we can see that this loop will never terminate. If we
        tried to run similar code on Ethereum, what would happen? A miner would
        receive the transaction, add it to their transaction memory pool, mine a
        block, add the transaction to the block, and then broadcast that block
        to the network. Now, all the other nodes in the network will try to run
        the transaction on their own machine, they will be stuck in an infinite
        loop! In order to prevent such attacks from occurring, Ethereum designed
        its own Virtual Machine to run transactions within. Let's take a deeper
        look at the Ethereum Virtual Machine (EVM).
      </p>
      <p>
        Proof of Stake On September 15th, 2022 Ethereum transitioned from Proof
        of Work to Proof of Stake (POS), also known as “The Merge”. This was a
        massive migration that was always in the roadmap and original planning
        for Ethereum, but required coordination from the entire network to
        execute. We learned about Proof of Work, the consensus mechanism used by
        Bitcoin and previously Ethereum in week 1. Proof of Stake is a totally
        different mechanism that enables Ethereum to be: More secure 🔒 Less
        energy intensive 🌎 Greater scalability 📈 Let’s unpack how PoS works to
        understand why this is the case. How PoS works In order to become a
        miner in PoW, there are large energy requirements, which makes it
        difficult for any individual to compete with the existing mining
        warehouses that are dedicating millions of dollars of resources to
        mining. However, in Proof of Stake, the energy requirement to become a
        validator is much lower and can be done by individuals without a high
        overhead energy cost. This encourages more users to become validators,
        decreasing the centralization risk, and thereby increasing the security
        of the network. Instead of using mass amounts of electricity, validators
        are required to stake 32ETH by depositing it into a contract to have the
        ability to validate blocks. This staked ETH is used as collateral
        against bad actors in the network. If any given validator acts dishonest
        or malicious they put themselves at risk of losing their staked ETH.
        Rather than all validators competing at the same time for the next
        block, the network randomly selects a validator to propose a block every
        12 seconds, all the other validators verify that the proposed block is
        correct, and the cycle repeats. This means that the energy requirements
        to mine any given block are significantly lower than that of PoW.
        💡There are a lot more really interesting mechanisms for PoS, but rather
        than discuss them here we’re going to move onto how this new system
        affects Ethereum developers (like yourself!). If you’re interested in
        learning more about PoS and the Merge check out the Additional Resources
        section below.
      </p>
      <p>READING FROM THE ETHEREUM COMPUTER</p>
    </Card>
  );
};

export default EthereumInBlockchain;
