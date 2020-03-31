import React from 'react';
import './App.css';



class App extends React.Component{
  constructor(props){
    super()
    this.state={
     infected: props.local
    }
  }
 createTable(){
    let infectedTable=[];
    this.state.infected.forEach(()=>{
      let name= infected.first_name;
      let lastName=infected.last_name;
      let age=infected.age;

      infectedTable.push(<tr className={(infected.live)? "live":"dead"}>
        <td>{name + lastName}</td>
      <td>{age}</td>
      <td>{(infected.female)? <span>"F"</span>:<span>"M</span>}</td>
      </tr>)
    }
  );
  return infectedTable;
}


render(){
  return (
    <div className="App">
      <header className="App-header">
        <p> mapa del coronavirus
        </p>
      </header>
      <body>
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

      </body>
    </div>
  );
}}

export default App;
