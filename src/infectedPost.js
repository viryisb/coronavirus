import React from 'react'
const axios = require('axios').default;

class InfectedPost extends React.Component{
	constructor(){
		super();
		this.state ={
			//aca pongo los valores default del formulario
			first_name= "",
			last_name= "",
			age= 35,
			female = 0
		}
		this.handleInfectedSubmit = this.handleInfectedSubmit.bind(this) 
		this.handleChange = this.handleChange.bind(this) 
	}

	handleInfectedSubmit(event){
		//en el estado tengo el valor de cada campo
		let post_data= this.state
		axios.post(post_data, url)
	}
	handleChange(event){
		//pasa cuando cambio un valor
		const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    //guardo en el estado el valor de este campo
	    this.setState({
	      	[name]: value    
	    });
	}
	render(){
		return (
		<form onSubmit={handleInfectedSubmit}>
			<input onChange={handleChange}>
			<input onChange={handleChange}>
			<input name="age" type="number" value={this.state.age} onChange={handleChange}>
			<select name="female" value={this.state.female} onChange={handleChange}>
				<option value="1"> Female</option>
				<option value="0"> Male</option>
			</select>
			<button type="submit">Submit</button>
		</form>)
	}
}
export default InfectedPost