import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/customHooks";
import { libraryAction } from "../../slices/librarySlice";
import homeData from "../../components/utils/homeData";
import Link from "next/link";

export default function Home() {
  const dispatchFn = useAppDispatch();

  useEffect(() => {
    const storedNavIndex: any = localStorage.getItem("NavOpenIndex");
    const index = JSON.parse(storedNavIndex);
    const storedSubItem: any = localStorage.getItem("item");

    dispatchFn(libraryAction.setNavIndex(index));
    dispatchFn(libraryAction.setSubItem(storedSubItem));
  });

  const homeBtnLinks = [
    {
      title: "Get started",
      path: "/library"
    }, 
    {
      title: "Explorer",
      path: "/explorer"
    }
  ]

  return (
    <>
      <Head>
        <title>Blockview</title>
        <meta
          name="description"
          content={"Blockview: Get the best insights on blockchain"}
        />
      </Head>
      <div className="flex flex-col">
      <main className="flex w-full flex-col">
        <section  className="home   h-screen text-color-white flex flex-col items-center justify-center text-center px-8 sm:px5">
          <h1 className="text-[5.5rem] sm:text-4xl">
            The Future of Finance: The Blockchain
          </h1>
          <p className="text-[2rem] mt-2 capitalize">
            Get the Best Abstracted Insights on Blockchain Technology and Its
            Impacts on Business, Economy, and Life.
          </p>
          <div className="text-[1.8rem] mt-[3rem] sm:flex sm:flex-col sm:items-center ">
            {
              homeBtnLinks.map((link, index) => {
                              return (
                                <Link href={link.path} key={index} className="mr-[3rem] sm:mr-0 sm:mb-4 border rounded-lg px-[2rem] py-[1rem] border-color-dark-blue bg-color-white text-color-dark-blue hover:text-color-light-blue transition-all duration-200 ease-in">
                                    {link.title} 
                                </Link>
                              )
                            })
            }
          </div>
        </section>
        <section className="py-[8rem] px-[10rem]">
         {homeData.map((data,i) =>  <div key={i} className="flex items-center  justify-between my-[8rem] sm:px-5 mt-12 md:flex-col">
            <div className={`w-[45%]  md:w-full md:text-center ${i%2 === 0 ? "order-1": "order-2"}`}>
              <h3 className="text-[3.5rem] text-color-dark-blue">
                {data.title}
              </h3>
              <p className="mt-4 text-[1.8rem]">
               {data.text}
              </p>
            </div>
            <Image
              src={data.image}
              alt={data.title}
              className={`w-[45%]  h-[40rem] rounded-lg shadow-2xl  md:mx-auto ${i%2 === 0 ? "order-2": "order-1"}`}
            />
          </div>)}
        </section>
      </main>
      <footer className="px-[3rem]">
     <p className="border-t border-color-light-blue w-full py-[2rem] text-[1.4rem] text-center">
© copyright  2023
     </p>
      </footer>
      </div>
    </>
  );
}
