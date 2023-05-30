import { Network, Alchemy } from 'alchemy-sdk';
import { useState, useEffect } from "react";
import { TbClipboard } from "react-icons/tb"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ExplorerFormAndQueryResults from '../../components/ExplorerFormAndQueryResults';


const Explorer = () => {

  const [blockNumber, setBlockNumber] = useState<number | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const settings = {
    apiKey: "pCgztJQYuRFexRNH-aV_BOnRPeSkRZPG",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  const getBlockNumberHandler = async () => {
    setLoading(true);
    try{
      const latestBlock = await alchemy.core.getBlockNumber();
      setBlockNumber(latestBlock);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false)
    }
    
    setLoading(false);
  }

  const copyHandler = () => {
    navigator.clipboard.writeText(`${blockNumber}`);
    setCopied(true);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [copied]);

  return <section className=" mt-[8rem] w-full p-[5rem] sm:px-4 sm:py-3">
    <div className=" w-full text-[1.7rem] bg-color-white border border-color-border rounded-lg p-[3rem] sm:border-0 sm:p-0">
      <h3 className="text-[2.5rem] text-color-dark-blue mb-[2rem]">The Explorer</h3>
      <p>
        In the explorer,  You can query the ethereum network for the latest mined block number, view details of a block and also details of a transaction.
      </p>
      <div className="flex flex-col items-start my-[3rem] w-max">
        <button className="text-color-white bg-color-dark-blue capitalize rounded-lg cursor-pointer py-[1rem] px-[2rem] border border-color-dark-blue hover:bg-color-white hover:text-color-dark-blue duration-200 transition-all ease-in" onClick={getBlockNumberHandler}>get the latest mined block number</button>
        {blockNumber && !loading && <div onClick={copyHandler} className="cursor-pointer mt-[1.5rem] font-semibold text-[3.5rem] text-color-dark-blue flex items-center w-full justify-between ">
          <p>{blockNumber}</p>
          <div className='flex items-center '>
            <p className='text-color-light-blue text-[1.8rem]'>{copied ? "copied!" : "copy"}</p>
            <TbClipboard className='text-color-light-blue  w-[3rem] h-[3rem]  ' /></div>
        </div>}
        {loading && <div className='w-full'>
          <SkeletonTheme baseColor="#E0E0E0" highlightColor="#eee">
            <p className="my-[2rem]">
              <Skeleton count={1} className={` h-[3rem] `} />
            </p>
          </SkeletonTheme>
        </div>}
      </div>
      <ExplorerFormAndQueryResults />
    </div>
  </section>
};

export default Explorer;
