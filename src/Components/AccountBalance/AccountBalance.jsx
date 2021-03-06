import React, { Component } from 'react';
import propTypes from 'prop-types';
import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    
    font-size: 2.5rem;
    color: #FFF;
    background-color: #40;
    text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px;
    box-shadow: 2px 2px 7px 1px #1C6EA4;
    padding: 1rem 8rem 1rem 1rem;
    text-align: right;

`;





export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Balance: ${this.props.amount}
            </Section>
        )
    }
}



AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}