/* eslint-disable react/no-unescaped-entities */
import Card from "../../../components/Card";

const BlockchainUserState = () => {
  return (
    <Card>
      <h2>Blockchain User State</h2>
      <p>
        With traditional web2 server based platforms, keeping track of user data
        and information is actually a lot easier than it is on the blockchain.
        This is because there is a single centralized server that stores the
        state of user accounts. There's no need for consensus or resolving
        discrepancies since there's only one central place that stores
        information. However, when you move to a decentralized system, the
        problem of storing user balances becomes tricky. Decentralized networks
        like Bitcoin and Ethereum need specific models for keeping track of the
        state of users. Bitcoin uses the UTXO model to keep track of user
        balances. Ethereum and other EVM chains use the account model to keep
        track of user balances. Let's dig in further... UTXO stands for "Unspent
        Transaction Output". You will see the term UTXO used a bit in this
        lesson! Bitcoin uses the UTXO model, so we like to include it because it
        helps us understand tradeoffs in blockchain storage models as well as it
        will help us compare and contrast to Ethereum and its use of the Account
        model. You thought we would already be learning Solidity, huh? Ah well,
        we are starting from scratch and digging into the fundamentals of what
        makes blockchains tick. It is important to understand these concepts as
        they will make you a better rounded smart contract engineer. Let's dig
        in...
      </p>
      <h2>Transaction</h2>
      <p>
        The best place to start, before looking at how blockchains keep track of
        user balances, is the place where user balances begin: the transaction.
        Let's explore with the following question: What do we need in a
        transaction? Three main things: amount: the amount to send to someone
        payer: the person sending the transfer amount payee: the person
        receiving the transfer amount Since we are working in systems based on
        really secure cryptography, we need ONE more thing to complete
        everything required for a successful blockchain transaction: payer
        authorization: some sort of unfakeable authorization given by the
        initiator of the transaction This fourth item would just end up being
        the digital signature which is basically a hash that is extremely hard
        to replicate if you do not have the correct inputs - in this case, a
        user's private keys. Without the private keys, a payment authorization
        cannot occur. The only way to do it would be to "hack" basic
        cryptography which is practically impossible. Digital signatures are
        very important. Make sure to review Week 1, Day 2 if you still feel
        shaky on the subject! What is the purpose of a transaction? To change
        some user state! If Alice sends Bob 5 $DAI, Alice's $DAI balance should
        go -5, Bob's should go +5. Alice's transaction is responsible for
        changing the state of their balances. Changing state is extremely
        important in blockchains (which are typically transaction-based
        networks!), so keep this in mind! Bitcoin, Ethereum and regular banks
        rely on transaction-based models to keep track of user balances. Let's
        take a further look below...
      </p>
      <p>ACCOUNT BASED MODEL</p>
      <p>
        If you have a bank account, you are very familiar with this model of
        keeping track of user balances. The account model follows just that:
        accounts. It tracks the balances of users based on their overall account
        state, without any tracking on what constitutes the actual balance
        itself. In other words, an account-based ledger would mark an entry like
        this: Acct #12345 - Name: Rick Sanchez - Balance: $142.62 Notice how the
        state of the account is kept very high-level? Rick's account balance is
        a dollar and cent amount and that's it. There is no further information
        tracked on what the breakdown of the the balance is, for example:
        $142.62 is one $100 bill, one $20 bill, two $10 bills, eight quarters,
        five dimes, two nickels, two pennies. When Rick goes to an ATM and
        withdraws from his balance, he gets it in whatever bills + change the
        bank has at hand - not in the exact change it took to make up that
        balance in the first place. What does a transaction look like in an
        account-based model? Alice has $60 total balance Bob has $20 total
        balance Bob sends Alice $5 Bob's balance is subtracted $5, if the
        remaining balance is greater then 0, proceed, else revert Alice balance
        is summed $5 The ledger is marked in both ends to update total balances
        and that is the end of the transaction in an account-based model. This
        might seem weird. Why would we want to keep track of these details for
        something as simple as a total balance? We'll look at a model for
        keeping user balances that does include this feature: the UTXO model.
      </p>
      <p>UTXO MODEL</p>
      <p>
        Ethereum uses the account-based model, while Bitcoin uses UTXOs (short
        for Unspent Transaction Outputs) to keep track of user state/balances.
        The UTXO model differs pretty drastically from the account model. It's a
        little bit more complex - mainly because it is not a familiar interface
        like the account model is! Yet it does set up some interesting
        features... What is a UTXO? 🤔** Alice sends Bob 5 BTC in the form of a
        transaction relayed to the Bitcoin network. At this point, if the
        transaction is valid (Alice has 5 BTC, Alice owns the relevant private
        keys and can produce a signature, etc), Alice is signaling an intent to
        change user state. When the Bitcoin network mines Alice's transaction,
        Bob is credited with a UTXO worth 5 BTC. This is how the Bitcoin network
        keeps track of user balances - it keeps a really big long set of UTXOs -
        outputs out of state-changing transactions that credit users with a
        certain amount of BTC.
      </p>
      <p>
        Important notes on UTXOs: All UTXOs are non-fungible (fun fact: the
        first NFT collection ever was... Bitcoin!) To spend a UTXO, you must
        refer back to that specific UTXO. A user's UTXOs are scattered across
        blocks. Once a UTXO is "consumed", any leftover change from the
        transaction creates new UTXOs representing the change amounts A UTXO,
        often referred to as a "coin", can only be spent ONCE. No
        double-spending! In Bitcoin, each UTXO has a script associated with it
      </p>
      <p>
        Account vs UTXO model ACCOUNTS UTXOS User Balances Overall Account State
        (ie. Alice has 4.2 ETH) Specific UTXOs (ie. Alice has 29 UTXOs that
        amount to 2.65 BTC) Pros More intuitive, easier to quickly understand
        Very good privacy if user uses a new address per tx Cons Replay Attacks
        (someone could re-) UTXOs are stateless, which complicates state-heavy
        designs Conclusion Deciding what model to go with is a game of design
        tradeoffs. Ethereum uses the account-based model transactions must be
        more flexible to account for the many moving pieces of state in the
        system. Bitcoin uses UTXOs as it is a network purposefully designed to
        be as simple and stateless as possible.
      </p>
      <p>
        Unspent Transaction Outputs Bitcoin uses Unspent Transaction Outputs for
        handling user ownership of coins. This is opposed to an account based
        model used by Ethereum, which tracks balances of particular addresses.
        Let's consider a couple of examples. UTXO Example 1 Bob runs a Bitcoin
        Miner. He successfully computes a block and rewards himself with 12.5
        BTC as per the emission rules. This is a brand new Unspent Transaction
        Output (UTXO) Bob has introduced to the system. Now let's say Bob wants
        to send Alice 6.0 BTC. He can do so by using his UTXO with 12.5 BTC.
        But, wait, Bob doesn't want to send Alice 12.5 BTC! How do we handle the
        remainder? As it turns out Bitcoin allows you to designate multiple
        outputs per transaction. In this particular transaction, we'll create
        one UTXO of 6.0 BTC for Alice and another UTXO of 6.5 BTC for Bob (the
        remainder). Then, we'll mark the UTXO for 12.5 BTC as spent since it was
        used as an input for the transaction. Neat! UTXO Example 2 One thing
        that can often happen when using this model, is users end up with a lot
        of small UTXOs. As Alice transacts with the network her, UTXO breaks up
        into smaller outputs until she's left with 3 UTXOs of values 1.0 BTC,
        1.5 BTC, and 0.8 BTC. Let's say that Alice wants to purchase something
        for 3.0 BTC. She can do so by specifying many inputs to the transaction.
        She can put all three of her UTXOs as inputs into the transaction for a
        to total of 3.3 BTC. After the transaction is executed, she'll receive a
        new UTXO of 0.3 BTC and her previous inputs will all be marked as spent.
        Ok that's enough examples for now! Let's learn for ourselves with some
        coding exercises.
      </p>
    </Card>
  );
};

export default BlockchainUserState;
