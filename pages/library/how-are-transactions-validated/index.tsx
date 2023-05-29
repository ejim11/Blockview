import React from 'react'
import Card from '../../../components/Card'
import Image from 'next/image'
import transactionValImg from "../../../public/assets/transactionvalidation.png"

const TransactionValidation = () => {
    const prev = {
        path: "making-transactions-on-a-blockchain-network"
    }

    const next = {
        path: "decentrallized-finance-(defi)"
    }

    return (
        <Card prev={prev} next={next}>
            <h3 className="mb-[2rem] font-semibold text-[2.5rem]">Validating Transactions On The Ethereum Network</h3>
            <p>
                After a transaction  is made and broadcasted the the network, It goes a temporary store known as the <span className = "text-color-light-blue">Mempool</span>.  In here, Validators verify pending transactions and add them to a new block usually based on the amount of gas spent for the transaction. 
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
            This is why during network congestions where there are high amounts of transactions, transactions with lower gas fee get added to the blockchain last thereby increasing the amount of time spent for the transaction to be complete.
            </p>
            <p>
                After the block containing the transaction is added to the Ethereum network(ethereum chain), the transaction is said to be completed.
            </p>
            <Image src={transactionValImg} alt="web history" className="w-[70%] my-[4rem] mx-auto" />
        </Card>
    )
}

export default TransactionValidation