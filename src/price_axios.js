import axios from 'axios';


var node = document.querySelector('.js-container');


Promise.all([
  axios.get('https://api.coinpaprika.com/v1/tickers/btc-bitcoin'),
  axios.get('https://api.coinpaprika.com/v1/tickers/eth-ethereum'),
  axios.get('https://api.coinpaprika.com/v1/tickers/usdt-tether'),
  axios.get('https://api.coinpaprika.com/v1/tickers/ada-cardano'),
  axios.get('https://api.coinpaprika.com/v1/tickers/bnb-binance-coin')
]).then(
  (coinResponses) => {
    const coins = coinResponses
      .map( response => `<li>${response.data.name} (${response.data.symbol}): ${response.data.quotes['USD'].price}</li>` )
      .join('');
    node.innerHTML = `<ol>${coins}</ol>`;
    
    
  }
);  
  
