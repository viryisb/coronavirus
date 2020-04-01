import React from 'react';
const axios = require('axios').default;

class Countries extends React.Component{
    constructor (props){
        super()
        this.state={
           countries:[]
           
         }
    }
    async componentDidMount(){
        const response = await axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries");
        this.setState ((state,props)=>{return {countries:response.data}})
    
    
      }
render(){
    return("..")
}
}

export default Countries

//Este es el componente padre que le pega a la api de países y le pasa por props a contry table y country chart.