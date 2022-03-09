import React from 'react';
class Expression extends React.Component {
        render() {
          var x=60, y=80
          return (<div>                
                      <h1> Evaluating expression </h1>
                      <h2> {x} {"<"}{y} {":"} {x<y ? 'True' : 'False'} </h2>
                  </div>)
        }
}
export default Expression;
