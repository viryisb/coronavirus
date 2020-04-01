/* import React from 'react';
const axios = require('axios').default;


class Infected extends React.Component{
    state = {
    constructor (props){
        super()
        this.state = {
        currentPage:props.currentPage,
        infected: [],

       
    }
}


async componentWillMount(){
    const response = await axios.get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected");
    console.log(response);
    this.setState ((state,props)=>{return {infected:response.data.results}}) 
          
    
        }
          
 render {
     return("..."
        )
 }     

export default Infected */
//Este es el componente padre que le pega a la api de infected y le pasa en el render por props a infectedTable, infectedButton y InfectedChart