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
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function({ticker, name, price}){ 

      
      let newPrice = price;
      if(valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }

    });
    this.setState({ coinData: newCoinData});

  }

  render(){
    return (
      <div className="App">
            <ExchangeHeader/>
           <AccountBalance amount={this.state.balance} />
           <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </div>
    );
  }
 
}

export default App;

