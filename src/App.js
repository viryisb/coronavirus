import React from 'react';
import './App.css';
const axios = require('axios').default;


class App extends React.Component{
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

 /*  createTable=()=>{
    let infectedTable=[];
    this.state.infectedPeople.forEach((infected)=>{
      let name= infected.first_name;
      let lastName=infected.last_name;
      let age=parseInt(infected.age)
      
       infectedTable.push(<tr className={(infected.live)? "live":"dead"}>
        <td>{name}  {lastName}</td>
      <td>{age }</td>
      <td>{ (infected.female)? <span>F</span>:<span>M</span>}</td>
      </tr>)
    }
  );
  return infectedTable; 
} */

//con map 
createTable = () => this.state.infectedPeople.map(infected =>
  (<tr className={(infected.live) ? "live" : "dead"}>
    <td>{infected.name}  {infected.last_name}</td>
    <td>{infected.age}</td>
    <td>{(infected.female) ? <span>F</span> : <span>M</span>}</td>
  </tr>))

downloadInfected(){
let csv= "Name, Age, Gender, Live\n"
this.state.infectedPeople.forEach((infected)=>{
let name= infected.first_name;
      let lastName=infected.last_name;
      let gender= infected.female? "male" : "female"
      let age=parseInt(infected.age);
      let live=!! infected.live;
      csv += name+ '' + lastName + ',' + age + ',' + gender + ',' + live +';';
    })


const element = document.createElement("a");
const file = new Blob([csv], {type: "text/csv"});
element.href = URL.createObjectURL(file);
element.download = "Infected.csv";
document.body.appendChild(element);
element.click();
element.parentNode.removeChild(element);
} 

 
render(){
return (

<div className="App">
  <header className="App-header">
    <p> mapa del coronavirus
    </p>
  </header>
 {<button onClick={() => {this.downloadInfected()}}>descargar</button> } 
  <table class="table table-sm">
  <thead>
    <tr>
     

      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
   {this.createTable()}
  </tbody>
</table>


    </div>
  );
}}


export default App;
