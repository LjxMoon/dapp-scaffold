import { FC } from 'react';
export const Step: FC = () => {
  return (
    <div className="px-[40px] py-[55px] flex flex-col justify-center items-center gap-[25px] w-[310px] h-[330px] rounded-[20px] border-8 border-solid border-black bg-[#191919]">
      <div>
        <img src="/img/three.svg" alt="3" />
      </div>
      <div className="text-xl font-semibold text-white text-center">Connect your wallet now to begin</div>
      <div>
        <button className="wallet-adapter-button">
          <img src="/img/dollar.svg" alt="wallet" />Start spraying
        </button>
      </div>
    </div>
  );
};
