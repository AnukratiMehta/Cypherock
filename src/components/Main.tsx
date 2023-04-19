import React, { useState } from 'react';

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCircleHalf } from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import { BsArrowDownLeft } from 'react-icons/bs'
import { BsArrowUpRight } from 'react-icons/bs'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { SiBinance } from 'react-icons/si'
import { FaEthereum } from 'react-icons/fa'

import Popup from './popup/Popup';

// Define an interface for the coin data
export interface ICoin {
    name: string;
    btc: number;
    usd: number;
    icon: React.ReactNode;
    color: string;
    id: number
}

type Props = {
    wallets: string[];
};

const Main = ({ wallets }: Props) => {
    // Define the initial data and sorting option
    const [data, setData] = useState<ICoin[]>([
        { id: 1, name: 'Bitcoin', btc: 0.002900, usd: 0.528, icon: <BsCurrencyBitcoin />, color: 'dark-orange' },
        { id: 2, name: 'Ethereum', btc: 0.055600, usd: 0.268, icon: <FaEthereum />, color: 'light-grey' },
        { id: 3, name: 'Binance Coin', btc: 0.8025600, usd: 0.526, icon: <SiBinance />, color: 'light-orange' },
        { id: 4, name: 'Bitcoin', btc: 0.1025600, usd: 0.568, icon: <BsCurrencyBitcoin />, color: 'dark-orange' },
        { id: 5, name: 'Ethereum', btc: 0.003600, usd: 0.5268, icon: <FaEthereum />, color: 'light-grey' },
    ]);
    const [sortOption, setSortOption] = useState<string>('amount-high-low');

    const [showPopup, setShowPopup] = useState(false);

    const onClose = () => {
        setShowPopup(false);
    };

    // Define a function to handle the sorting option change
    const handleSortOptionChange = (option: string) => {
        setSortOption(option);
        switch (option) {
            case 'amount-high-low':
                setData([...data.sort((a, b) => b.usd - a.usd)]);
                break;
            case 'amount-low-high':
                setData([...data.sort((a, b) => a.usd - b.usd)]);
                break;
            case 'a-z':
                setData([...data.sort((a, b) => a.name.localeCompare(b.name))]);
                break;
            case 'z-a':
                setData([...data.sort((a, b) => b.name.localeCompare(a.name))]);
                break;
            default:
                break;
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='flex sm:flex-row sm:justify-end flex-col justify-center items-center pt-[20px]'>
                <div className='flex flex-row justify-center items-center sm:mr-[50px]'>
                    <AiOutlineCheckCircle className='text-rich-blue m-[5px]' />
                    <p className='text-lightest-orange m-[5px]'>Synchronized</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <div className='bg-blue flex justify-center items-center p-[8px] m-[10px] rounded-[3px]'><BsCircleHalf className='text-light-grey' /></div>
                    <div className='bg-blue flex justify-center items-center p-[8px] m-[10px] sm:mr-[40px] rounded-[3px]'><BiLockAlt className='text-lightest-orange' /></div>
                </div>
            </div>
            <div className='flex sm:flex-row sm:justify-between flex-col justify-center items-center'>
                <h1 className='text-dark-orange text-[20px] sm:m-[40px] m-[20px] font-bold'>Wallet 1</h1>
                <button className='bg-blue text-light-grey px-[25px] py-[5px] m-[20px] rounded-[5px] text-[14px] sm:m-[40px]'>+ Add Coin</button>
            </div>
            <div className='flex md:flex-row sm:justify-between flex-col justify-center items-center border m-[40px] px-[30px] py-[15px] border-1 border-solid border-lighter-blue'>
                <p className='text-[12px] text-light-grey'>
                    Total Coins - {data.length}
                </p>
                <div>
                    <select
                        className='text-light-grey bg-dark-blue text-[12px] p-[5px] sm:mt-[0] mt-[5px] select-element'
                        value={sortOption}
                        onChange={(e) => handleSortOptionChange(e.target.value)}
                    >
                        <option value='amount-high-low'>Amount&nbsp;&nbsp;High - Low</option>
                        <option value='amount-low-high'>Amount&nbsp;&nbsp;Low - High</option>
                        <option value='a-z'>Arrange&nbsp;&nbsp;A-Z</option>
                        <option value='z-a'>Arrange&nbsp;&nbsp;Z-A</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                {data.map((coin) => (
                    <div key={coin.id} className='grid lg:grid-cols-4 lg:grid-rows-none sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1 gap-4 items-center bg-light-blue mx-[40px] my-[20px] p-[30px] text-light-grey text-[16px] font-bold'>
                        <h2 className='pl-[20px] flex flex-row items-center'>
                            <div className={`bg-slate rounded-full p-[10px] mr-[8px] text-[18px] text-${coin.color}`}>{coin.icon}</div>
                            {coin.name}
                        </h2>
                        <p>BTC {coin.btc}</p>
                        <p>USD {coin.usd}</p>
                        <div className='flex sm:flex-row text-[18px]'>
                            <button className='text-purple mr-[10px] flex flex-row justify-center items-center' onClick={() => setShowPopup(true)}>
                                <BsArrowDownLeft className='text-[14px] sm:mx-[8px] mx-[4px]' />
                                Receive
                            </button>
                            {showPopup ? <Popup data={data} wallets={wallets} onClose={onClose} /> : null}
                            <p className='font-thin text-grey'>|</p>
                            <button className='text-lightest-orange sm:ml-[10px] flex flex-row justify-center items-center'>
                                <BsArrowUpRight className='text-[14px] sm:mx-[8px] mx-[4px]' />
                                Send
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
