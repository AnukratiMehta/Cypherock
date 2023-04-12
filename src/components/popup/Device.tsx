import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from 'react-icons/ai'

import { ICoin } from '../Main'

type Props = {
    wallets: string[];
    onSelectWallet: (wallet: string) => void;
    data: ICoin[];
    handleContinueClick: () => void;
};

const Device = ({ wallets, onSelectWallet, data, handleContinueClick }: Props) => {

    const [showWallets, setShowWallets] = useState(false);
    const [showCoins, setShowCoins] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState('');
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [selectedCard, setSelectedCard] = useState('');

    const handleSelectWallet = (wallet: string) => {
        setSelectedWallet(wallet);
        setShowWallets(false);
        onSelectWallet(wallet);

    };

    const handleSelectCoin = (coin: any) => {
        setSelectedCoin(coin);
        setShowCoins(false);
    };

    const handleSelectCard = (card: string) => {
        setSelectedCard(card);
        setShowCards(false);
    };

    const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4']

    return (
        <div>
            <div className="text-white text-[18px] font-light mt-[30px] mb-[20px] flex justify-start">
                Follow the instructions on the device
            </div>
            <div className="w-full flex justify-center items-center flex-col">
                <button className={`bg-light-blue m-[10px] ${!selectedWallet ? 'text-light-grey' : 'text-purple'} p-[10px] flex flex-row justify-between items-center rounded-[15px] text-[14px] font-light w-full`}
                    onClick={() => setShowWallets(!showWallets)}
                >
                    <div className="flex flex-row">
                        <BsArrowRight className="text-dark-orange mr-[10px] mt-[4px]" />
                        Select the wallet on device
                    </div>
                    {selectedWallet && (
                        <AiOutlineCheck className="text-light-grey mr-[10px] mt-[2px]" />
                    )}                </button>
                {showWallets && (
                    <div className="bg-dark-purple m-[10px] text-light-grey p-[10px] flex flex-col justify-center items-center rounded-[15px] text-[14px] font-light w-9/12">
                        {wallets.map((wallet) => (
                            <div
                                key={wallet}
                                className="cursor-pointer hover:text-dark-orange"
                                onClick={() => handleSelectWallet(wallet)}
                            >
                                {wallet}
                            </div>
                        ))}
                    </div>
                )}
                <button className={`bg-light-blue m-[10px] ${!selectedCoin ? 'text-light-grey' : 'text-purple'} p-[10px] flex flex-row justify-between items-center rounded-[15px] text-[14px] font-light w-full`}
                    onClick={() => setShowCoins(!showCoins)}>
                    <div className="flex flex-row">

                        <BsArrowRight className="text-dark-orange mr-[10px] mt-[4px]" />
                        Select the coin on device
                    </div>
                    {selectedCoin && (
                        <AiOutlineCheck className="text-light-grey mr-[10px] mt-[2px]" />
                    )}
                </button>
                {showCoins && (
                    <div className="bg-dark-purple m-[10px] text-light-grey p-[10px] flex flex-col justify-center items-center rounded-[15px] text-[14px] font-light w-9/12">
                        {data.map((coin) => (
                            <div
                                key={coin.id}
                                className="cursor-pointer hover:text-dark-orange"
                                onClick={() => handleSelectCoin(coin)}
                            >
                                {coin.name} - {coin.btc}
                            </div>
                        ))}
                    </div>
                )}
                <button className={`bg-light-blue m-[10px] ${!selectedCard ? 'text-light-grey' : 'text-purple'} p-[10px] flex flex-row justify-between items-center rounded-[15px] text-[14px] font-light w-full`}
                    onClick={() => setShowCards(!showCards)}>
                    <div className="flex flex-row">
                        <BsArrowRight className="text-dark-orange mr-[10px] mt-[4px]" />
                        Tap 1 card of any 4 cards
                    </div>
                    {selectedCard && (
                        <AiOutlineCheck className="text-light-grey mr-[10px] mt-[2px]" />
                    )}
                </button>
                {showCards && (
                    <div className="bg-dark-purple m-[10px] text-light-grey p-[10px] flex flex-col justify-center items-center rounded-[15px] text-[14px] font-light w-9/12">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className="cursor-pointer hover:text-dark-orange"
                                onClick={() => handleSelectCard(card)}>
                                {card}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex mt-[40px]">
                <hr className="text-grey absolute left-0 right-0 m-0" />
                <button className={`device-btn ml-auto text-[12px] mt-[30px] py-[10px] px-[30px] rounded-[5px] border border-grey border-1 ${(!selectedWallet || !selectedCoin || !selectedCard) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!selectedWallet || !selectedCoin || !selectedCard}
                    style={{
                        backgroundColor: !selectedWallet || !selectedCoin || !selectedCard ? "transparent" : "#785B3C",
                        color: !selectedWallet || !selectedCoin || !selectedCard ? "#616161" : "white"
                    }}
                    onClick={handleContinueClick}
                >
                    Continue
                </button>

            </div>
        </div>
    )
}

export default Device