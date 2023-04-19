import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [wallets, setWallets] = useState<string[]>([]);

  const handleAddWallet = () => {
    const walletName = prompt('Enter wallet name');
    if (walletName) {
      setWallets([...wallets, walletName]);
    }
  };

  return (
    <div className="App flex flex-col bg-dark-blue">
      <Header />
      <div className='flex flex-row'>
        <Sidebar wallets={wallets} handleAddWallet={handleAddWallet} />
        <Main wallets={wallets} />
      </div>
    </div>
  );
};

export default App;
