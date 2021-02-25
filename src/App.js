import React from 'react';
import './App.css';
import Coin from './Components/Coin/coin';
import logo from './logo.svg';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"/>
        <h1 className="App-title">
         Coin Marketcap
        </h1>
         </header>
         <table className="cointable">
      <thead className="thead-row">
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead> 
      <tbody>
        
        <Coin name="Bitcoin" ticker="BTC" price = {800}/>
        <Coin name="Ethereum" ticker="ETH" price= {200}/>
        <Coin name="Tether" ticker="USDT" price= {1}/>
        <Coin name="Ripple" ticker="XRP" price= {0.5}/>


      
        <Coin name="Binance Coin" ticker="BNB" price = {800}/>
        <Coin name="Ethereum" ticker="ETH" price= {200}/>
        <Coin name="Tether" ticker="USDT" price= {1}/>
        <Coin name="Ripple" ticker="XRP" price= {0.5}/>
      </tbody>
    </table>
    </div>
  );
}

export default App;

