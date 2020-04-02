/* import React from 'react';


class InfectedTable extends React.Component{
    constructor (props){
        super()
    }


}
 createTable = () => this.state.infectedPeople.map(infected =>
  (<tr className={(infected.live) ? "live" : "dead"}>
    <td>{infected.name}  {infected.last_name}</td>
    <td>{infected.age}</td>
    <td>{(infected.female) ? <span>F</span> : <span>M</span>}</td>
  </tr>))

 

  <table className="table table-sm">

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




render() {
  const { infectedPeople } = this.state;
  return (
    <div className="App">
      <Table data={infectedPeople} />
    </div>
  );
}
}

}
export default infectedTable; */