import React from 'react';
const axios = require('axios').default;

class Countries extends React.Component{
    constructor (props){
        super()
        this.state={
           countries: props.countries
           
         }
    }
    async componentWillMount(){
        const response = await axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries");
        console.log(response);
        this.setState ((state,props)=>{return {countries:response.data.results}}) 
              
        
            }
render(){
    return("acá el return")
}
}

export default Countries

//Este es el componente padre que le pega a la api de países y le pasa por props a contry table y country chart.