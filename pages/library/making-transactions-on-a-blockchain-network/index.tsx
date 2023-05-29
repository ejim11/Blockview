/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../../../components/Card'
import Image from 'next/image'
import metamask1Img from "../../../public/assets/metamask1.png"
import transferBtwAcc from "../../../public/assets/transferbtwacc.png"
import metamask3Img from "../../../public/assets/metamask3.png"
import metamask4Img from "../../../public/assets/metamask4.png"
import metamask5Img from "../../../public/assets/metamask5.png"
import metamask6Img from "../../../public/assets/metamask6.png"
import { transactionData } from '../../../components/utils/transactionData'


const Transactions = () => {

    const prev = {
        path: 'attacks-on-the-network'
    }

    const next = {
        path: "how-are-transactions-validated"
    }

    return (
        <Card prev={prev} next={next}>
            <h3 className="mb-[2rem] font-semibold text-[2.5rem]">Making Transactions On The Ethereum Network</h3>
            <p>Transactions in the ethereum network is usually done with a wallet software which is a light node that connects with the ethereum network inorder to broadcast a transaction to the network for recording keeping and updating the network state.</p>
            <p className='my-[1rem]'>A blockchain wallet stores your private key, public key, and blockchain address, and communicates with the blockchain network. This wallet software can run on a computer or a mobile phone or a dedicated hardware device. The wallet software allows for user-authentication and the
                management of tokens. With a wallet software one can send tokens and inspect the receipts of tokens that were sent to you. Every time you send Ethereum tokens, you need to use a wallet to sign the transaction with your private key. Subsequently, your personal balance of tokens is adjusted on all copies of the ledger, which is distributed across the P2P network of computers.</p>
            <p>In order to describe how to use a wallet, We will make use of Metamask. It's a very popular crypto wallet. We can install it from app stores on your phones or as an extension on your Pc's browser. After installing, You import an account if you have a private key or create a new one, You will then be propmted to copy your secret recovery phrase and store offline in a safe and secure place as anyone who has them can access your account and steal your tokens.</p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                It's very important to remember always that you shouldn't share your secret recovery phrase or private key with anyone or organization.
            </p>
            <p>Below we will make a transaction to another account. We will transfer 300 FST Tokens from account 1 to account 2.</p>
            <Image src={metamask1Img} alt="metamask" className="w-[70%] my-[4rem] mx-auto" />
            <Image src={transferBtwAcc} alt="metamask2" className="w-[70%] my-[4rem] mx-auto" />
            <Image src={metamask3Img} alt="metamask3" className="w-[70%] my-[4rem] mx-auto" />
            <Image src={metamask4Img} alt="metamask4" className="w-[70%] my-[4rem] mx-auto" />
            <Image src={metamask5Img} alt="metamask5" className="w-[70%] my-[4rem] mx-auto" />
            <Image src={metamask6Img} alt="metamask6" className="w-[70%] my-[4rem] mx-auto" />
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                View your personal transactions on the ethereum network in the explorer page by copying your transaction hash and pasting it into the input field and submitting.
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">Running transactions, calling contracts, signing messages, etc are all operations that are run on the ethereum network. These operations require different amount computational power depending on the computational stress of the operation on the blockchain. The cost for the computational stress on the blockchain by an operation is measured in a unit called <span className='text-color-light-blue'>Gas</span>. </p>
            <p>After making the transaction, You and everyone on the ethereum network have access to the transaction and its details. We will explain all details of the transaction below: </p>
            <ul className='mt-[2rem]'>
                {
                    transactionData.map((item, index) => {
                        return (
                            <li key={index} className='mb-[1.5rem]'>
                                <p className="font-semibold text-[1.9rem] capitalize">{item.title}</p>
                                <p className="text-[1.7rem]">{item.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </Card>
    )
}

export default Transactions