import { toNumber } from 'ethers'
import React from 'react'

const BlockDetails = ({fetchedData}: any) => {

const  details = [
    {
        title: 'BaseFeePerGas',
        value: toNumber(fetchedData.baseFeePerGas._hex)
    },
    {
        title: 'Difficulty',
        value: fetchedData.difficulty
    },
    {
        title: 'Extra data',
        value: fetchedData.extraData
    },
    {
        title: 'Gas Limit',
        value: toNumber(fetchedData.gasLimit._hex)
    },
    {
        title: 'Gas Used',
        value: toNumber(fetchedData.gasUsed._hex)
    },
    {
        title: 'Hash',
        value: fetchedData.hash
    },
    {
        title: 'Nonce',
        value: fetchedData.nonce
    },
    {
        title: 'Block Number',
        value: fetchedData.number
    },
    {
        title: 'Parent hash',
        value: fetchedData.parentHash
    },
    {
        title: 'Timestamp',
        value: fetchedData.timestamp
    },
    {
        title: 'Transactions',
        value: `${fetchedData.transactions.length} transactions`
    },
]

  return (
    <ul className='mt-[2rem]   rounded-lg border p-[2rem] bg-color-dark-blue text-color-white'>
        {
            details.map((item, index) => (
                            <li key={index} className='flex items-center mb-[1rem] sm:flex-col sm:flex-wrap'>
                                <p className='font-semibold capitalize text-[2rem] mr-[1rem]'>{item.title}:</p>
                                <p className='sm:break-all text-center'>{String(item.value)}</p>
                            </li>
                        ))
        }
    </ul>
  )
}
export default BlockDetails