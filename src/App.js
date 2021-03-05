import React from 'react';
import './App.css';
import Coin from './Components/Coin/coin';
import logo from './logo.svg';
import AccountBalance from './Components/AccountBalance/AccountBalance.jsx'







class App extends React.Component() {
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
        }
      ]
    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className="App-logo"/>
          <h1 className="App-title">
           Coin Marketcap
          </h1>
           </header>
           <AccountBalance amount={this.state.balance} />
           <table className="cointable">
        <thead className="thead-row">
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead> 
        <tbody>
          <Coin name={this.state.coinData[0].name} 
                ticker={this.state.coinData[0].ticker} 
                price ={this.state.coinData[0].price}/>
          <Coin name={this.state.coinData[1].name} 
                ticker={this.state.coinData[1].ticker} 
                price ={this.state.coinData[1].price}/>
          <Coin name={this.state.coinData[2].name} 
                ticker={this.state.coinData[2].ticker} 
                price ={this.state.coinData[2].price}/>
          <Coin name={this.state.coinData[3].name} 
                ticker={this.state.coinData[3].ticker} 
                price ={this.state.coinData[3].price}/>
        </tbody>
      </table>
      </div>
    );
  }
 
}

export default App;

