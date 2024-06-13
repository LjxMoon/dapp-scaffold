import { FC } from 'react';
import Script from 'next/script';

export const TGLogin = () => {
  return <>
  <Script async src='https://telegram.org/js/telegram-widget.js?22' data-telegram-login='<你的机器人用户名>' data-request-access='write' data-size='large' data-radius='10' data-onauth='onTelegramAuth(user)'></Script>
  <div id="my-special-div" onClick={() => {
    window.location.href = 'https://oauth.telegram.org/auth?bot_id=6889929762&origin=https%3A%2F%2Fwww.telegramloveai.com&embed=1&request_access=write&return_to=https%3A%2F%2Fwww.telegramloveai.com%2Fen%2Flogin'
  }}>
    LOGIN
  </div>
  </>;
};

export const Tg: FC = () => {
  return (
    <div className="px-[40px] py-[55px] flex flex-col justify-center items-center gap-[25px] w-[310px] h-[330px] rounded-[20px] border-8 border-solid border-black bg-[#191919]">
      <div>
        <img src="/img/two.svg" alt="2" />
      </div>
      <div className="text-xl font-semibold text-white text-center">Connect your wallet now to begin</div>
      <div>
        <button className="wallet-adapter-button">
          <img src="/img/tg.svg" alt="wallet" />Link Telegram
        </button>
      </div>
    </div>
  );
};
