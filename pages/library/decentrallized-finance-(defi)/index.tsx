/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../../../components/Card'

const Defi = () => {

    const prev = {
        path: "how-are-transactions-validated"
    }


    const next = {
        path: "can-an-organisation-be-decentralized"
    }

    return (
        <Card prev={prev} next={next}>
            <h3 className="mb-[2rem] font-semibold text-[2.5rem]">Decentralized Finance (DEFI)</h3>
            <p>Cryptographic tokens represent a new heterogenous asset class that can fulfill a diverse range of economic functions. Their frictionless issuance and settlement process
                could potentially convert many assets or access rights of the real world into "bankable funds." Tokenizing economic activities, from real assets to digital assets and all types of access rights, could impact the role of central bank money as a geographical monopolist providing a medium of exchange, once mass adoption of the Web3 manifests and necessary network effects kick in. The speed at which these tokens are being issued is an indicator that a new tokenized economic system is emerging. Such tokenization of the real economy could gradually lead to the merging of the money system, with the financial system and the real economy.
                A range of easy-to-use decentralized financial (DeFi) applications have been emerging beyond simple payments that facilitate frictional and P2P asset issuance,trading, lending and hedging to Gaaming, Nfts and so much more.</p>
                <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                The term "DeFi encompasses any decentralized and permissionless financial application that builds on top of the blockchain, including privacy-preserving payment systems (privacy tokens), stability preserving payment systems (stable tokens), P2P exchanges (token exchanges), P2P fundraising (token sales), and P2P credit and lending (decentralized lending). P2P insurance, and a growing list of P2P derivatives. These Web3-based DeFi applications open traditional financial services to the general public, mitigating current inefficiencies of financial markets.
                </p><p>The current financial system, even in it's electronic form, requires a range of intermediary services for mitigating counterparty risk, market making and in securing funds from being stolen. This is a result of the server-centric nature of the current Internet. In a tokenized economy, however, blockchain solutions increase ecosystem transparency, accountability, and market efficiency:
                Due to the public nature of the blockchain, DeFi applications are designed to be globally accessible by anyone around the world with an Internet connection and a Web3 wallet. Once the smart contract is deployed, DeFi applications self-execute with little institutional intervention except for code upgrades, bug fixes, and dispute resolution.</p>
                <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises.
                A smart contract, just like a vending machine, has logic programmed directly into it. That logic sets up how users must interact with the contract. If users interact outside of the scope of the programmed logic, then the program fails. Just like if you choose not to deposit money in a vending machine, it will simply not dispense a drink to you. Same with a smart contract! But smart contracts are cooler!
                </p>
                <p className='my-[1rem]'>If users choose wallet solutions, they remain in possession of the private keys and in full control of the funds, potentially disintermediating many financial services that currently provide services to mitigate counterparty risk, act as market makers, or secure funds from being stolen.
                Any smart contract code can be audited by anyone and is subject to collective loophole fixing, which is the basis for the rapidly evolving DeFi ecosystem.
                All token transactions are publicly verifiable, reducing market friction and increasing the interoperability of financial services.
               </p>
               <p>
               Combining various DeFi solutions, such as "stable tokens," "decentralized exchanges," and "decentralized lending," produce completely new products available to retail
                investors and the general public. Any private person could tokenize their real assets and use them as collateral for P2P lending solutions without bureaucracy by using a combination of simple DeFi applications. Such new services change the dynamics of our economic system and contribute to the merging of the real economy and the financial system, making their distinction increasingly impossible.
               </p>
        </Card>
    )
}

export default Defi