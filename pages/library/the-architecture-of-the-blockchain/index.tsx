/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../../../components/Card'
import Image from 'next/image'
import blockImg from "../../../public/assets/block.png"
import blockschainImg from "../../../public/assets/blockchains.png"


const blockDetails = [
    {
        title: "index",
        description: "The position of the block in the chain."
    }, 
    {
        title: "timestamp",
        description: "A record of when the block was created. This is typically a UNIX timestamp, aka: the number of seconds since January 1st, 1970. This data is important since it establishes a blockchain as a chronological time-based structure."
    },
    {
        title: "hash",
        description: "This is commonly referred to as the block hash or block header. As opposed to what the demo says, this piece of data is NOT stored in the block but is actually a digital fingerprint representing the block's contents."
    },
    {
        title: "previous block hash",
        description: "The hash of the previous block."
    },
    {
        title: "data",
        description: "Each block can store data against it. (transactions)"
    },
    {
        title: "nonce",
        description: "The nonce is the number used to find a valid hash. In the next section, we will discuss how the nonce is used in the bitcoin network. "
    }
    
]

const BlockchainArchitecture = () => {

    const prev = {
        path: "why-is-the-blockchain-so-interesting"
    }

    const next = {
        path: "understanding-the-blockchain-using-bitcoin-and-ethereum"
    }



    return (
        <Card prev={prev} next={next}>
            <h3 className="mb-[2rem] font-semibold text-[2.5rem] text-color-dark-blue capitalize">Blockchain Architecture</h3>
            <p> In a blockchain network, token transactions are recorded in batches of data called "blocks" containing their transactions, nonce and other transaction details that are "hashed"(encrypted and a unique string produced that represents that particular object  or file. ) with a cryptographic algorithm. This cryptographic hash creates a digital
                fingerprint of the block. 
                 </p>
                 <p>
                    Each Block Contains the following:
                 </p>
                 <ul>
                    {
                        blockDetails.map((item, i)=> <li key={i} className='flex flex-col mb-[2rem]'><p className='text-[1.9rem] capitalize
                         font-semibold'>{item.title} :</p><p></p>{item.description}</li>)
                    }
                 </ul>
                 <Image src={blockImg} alt = "double spending" className="w-[70%] my-[4rem] mx-auto" />
                 <p>
                 Each block includes the hash of the prior block, thereby linking one block with another into a chain of blocks. This process guarantees the historic integrity of all the blocks back to the first block, also referred to as the genesis block. If data in one block is altered, the hash value of the block and all subsequent blocks will change, and every node in the network will know that the data has been tampered with. 
                 </p>
                 <p className='my-[1rem]'>
                 This growing list of chained blocks is also referred to as the ledger(The Blockchain).
                The ledger is a file that maintains a growing list of transaction records, chained in blocks that are cryptographically secured from tampering and revision. If manipulation attempts
                were made, the hash value of the manipulated ledger would not coincide with the hash value recorded on the copies of the ledger on all other nodes. The hash value of a block therefore serves as a counterfeit protection that can be used to check the authenticity of a transaction on the blockchain.
                 </p>
                 <Image src={blockschainImg} alt = "double spending" className="w-[70%] my-[4rem] mx-auto" />

                 <p>
                 A copy of the ledger(The Blockchain) is stored on multiple nodes(Computers) of a cryptographically secured P2P network. In order to change the ledger data on all copies of the ledger throughout the whole network, the network nodes(computers) need to reach a mutual agreement about such a change. 
                 </p>
                 <p>This process is referred to as "consensus." and will be  discussed in details in the next chapter using Bitcoin and Ethereum.</p>
                 <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue"> 
                 The Blockchain is a shared, trusted, public ledger of transactions that everyone can inspect, but which no single user controls. Each independent node has the latest version of the ledger, which contains all transactions that have ever been made, and can verify transactions.
                 </p>   
        </Card>

    )
}

export default BlockchainArchitecture