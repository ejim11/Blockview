/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../../../components/Card'
import Image from 'next/image'
import nakamotoConImg from "../../../public/assets/nakamotoconsensus.png"
import dataIntImg from "../../../public/assets/DataIntegrity.png"
import stakedImg from "../../../public/assets/stakeconsensus.png"


const UnderstandingBlockchain = () => {

    const prev = {
        path: "the-architecture-of-the-blockchain"
    }

    const next = {
        path: "attacks-on-the-network"
    }

    return (
        <Card prev={prev} next={next}>
            <h3 className="  mb-[2rem] font-semibold text-[2.5rem] text-color-dark-blue capitalize">Understanding The Blockchain Using Bitcoin And Ethereum</h3>
            <p>In the previous chapter, we mentioned that in order to change the ledger data on all copies of the ledger throughout the whole network, the network nodes(computers) need to reach a mutual agreement about such a change. This is called <span className='text-color-light-blue font-semibold'>Consensus</span> in the blockchain.</p>
            <p className='my-[1rem]'>
                If We assume there are malicious nodes(computers) in the network. Therefore, the system must be able to withstand not only simple node failures(single computer failure) but also attacks to a certain extent.
            </p>
            <p>
                There are various consensus mechanisms used in the blockchain used by different networks to reach agreement on what is true or false in the network. For example, Bitcoin uses the <span className='text-color-light-blue font-semibold'>Nakamoto Consensus</span> which employs the longest chain rule while the Ethereum network uses a Proof-of-Stake based consensus mechanism.
            </p>
            <p className="mb-[1rem] mt-[2rem] font-semibold text-[2rem] text-color-dark-blue capitalize">consensus on the bitcoin network</p>
            <p>
                The Nakamoto consensus couples a Sybil protection mechanism of Proof-of-Work with the longest-chain rule, a novel consensus invented by Satoshi Nakamoto for Bitcoin in 2008. This means the node(computer) with the longest chain of blocks is the most correct and detailed node and thus network actors will choose it as the correct node(computer) in any dispute.
            </p>
            <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem] sm:p-[1rem] mb-[4rem]">
                <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">Thought Experiment</h3>
                <p className='my-[1rem]'>Let's assume there is a dispute on the Bitcoin network between two nodes(computers). The network will choose the node with the longest chain of blocks as the correct block. This is because that node has more amount of verified history of the Bitcoin network than the other and as such can be trusted to  give the correct state of the blockchain.</p>
                <Image src={nakamotoConImg} alt="nakamoto" className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto" />
            </div>
            <p >
                The Proof-of-work is a mechanism for agreement used by the Bitcoin network to determine which node(computer) solved the hash problem first and mined the most recent block of transactions. To find a valid hash, we need to find a nonce value that will produce a valid hash when used with the rest of the information from that block.
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                Mining is the process of solving a complex computer problem by brute-forcing(guessing) a number(nounce) that when used with the rest of the block details generates a valid hash for the block. The process of solving the problem involves high computation which is the work done by the miner and proof of that work is broadcasted to the network  to show which node solved the problem first, thus the name Proof-of-work. After broadcasting it to the network, that block is added to the blockchain and the miner incentivized for securing the network.
            </p>
            <p>
                A valid hash for a blockchain is a hash that meets certain requirements. For example, having three zeros at the beginning of the hash is the requirement for a valid hash.
                The number of leading zeros required is the difficulty the computer problem.
                A miner starts a "candidate block" with a nonce of 0 and keep incrementing it by 1 until he finds a valid hash.
            </p>
            <p className="  mb-[1rem] mt-[2rem]  font-semibold text-[2rem] text-color-dark-blue capitalize">Data Integrity On Blockchain Networks</p>
            <p>
                how do we make sure the state of the data is never corrupted in any way (ie, data lost, data maliciously manipulated, etc)?
                The next parts of the section touch on how difficult it is to manipulate data in a block that already has many blocks mined on top of it.
                Since data is an input variable for the hash of each block, changing the data will change that block's hash. The new hash will not have three leading zeros, and therefore becomes invalid. Manipulating data in a block that has been nested deeply in the chain is a fool's errand.
            </p>
            <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem] sm:p-[1rem]   mb-[4rem]">
                <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">Thought Experiment</h3>
                <p>
                    To give an example: In Bitcoin's genesis block, Frank sent Halley 10 BTC. Manipulating this value from 10 BTC to 20 BTC (Maybe Halley wants some more BTC!) would require IMMENSE computational power as halley will need to rehash other blocks, recall that more blocks are still being mined so halley will need to also hash the current blocks mined.
                </p>
                <Image src={dataIntImg} alt="nakamoto" className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto" />
            </div>
            <h3 className=" mt-[2rem]  mb-[1rem] font-semibold text-[2rem] text-color-dark-blue capitalize">consensus on the ethereum network</h3>
            <p>The Ethereum network makes use of a Proof-of-Stake based mechanism to reach consensus on the state of their blockchain network.
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                The Proof-of-Stake mechanism involves network actors staking a certain amount of network token choosen by the network. This ensures that network actors have a lot to loose if they choose to be malicious. These network actors are called <span>Validators</span> as all they do is to validate a block and broadcast to the network. 
            </p>
            <p>
                In Proof-of-Stake, there is no need for mining or computational work as the network chooses which network participant gets to validate a block based on the proof of staked network tokens. 
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">On the Ethereum network, about 32ETH Tokens must be staked before becoming a validator on the network.</p>
            <Image src={stakedImg} alt="staked" className="w-[70%] md:w-[80%] sm:w-[95%]  my-[4rem] mx-auto" />
        </Card>
    )
}

export default UnderstandingBlockchain