// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import { Wallet } from '../../components/Wallet';
import { Tg } from '../../components/Tg';
import { Step } from '../../components/Step';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center gap-[55px]">
        <div>
          <img src="/img/spray.png" className="w-[320px] h-[153px]" alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[15px]">
          <img src="/img/text.png" className="w-[730px] h-[43px]" alt="make it rain spray" />
          <div className="text-[22px] leading-[33px] font-semibold text-white">Join the frenzy, spray tokens, and earn $SPRAY tokens effortlessly with every transfer!</div>
        </div>
        <div className="w-full mt-6 flex items-center justify-around gap-10">
          <Wallet />
          <Tg />
          <Step />
        </div>
        {/* <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div>
              {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
          </div>
          }
          </h4>
        </div> */}
      </div>
    </div>
  );
};
