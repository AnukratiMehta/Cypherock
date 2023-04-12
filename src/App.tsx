import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [wallets, setWallets] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleAddWallet = () => {
    const walletName = prompt('Enter wallet name');
    if (walletName) {
      setWallets([...wallets, walletName]);
    }
  };

  const handleSelectWallet = (wallet: string) => {
    setSelected(wallet);

    if (wallet) {
      document.querySelector(".hr1")?.classList.add("border-dark-orange");
      document.querySelector(".verification")?.classList.add("text-dark-orange");
    } else {
      document.querySelector(".hr1")?.classList.remove("border-dark-orange");
      document.querySelector(".verification")?.classList.remove("text-dark-orange");
    }

    console.log(`Selected wallet: ${wallet}`);
  };

  return (
    <div className="App flex flex-col bg-dark-blue">
      <Header />
      <div className='flex flex-row'>
        <Sidebar wallets={wallets} handleAddWallet={handleAddWallet} />
        <Main wallets={wallets} handleSelectWallet={handleSelectWallet} />
      </div>
    </div>
  );
};

export default App;
