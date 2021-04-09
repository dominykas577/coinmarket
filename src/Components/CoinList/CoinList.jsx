import React from 'react';
import Coin from '../Coin/coin.jsx';
import styled from 'styled-components';

const Table = styled.table`
  font-size: 1rem;
`;

export default function CoinList (props) {
    
        return (
            <Table className="table table-primary table-bordered">
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
                        handleTransaction={props.handleTransaction}
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
          </Table>
        )
    
}
