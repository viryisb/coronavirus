import React from 'react';


class InfectedTable extends React.Component{
    constructor (props){
        super()
    }


}
const table = ({ data }) => {
    const tableHeader = (<thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
      </tr>
    </thead>);
    const tableData = data.map(infected =>
      (<tr className={(infected.live) ? "live" : "dead"}>
        <td>{infected.name}  {infected.lastName}</td>
        <td>{infected.age}</td>
        <td>{(infected.female) ? <span>F</span> : <span>M</span>}</td>
      </tr>));
    return (<table class="table table-sm">
      {tableHeader}
      <tbody>
        {tableData}
      </tbody>
    </table>)
  }

export default InfectedTable