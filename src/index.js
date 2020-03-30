import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const local=
 [{first_name: "Ciliberto", 
 last_name: "Arias",
         
 live: 1,     
 age: 11,  
'female':false},
{first_name: "Alberto", 
 last_name: "Arias",
          
 live: 1,     
 age: 11,  
'female':false},
{first_name: "Ciliberta", 
 last_name: "Arias",
          
 live: 0,     
 age: 11,  
'female':true},
{first_name: "Ciliberto", 
 last_name: "Arias",
          
 live: 1,     
 age: 11,  
'female':false},
{first_name: "Sandro", 
 last_name: "Deamerica",         
 live: 0,     
 age: 50,  
'female':false}];

function orderAge(p_array_json, p_key) {
  local.sort(function (a, b) {
      return a[p_key] > b[p_key];
   });
 };
 console.log (orderAge(local, "age"))
ReactDOM.render(<App datosLocal={local}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about servic<e workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();