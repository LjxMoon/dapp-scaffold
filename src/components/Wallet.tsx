import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const Wallet: FC = () => {
  const wallet = useWallet();

  return (
    <div className="px-[40px] py-[55px] flex flex-col justify-center items-center gap-[25px] w-[310px] h-[330px] rounded-[20px] border-8 border-solid border-black bg-[#191919]">
      <div>
        <img src="/img/one.svg" alt="1" />
      </div>
      <div className="text-xl font-semibold text-white text-center">Connect your wallet now to begin</div>
      <div>
        <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6">
          {wallet.connected ? null : <><img src="/img/wallet.svg" alt="wallet" />Select Wallet</>}
        </WalletMultiButtonDynamic>
      </div>
    </div>
  );
};
