import React from 'react';
import './App.css';
import CoinList from './Components/CoinList/CoinList.jsx';
import ExchangeHeader from './Components/ExchangeHeader/ExchangeHeader.jsx';
import AccountBalance from './Components/AccountBalance/AccountBalance.jsx';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 800
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 200
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.5
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 150
        },
      ]
    }
  }


  render(){
    return (
      <div className="App">

      
            <ExchangeHeader/>
            
           
           <AccountBalance amount={this.state.balance} />
           <CoinList coinData={this.state.coinData}/>
      </div>
    );
  }
 
}

export default App;

