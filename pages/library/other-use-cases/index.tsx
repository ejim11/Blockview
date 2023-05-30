import React from 'react'
import Card from '../../../components/Card'

const OtherUseCases = () => {

    const prev = {
        path: "can-an-organisation-be-decentralized"
    }

    return (
        <Card prev={prev} next={undefined}>
            <h3 className=" mb-[2rem] font-semibold text-[2.5rem]">Other Usecases</h3>
            <p>
                We have a number of other use cases that are not covered in this project. We will focus on three usecases/applications of the blockchain technology. These are Decentralized Voting, Using Nfts for Real Estate Sales, Art and Documents Ownership And Decentralized Escrow System.
            </p>
            <p className="mt-[2rem] mb-[1rem] font-semibold text-[2rem]">
                Decentralized Voting
            </p>
            <p>
                Decentralized Voting is an application that allows users of a network or DAO to vote on various processes in the network. Users can vote for new proposals, elect new admins and update the protocols (rules) of the network. Rigging in a decentralized voting setup is impossible as the contract enforces the rules of voting and  all the votes of the participants are accessible to anyone. The system is open, automatic and decentralized. 
            </p>
            <p className='my-[1rem]'>A very good use case of decentralized voting is in the government elections. Our voting systems are a joke and are very prone to rigging due to the fact most of the important processes are controlled by humans who easy to fall to bribery to corrupt the system.</p>
            <p  className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                If a decentralized voting system is used to conduct elections in a country like Nigeria, the election process would be 100% rig free and open to everyone in the country and even the entire world to see.
            </p>
            <p className="mt-[2.5rem] mb-[1rem] font-semibold text-[2rem]">
            Using Nfts for Real Estate Sales, Art and Documents Ownership
            </p>
            <p>Another very important usecase of blockchain technology is in the management of ownership of assets. This can be easily done with Nfts.</p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                Non Fungible Tokens popularly known as Nfts are tokens that have unique characteristics and due to this, they can represent digital ownership of some unique good on the blockchain. Literally any form of ownership or access control can managed with Nfts
            </p>
            <p>
                Nfts can be used in transferring ownership of a real estate (building) from the seller to the buyer of the house. Each real estate (building) asset is unique because they all have their specific owners and address. This uniqueness allows for the use of Nfts to manage sales of these assets since they are unique too, they can act as a representation on the asset on the blockchain. Therefore, once a seller sells the nft of his asset to a buyer, he automatically transfers ownership to the buyer.
            </p>
            <p className='my-[1rem]'>This can be used in art and document ownership too as the nfts can be a representation of the art or document on the blockchain. Once the owner of the Nft sells it, they automatically transfer the ownership of that asset.</p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">A startup company in Nigeria is making use of this technology to enable upload, storage and easy verification of personal documents. These documents are minted as Nfts that are stored on the blockchain thereby making them accessible to anyone in the world for verification. You can learn more about them at <a href='https://techan-a45c8.web.app' target = "blank" className='text-color-light-blue no-underline'>Techan</a>.</p>
            <p className="mt-[2.5rem] mb-[1rem] font-semibold text-[2rem]">
            Decentralized Escrow System
            </p>
            <p>
                One of the main advantages of the blockchain technology is that it enables trust between users who do not know each other.  This fosters transactions between people in different parts of the world who do not know nor trust each other. An Escrow contract mediates this form transaction effectively thereby removing the need for a third party to mediate the transaction. Since third parties mediating transactions now are mainly  controlled humans, they are flawed because they can be corrupted.
            </p>
            <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
                I (Ejim Favour) built a decentralized escrow application that can mediate transactions between two untrusted parties. You can have a feel of it at <a href="https://escrow-dapp-2vhxykfmj-ejim11.vercel.app/" target = "blank" className='text-color-light-blue no-underline'> Escrow Dapp</a>.
            </p>
        </Card>
    )
}

export default OtherUseCases