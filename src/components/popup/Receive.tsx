import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'

type Props = {
    handleReverifyClick: () => void;
    randomStr: string;
};

const Receive = ({ handleReverifyClick, randomStr }: Props) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(randomStr);
        setIsCopied(true);
    };

    const buttonText = isCopied ? 'Copied' : 'Copy';

    return (
        <div className='flex flex-col justify-center w-full'>
            <div className="text-light-grey font-light text-[12px] mt-[40px] mb-[10px]">
                Coin address
            </div>
            <div className='flex flex-row rounded-[10px] justify-between items-center bg-light-blue w-full py-[10px] px-[20px]'>
                <p className='text-dark-orange text-[16px]'>{randomStr}</p>
                <button className='bg-grey p-[10px] text-[14px] rounded-[10px] font-light text-light-orange' onClick={handleCopyClick}>
                    {buttonText}
                </button>
            </div>
            <div className='text-rich-blue m-[15px] text-[16px] font-light flex flex-row items-center'>
                <AiOutlineInfoCircle className='mx-[10px]' />
                Address verified
            </div>
            <div className='flex justify-center items-center p-[40px]'>
                <button className='text-rich-blue hover:bg-lighter-blue rounded-[5px] py-[10px] px-[40px] border border-1 border-rich-blue bg-transparent font-light text-[18px]' onClick={handleReverifyClick}>
                    Reverify
                </button>
            </div>
            <div className='pb-[50px]'>
                <hr className="text-grey absolute left-0 right-0 m-0" />
            </div>
        </div>
    )
}

export default Receive
