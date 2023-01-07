import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className="bg-gradient-to-b  from-color-dark-blue-2 to-color-white h-[85vh] text-color-white flex flex-col items-center justify-center">
      <h1 className="text-6xl">The Future of Finance: The Blockchain</h1>
      <p className="text-2xl mt-2">
        Get the Best Abstracted Insights on Blockchain Technology and Its
        Impacts on Business, Economy, and Life.
      </p>
      <div className="text-2xl mt-6">
        <button className="mr-4 border rounded-lg px-5 py-2 border-color-dark-blue-2 bg-color-dark-blue-2 hover:text-color-dark-blue-2 hover:bg-color-white transition-all duration-200 ease-in">
          Get started
        </button>
        <button className=" border rounded-lg px-5 py-2 text-color-dark-blue-2 border-color-dark-blue-2  hover:bg-color-white transition-all duration-200 ease-in">
          Playground
        </button>
      </div>
    </section>
  );
}
