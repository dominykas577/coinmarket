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

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5em
    vertical-align: middle;
    text-align: middle;
`;

const Button = styled.button`
    margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style:  'currency',
    currency: 'USD'
});



export default function AccountBalance (props) {

   
        const buttonText = props.showBalance ? <> { formatter.format(props.amount) }</> : 'Show Balance';
        let content = '\u00A0';  //so that the page does not jump around
        const buttonClass = 'btn ' + (props.showBalance ?  'btn-warning' : 'btn-info' );
        
        if (props.showBalance) {
           content = <>{ formatter.format(props.amount) }</>;
        } 
        

       /* 
       if (props.showBalance) {
            content = <> Balance: {props.amount} </>
        }
        
        */
  
        return (
            <>
            <Balance>{content}</Balance>
            <Section> 
                <BalanceToggleButton 
                    onClick={props.handleToggleShowBalance}
                    className={buttonClass}>  
                    {buttonText}
                </BalanceToggleButton>
                <Button className = "btn btn-success"
                    onClick = {props.handleBrr}>
                    <i className="fas fa-helicopter" color='blue' ></i>
                </Button>
            </Section>
            </>
        );
    
}



AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}
