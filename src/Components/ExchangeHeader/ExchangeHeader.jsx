
import React, { Component } from 'react';
import './ExchangeHeader.css';
import logo from './logo.svg';
import styled from 'styled-components';
import logo1 from './piggy.svg';





const Header = styled.header`
    background-color: #315be3;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: center;
    font-size: 100px;
    color: rgb(255, 255, 255);

`;

const H1 = styled.h1`

    font-size: 2rem;



`;



const Img = styled.img`
    height: 10vmin;
    pointer-events: none;





`








export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                
             
             <Img src={logo} alt="React logo" />
            
        
      
            
            <H1>
             Coin Marketcap
            </H1>
            
            <Img src={logo1} alt="Piggy logo"/>
            
            </Header>
        )
    }
}
