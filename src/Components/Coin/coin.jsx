import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'



const Td = styled.td`
  border: 2px solid #cccccc;
  width: 30vh;
`;

const TdControls = styled(Td)`
  width: 32vw;
`;

const TdName = styled(Td)`
  width: 20vw;

`;


const Button = styled.button`
  font-size: 11px;
  width: 64px;
  margin: 3px 5px 0;
`;







export default function Coin(props) {

    const handleRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.tickerId);
        } 
        
    const handleBuy = (event) => {
                // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(true, props.tickerId);
        } 

    const handleSell = (event) => {
            // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleTransaction(false, props.tickerId);
        } 



        const balance = props.showBalance ?
            <Td>{props.balance}</Td> : <Td>-</Td>;

        return (
            
     
        <tr>
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {balance}
            

            <TdControls>
                <form action="#" method="POST">
                    <Button className="btn btn-info" onClick={handleRefresh}>
                    Refresh
                    </Button>
                    <Button className="btn btn-warning" onClick={handleBuy}>
                    Buy
                    </Button>
                    <Button className="btn btn-danger" onClick={handleSell}>
                    Sell
                    </Button>
                </form>
                 
           </TdControls>
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



