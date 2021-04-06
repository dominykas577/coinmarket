import React from 'react';
import propTypes from 'prop-types';
import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    
    font-size: 1.5rem;
    color: black;
    background-color: #40;
    padding: 1rem 8rem 1rem 1rem;
    text-align: right;

`;





export default function AccountBalance (props) {

   
        const buttonText = props.showBalance ?  //whether we need to show the balance or not
            'Hide Balance' : 'Show Balance';

        let balance = props.showBalance ?
            <>Balance: ${props.amount}</>
            : null;
        
        //Or, but you need to change some variables
        /*
        let content = null;

        if( this.props.showBalance ){
            content = <>Balance: ${this.props.amount}</>
        }
        */
      

        return (
            <Section>
                {balance}
                <button onClick={props.handleToggleShowBalance}> {buttonText}</button>
            </Section>
        );
    
}



AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}