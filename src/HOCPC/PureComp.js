import React from 'react'

class PureComp extends React.PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {
      console.log(this.state);
      return(
    <>
        <h1>Pure Components : {this.state.count}</h1>
        <button onClick={() => {this.setState({count:this.state.count+1})}}>Update State</button>
    </>
      )
  }
}



export default PureComp