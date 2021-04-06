import React from 'react';
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





export default function Coin(props) {

    const handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.tickerId);
        } 
        
        const balance = props.showBalance ?
            <Td>{props.balance}</Td> : <Td>-</Td>;

        return (
            
     
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {balance}
            

            <Td>
                <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
                 
           </Td>
        </tr>       
        ); 
    
}




/*class component 
export default Coin extends Component {

  handleClick = (event) => {
      // Prevent the default action of submitting the form
      event.preventDefault();
      this.props.handleRefresh(this.props.tickerId);
 

} 


  render(){

      const balance = this.props.showBalance ?
          <Td>{this.props.balance}</Td> : <Td>-</Td>;

      return (
          
   
      <tr>
          <Td>{this.props.name}</Td>
          <Td>{this.props.ticker}</Td>
          <Td>${this.props.price}</Td>
          {balance}
          

          <Td>
              <form action="#" method="POST">
                  <button onClick={this.handleClick}>Refresh</button>
              </form>
               
         </Td>
      </tr>       
      ); 
  }
}
*/
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}



