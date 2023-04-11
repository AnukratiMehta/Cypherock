import React from 'react';

type Props = {
  wallets: string[];
  handleAddWallet: () => void;
};

const Sidebar = ({ wallets, handleAddWallet }: Props) => {

  // Add 'Wallet 1' to the wallets array if it's empty
  if (wallets.length === 0) {
    wallets.push('Wallet 1');
  }

  return (
    <div className="flex flex-col p-[20px] w-[200px] h-[calc(100vh-56px)] pt-[30px] bg-light-blue justify-between items-center sidebar">
    <div className='links flex flex-col'>
      <a href='example.com'>Portfolio</a>
      <a href='example.com'>Wallets</a>
      {wallets.map((wallet, index) => (
        <div key={index} className="mt-[10px] ml-[15px] text-dark-orange font-bold text-[14px]">
          {wallet}
        </div>
      ))}
      <button onClick={handleAddWallet} className='bg-light-blue border-dashed border border-1 border-grey py-[3px] px-[10px] text-grey hover:border-lightest-grey hover:text-lightest-grey cursor-pointer text-[13px] rounded-[20px] ml-[10px] mt-[10px]'>+ add wallet</button>
      <a href='example.com'>Last Transactions</a>
      <a href='example.com'>Tutorials</a>
      <a href='example.com'>Settings</a>
      </div>
      <div className='support'>
        <button className='bg-medium-orange text-lightest-orange rounded-[5px] border-solid border-2 border-medium-orange py-[10px] px-[20px] cursor-pointer hover:bg-dark-orange hover:text-lightest-grey'>Support</button>
      </div>
    </div>
  );
};

export default Sidebar;
