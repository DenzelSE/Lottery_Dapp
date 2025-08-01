'use client'

import Image from "next/image";
import { useState } from "react";
import Web3 from "web3";
import Sweepstake from "./contract/Sweepstake.json";

export default function Home() {
  const [web3 , setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    if (window.ethereum){
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);

        const networkId = await web3Instance.eth.net.getId();
        
      } catch (error) {
        console.error(error)
      }
    }else{
      console.error("web3 not found")
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}
