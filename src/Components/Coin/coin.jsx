import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'



/*class MyComponent extends React.Component {
    render() {
      // Attach the passed-in className to the DOM node
      return <div className={this.props.className} />
    }
  }
*/



//const "coin-row" = styled.coin-row`

const Td = styled.td`
  border: 2px solid #cccccc;
  width: 30vh;
`;





export default class Coin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price 
        }
        this.handleClick = this.handleClick.bind(this);

    }
/*
    componentDidMount(){
        const callback =()=>{
            const randomPercentage = 0.995 + Math.random() * 0.01;
            this.setState( function(oldState) {
                return{
                  price: oldState.price * randomPercentage
                };
        });
    }
    setInterval( callback, 1000 );
}
*/

handleClick(event) {
    // Prevent the default action of submitting the form
    event.preventDefault();

    const randomPercentage = 0.995 + Math.random() * 0.01;
            this.setState( function(oldState) {
                return{
                  price: oldState.price * randomPercentage
                };
        });


}

    render() {
        return (
            
     
        <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>${this.props.price}</Td>
            <Td>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>
                 
           </Td>
        </tr>       
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}



