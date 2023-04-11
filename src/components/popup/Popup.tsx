import React, { useState } from "react";

import { TbCircle1Filled } from "react-icons/tb";
import { TbCircle2Filled } from "react-icons/tb";
import { TbCircle3Filled } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

import Device from "./Device";
import Verification from "./Verification";
import Receive from "./Receive";

import { ICoin } from '../Main'

type Props = {
    wallets: string[];
    onSelectWallet: (wallet: string) => void;
    data: ICoin[];
    onClose: () => void;
};

const Popup = ({ wallets, onSelectWallet, data, onClose }: Props) => {
    const [showVerification, setShowVerification] = useState(false);
    const [showReceive, setShowReceive] = useState(false);
    const [reverifyClicked, setReverifyClicked] = useState(false);
    const [randomStr, setRandomStr] = useState("");


    const handleContinueClick = () => {
        if (showVerification || reverifyClicked) {
            setShowReceive(true);
            setReverifyClicked(false);
        } else {
            setShowVerification(true);
        }
    };

    const handleReverifyClick = () => {
        setReverifyClicked(true);
        setShowVerification(true);
        setShowReceive(false);
    };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-grey rounded-[4px] flex flex-col justify-center items-center p-[20px]">
            <div className="ml-auto" onClick={onClose}>
                <AiOutlineClose className="text-white cursor-pointer" />
            </div>
            <h1 className="text-white text-[22px] font-light">Receive</h1>
            <div className="flex flex-col m-[10px]">
                <div className="flex flex-row text-[28px] justify-center items-center">
                    <TbCircle1Filled className="text-orange" />
                    <hr className="text-light-grey border-1 border-white w-36 hr1" />
                    <TbCircle2Filled className={showVerification ? "text-orange" : "text-light-grey"} />
                    <hr className="text-light-grey border-1 border-white w-36 hr2" />
                    <TbCircle3Filled className={showReceive ? "text-orange" : "text-light-grey"} />
                </div>
                <div className="font-light flex flex-row text-[12px] m-[10px]">
                    <p className="text-orange mr-[130px]">Device</p>
                    <p className={showVerification ? "text-orange mr-[130px] verification" : "text-light-grey mr-[130px] verification"}>Verification</p>
                    <p className={showReceive ? "text-orange" : "text-light-grey"}>Receive</p>
                </div>
            </div>
            <div className="w-full">
                {showReceive ? (
                    <Receive handleReverifyClick={handleReverifyClick} randomStr={randomStr}/>
                ) : showVerification ? (
                    <Verification handleContinueClick={handleContinueClick} randomStr={randomStr}
                    setRandomStr={setRandomStr}/>
                ) : (
                    <Device
                        data={data}
                        wallets={wallets}
                        onSelectWallet={onSelectWallet}
                        handleContinueClick={handleContinueClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Popup;
