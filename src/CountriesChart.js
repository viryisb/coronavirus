import React from 'react';
import {Line} from 'react-chartjs-2';


class CountriesChart extends React.Component{
    constructor (props){
        super()
        this.state={
           totalInfected: []
    }

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'infectados totales por fecha',
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
      data:totalInfected
    }
  ]
};
function get_countries(infected){
   totalInfected.sort(country);
    let countries = [infected[0].country]
    let quantity = [0]
   totalInfected.forEach(infected, i){
        //extraigo countries
        let countries = infected.country;
        //verifico si la agregue
        if(countries[countries.length-1] != countrie){
            countries.push(countries);
            quantity.push(1);
        }else{
            quantity[quantity.length-1] ++;
        }
    }
    return {
        countries: countries, //labels
        quantity: quantity //data
    }
}

  render() {
    return (
      <div>
        <h2>infectados por fecha</h2>
        <Line data={data} />
      </div>
    );
  }
});



   
    


export default CountriesChart