/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../../../components/Card'
import Image from 'next/image'
import networkAttackImg from "../../../public/assets/networkattack.png"

const NetworkAttacks = () => {
    const prev = {
        path: "understanding-the-blockchain-using-bitcoin-and-ethereum"
    }

    const next = {
        path: "making-transactions-on-a-blockchain-network"
    }

    return (
        <Card prev={prev} next={next}>
            <h3 className="mb-[2rem] font-semibold text-[2.5rem]">Network Attacks</h3>
            <p>
                All entries on the blockchain are read-only. Once a block of transactions is accepted by the network, it cannot be easily changed or removed. All blocks would have to be recomputed for that to happen, which would require the majority of the network participants to agree over such changes. An attacker would need to redo the computational work of all successor blocks, on the majority of the network nodes. This would require control over, or bribing of, the majority of the network nodes. Even if it would be possible to perform these computations within the block-creation period, the cost would be much higher than the rewards for attacking the network. While manipulation is possible, the mechanism is designed to make it infeasible.
            </p>
            <div className="bg-[#f1f3f5] p-[2rem] rounded-lg mt-[2rem]">
                <h3 className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">Thought Experiment</h3>
                <p className="mt-[2rem] mb-[1rem] font-semibold text-[1.8rem]">51% Attack: </p>
                <p> A Proof-of-Work network
                    is safe as long as more than 50 percent of the work is being put in by miners who are honest. A "51% attack" happens when a single person or institution is able to control the majority of the hash rate or computing power to manipulate the network. In the fifteen-year history of Bitcoin, no manipulation by outside attackers has been successful.</p>
                <p>
                    A successful 51 percent attack could have the following impact: It would allow you to</p>
                <ul className='capitalize list-disc pl-[2rem] mt-[1rem]'>
                    <li>change network rules</li>
                    <li> change blocks by adding or removing transactions, which requires additional Proof-of-Work (the
                        older a transaction is, the harder an attack gets)</li>
                    <li>Censor participants and therefore transactions of these participants</li>
                    <li>send transactions and then reverse them</li>
                </ul>
                <p className='mt-[2rem]'>What a 51 percent attack cannot do is</p>
                <ul className='capitalize list-disc pl-[2rem] mt-[1rem]'>
                    <li>change existing transactions or fake transactions, like: ( changing the amount sent in an existing transaction)</li>
                    <li>sending someone's tokens without their approval</li>
                </ul>
                <p> This is because all transactions need to be signed with the private key of the token owner, which cannot be revealed by majority agreement of the network. Changing a detail in an existing transaction would render the ledger "Illegitimate," as a transaction without a valid signature would be in it.</p>
                <Image src={networkAttackImg} alt="network attack" className="w-[70%] my-[4rem] mx-auto" />
            </div>
        </Card>
    )
}

export default NetworkAttacks