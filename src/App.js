import React, { useState, useEffect } from 'react';
import './App.css';
import CoinList from './Components/CoinList/CoinList.jsx';
import ExchangeHeader from './Components/ExchangeHeader/ExchangeHeader.jsx';
import AccountBalance from './Components/AccountBalance/AccountBalance.jsx';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';




const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App (props) { 
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);


const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: formatPrice(coin.quotes.USD.price),
           };
          });   
          // retrieve the prices
          setCoinData(coinPriceData);
        };




      useEffect( function() {
        if (coinData.length === 0) {
            componentDidMount();       
           }
      });



  const handleToggleShowBalance = () => {
      setShowBalance(oldValue => !oldValue);
     }


  const handleTransaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1: -1;
    const newCoinData = coinData.map( function(values){
      let newValues = {...values};
      if ( valueChangeId  === values.key){
        newValues.balance += balanceChange;
        setBalance( oldBalance => oldBalance - balanceChange * newValues.price );
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }
  

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function(values){  //map method to transform each and every value
      let newValues = {...values};
      if(valueChangeId === values.key) {
       newValues.price = newPrice;
      }
      return newValues;
     });
      
      setCoinData(newCoinData);
    };
      

    const handleBrr = () => {
      setBalance( oldBalance => oldBalance + 1200 );
    }

 
    return (
      <div className="App">
            <ExchangeHeader/>
           <AccountBalance 
              amount={balance}
              showBalance={showBalance}
              handleBrr={handleBrr}
              handleToggleShowBalance={handleToggleShowBalance}/>
           <CoinList 
              coinData={coinData}
              showBalance={showBalance}
              handleRefresh={handleRefresh}
              handleTransaction={handleTransaction}
              />
      </div>
    );
  }
 


export default App;

