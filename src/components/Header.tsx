import {AiOutlineClose} from 'react-icons/ai';
import logo from '../logo.svg';


const Header = () => {
  
  const handleCloseClick = () => {
    window.close();
  };
  
  return (
    <div className="flex flex-row items-center text-lightest-grey justify-between p-[16px] bg-dark-blue border-b border-solid border-lighter-blue">
      <img src={logo} alt="Logo" />
      <div className="flex gap-[16px] justify-center items-center">
        <AiOutlineClose className="icon cursor-pointer" onClick={handleCloseClick}/>
      </div>
    </div>
  );
};

export default Header;
