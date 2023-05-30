import React, { useState } from 'react'
import { Network, Alchemy } from 'alchemy-sdk';
import { ethers, toBeHex } from 'ethers';
import BlockDetails from './BlockDetails';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TransactionDetails from './TransactionDetails';
import { toastError } from './toastFunctions';


const ExplorerFormAndQueryResults = () => {

  const settings = {
    apiKey: "pCgztJQYuRFexRNH-aV_BOnRPeSkRZPG",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  const [queryName, setQueryName] = useState<string>("get-block")
  const [input, setInput] = useState<string>("")
  const [fetchedBlockData, setFetchedBlockData] = useState<any>(undefined)
  const [fetchedTxData, setFetchedTxData] = useState<any>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const queryNameChangeHandler = (e: any) => {
    setQueryName(e.target.value);
  }

  const inputChangeHandler = (e: any) => {
    setInput(e.target.value);
  }

  const getBlockNumber = async () => {
    if (input) {
      setLoading(true)
      try {
        let value = input.includes("x") ? input : toBeHex(input)
        //  Call the method to return the block with transactions
        let response: any = await alchemy.core.getBlock(value)
        setFetchedTxData(undefined)
        setFetchedBlockData(response)
        setLoading(false)
        setInput("")
      } catch (err: any) {
        if(err.message.includes("argument")){
          toastError("Please provide correct input for chosen query or change query")
        } else{
          toastError(err.message)
        }
        setLoading(false)
     }
    }
  }

  const getTransactionDetails = async () => {
    setLoading(true)
    if (input) {
      try {
        //Call the method to fetch the transaction receipt of the tx
        let response : any= await alchemy.core.getTransactionReceipt(input)
        setFetchedBlockData(undefined)
        setFetchedTxData(response)
        setLoading(false)
        setInput("")
      } catch (err: any) {
        if(err.message.includes("argument")){
          toastError("Please provide correct input for chosen query or change query.")
        } else{
          toastError(err.message)
        }
        setLoading(false)
      }
    }
   
  }

  const submitFormhandler = (e: any) => {
    e.preventDefault();

    if (queryName === "get-block") {
      getBlockNumber();
    }  

    if (queryName === "get-transaction") {
      getTransactionDetails();
    }

    
  }

  
  return (
    <div className='w-full'>
      <div className='w-max border rounded-lg px-[2rem] py-[1rem]'>
        <select name="query" id="query" className='border-0 outline-none ring-0' onChange={queryNameChangeHandler}>
          <option value="get-block">Get Block Details</option>
          <option value="get-transaction">Get Transaction Details</option>
        </select>
      </div>

      <form className='flex mt-[3rem]' onSubmit={submitFormhandler}>
        <input type="text" value={input} onChange={inputChangeHandler} placeholder={`${queryName === "get-block" ? "Input Block Number or Hash" : "Input Transaction Hash"}`} className='border rounded-lg px-[2rem] py-[1rem] w-[70%]' />
        <button type="submit" className='bg-color-dark-blue text-color-white rounded-lg ml-[2rem] px-[3rem]'>Submit</button>
      </form>
      {fetchedBlockData && !loading  && <div>
        <BlockDetails fetchedData = {fetchedBlockData} />
      </div>}
      {fetchedTxData && !loading  && <div>
        <TransactionDetails fetchedData = {fetchedTxData} />
      </div>}
      {loading && <div className='w-full'>
          <SkeletonTheme baseColor="#E0E0E0" highlightColor="#eee">
            <p className="my-[2rem]">
              <Skeleton count={12} className={` h-[3rem] `} />
            </p>
          </SkeletonTheme>
        </div>}
    </div>
  )
}

export default ExplorerFormAndQueryResults