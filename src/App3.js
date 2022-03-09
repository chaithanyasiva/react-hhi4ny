import React from 'react';

class App3 extends React.Component {
  render() {
          let highlight = {
                  color: 'green',backgroundColor:'grey'
           }
          return(<React.Fragment>
                 <h1 style={highlight}>Welcome to React</h1> 
          </React.Fragment>)
  }
}
export default App3;
