import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  handleContinueClick: () => void;
  randomStr: string;
  setRandomStr: (randomStr: string) => void;
};

const Verification = ({ handleContinueClick, randomStr, setRandomStr }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < 30; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleVerifyClick = () => {
    const newRandomStr = generateRandomString();
    setRandomStr(newRandomStr);
    setIsVerified(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === randomStr) {
      console.log("Verification successful!");
    } else {
      console.log("Verification failed!");
    }
  };

  return (
    <div>
      <div className="bg-light-blue rounded-[5px] w-full border border-dashed border-light-grey p-[40px] text-dark-orange text-[20px]">
        {randomStr || generateRandomString()}
      </div>
      <div className="text-white text-[18px] font-light mt-[30px] mb-[20px] flex justify-start">
        Verify address on device
      </div>
      <div className="flex flex-col">
        <button
          className="bg-light-blue text-light-grey' p-[10px] mb-[15px] flex flex-row justify-start items-center rounded-[15px] text-[14px] font-light w-full"
          onClick={handleVerifyClick}
        >
          <BsArrowRight className="text-dark-orange mr-[10px] mt-[4px]" />
          Please match the address to be shown in X1 Wallet
        </button>
        {isVerified && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter the random string generated above"
              className="border border-gray-500 text-light-grey bg-dark-purple mt-[10px] rounded-[5px] p-[10px] text-[14px] w-full"
            />
          </form>
        )}
        <div className="flex flex-col mt-[30px] mb-[30px] w-3/12">
          <hr className="text-grey absolute left-0 right-0 m-0" />
          <button
            onClick={handleContinueClick}
            className={`text-[12px] mt-[30px] hover:bg-dark-orange py-[10px] px-[30px] rounded-[5px] border border-grey border-1 ${inputValue === randomStr && isVerified ? "bg-medium-orange text-white" : "opacity-50 cursor-not-allowed"
              }`}
            disabled={!(inputValue === randomStr && isVerified)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
