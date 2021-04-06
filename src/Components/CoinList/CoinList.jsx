import React from 'react';
import Coin from '../Coin/coin.jsx'

export default function CoinList (props) {
    
        return (
            <table className="cointable">
            <thead className="thead-row">
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead> 
            <tbody>
              {
                props.coinData.map( ({key, name,ticker,price, balance}) =>
                  <Coin key={key} 
                        handleRefresh={props.handleRefresh}
                        name={name} 
                        ticker={ticker} 
                        balance={balance}
                        showBalance={props.showBalance}
                        price={price}
                        tickerId={key}
                        />
                )
    
              }
              
            </tbody>
          </table>
        )
    
}
