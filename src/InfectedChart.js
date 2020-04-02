import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'totalInfected por países',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: totalInfected
    }
  ]
};



  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
});

class InfectedChart extends React.Component{
    constructor (props){
        super()
        this.state={
            totalInfected: []
    }

    function getDates(totalInfected){
        totalInfected.sort(fecha);
        let dates = [totalInfected[0].infect_date.slice(0,10)]
        let quantity = [0]
        totalInfected.forEach(infected, i){
            //extraigo fecha
            let currentDate = infected.infect_date.slice(0,10);
            //verifico si la agregue
            if(dates[dates.length-1] != currentDate){
                dates.push(currentDate);
                quantity.push(quantity[quantity.length-1]+1);
            }else{
                quantity[quantity.length-1] ++;
            }
        }
        return {
            dates: dates, //labels
            quantity: quantity //data
        }
    }

    export default InfectedChart