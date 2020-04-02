 /* import React from 'react';
const axios = require('axios').default;


class Infected extends React.Component{
  constructor(props){
    super()
    this.state={
      infectedPeople: []
  
    }
  }
  async componentDidMount(){
    const response = await axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected");
    this.setState ((state,props)=>{return {infectedPeople:response.data}})


  }
  render(){
    return (<div>
    <infectedTable infectedPeople={this.state.infectedPeople}/>
    <infectedButton />
    <infectedChart/>
    </div>);
    }
  export default Infected  */
//Este es el componente padre que le pega a la api de infected y le pasa en el render por props a infectedTable, infectedButton y InfectedChart