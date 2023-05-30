import React from 'react'
import { toNumber } from 'ethers'


const TransactionDetails = ({fetchedData}: any) => {
    const  details = [
        {
            title: 'Block Hash',
            value: fetchedData.blockHash
        },
        {
            title: 'Byzantium',
            value: fetchedData.byzantium
        },
        {
            title: 'Confirmations',
            value: fetchedData.confirmations
        },
        {
            title: 'Contract Address',
            value: fetchedData.contractAddress
        },
        {
            title: 'Gas Used',
            value: toNumber(fetchedData.gasUsed._hex)
        },
        {
            title: 'Cumulative Gas Used',
            value:toNumber(fetchedData.cumulativeGasUsed._hex)
        },
        {
            title: 'Effective Gas Price',
            value:toNumber(fetchedData.effectiveGasPrice._hex)
        },
        {
            title: 'From',
            value: fetchedData.from
        },{
            title: 'status',
            value: fetchedData.status
        },
        {
            title: 'To',
            value: fetchedData.to
        },
        {
            title: 'Transaction Hash',
            value: fetchedData.transactionHash
        },
        {
            title: 'Transaction Index',
            value: fetchedData.transactionIndex
        },
        {
            title: 'Type',
            value: fetchedData.type
        },
    ]
    
  return (
    <ul className='mt-[2rem] rounded-lg border p-[2rem] bg-color-dark-blue text-color-white'>
        {
            details.map((item, index) => (
                            <li key={index} className='flex items-center mb-[1rem]'>
                                <p className='font-semibold capitalize text-[2rem] mr-[1rem]'>{item.title}:</p>
                                <p>{item.value}</p>
                            </li>
                        ))
        }
    </ul>
  )
}

export default TransactionDetails