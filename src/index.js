import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const local=
 [{"id":"1","first_name":"Joshuah","last_name":"Friesen","country":"Portugal","live":true,"age":14338,"infect_date":"2019-12-31T10:08:53.832Z","female":true},{"id":"2","first_name":"Beth","last_name":"Schuster","country":"Norway","live":true,"age":40812,"infect_date":"2019-06-26T21:33:34.269Z","female":false},{"id":"3","first_name":"Albertha","last_name":"Mayer","country":"Western Sahara","live":false,"age":74843,"infect_date":"2019-06-13T22:08:43.509Z","female":false},{"id":"4","first_name":"Domenico","last_name":"Balistreri","country":"Mauritius","live":false,"age":28986,"infect_date":"2019-12-26T16:14:50.884Z","female":false},{"id":"5","first_name":"Brigitte","last_name":"Morar","country":"Saint Barthelemy","live":true,"age":86906,"infect_date":"2020-01-09T14:33:27.527Z","female":true},{"id":"6","first_name":"Reba","last_name":"Hamill","country":"Turkmenistan","live":false,"age":99025,"infect_date":"2020-03-03T17:23:23.078Z","female":true},{"id":"7","first_name":"Joanie","last_name":"Schultz","country":"Vanuatu","live":false,"age":20553,"infect_date":"2020-01-08T09:54:22.431Z","female":false},{"id":"8","first_name":"Jerry","last_name":"Hauck","country":"Guam","live":false,"age":64158,"infect_date":"2020-02-05T03:20:05.878Z","female":false},{"id":"9","first_name":"Anita","last_name":"Powlowski","country":"Guadeloupe","live":false,"age":92849,"infect_date":"2019-04-25T01:56:09.414Z","female":true},{"id":"10","first_name":"Lilla","last_name":"Douglas","country":"Antarctica (the territory South of 60 deg S)","live":false,"age":40928,"infect_date":"2020-02-21T06:25:44.918Z","female":false},{"id":"11","first_name":"Marietta","last_name":"Littel","country":"Cape Verde","live":false,"age":46438,"infect_date":"2019-04-13T11:36:07.254Z","female":true},{"id":"12","first_name":"Kristina","last_name":"Pollich","country":"Monaco","live":true,"age":87359,"infect_date":"2020-01-09T14:27:41.715Z","female":false},{"id":"13","first_name":"Dayana","last_name":"Grady","country":"Greenland","live":false,"age":72963,"infect_date":"2019-07-01T22:30:05.629Z","female":false},{"id":"14","first_name":"Jazlyn","last_name":"Morissette","country":"Reunion","live":false,"age":25418,"infect_date":"2019-11-26T14:25:27.476Z","female":true},{"id":"15","first_name":"Omari","last_name":"Feeney","country":"Iraq","live":true,"age":90548,"infect_date":"2019-06-28T16:54:27.417Z","female":false},{"id":"16","first_name":"Bret","last_name":"Satterfield","country":"Bahamas","live":false,"age":64858,"infect_date":"2019-07-16T18:47:05.835Z","female":true},{"id":"17","first_name":"Alexander","last_name":"Dickinson","country":"Dominica","live":false,"age":75864,"infect_date":"2019-10-14T02:25:57.563Z","female":false},{"id":"18","first_name":"Jaeden","last_name":"Bode","country":"Finland","live":true,"age":16545,"infect_date":"2020-01-12T11:59:55.031Z","female":true},{"id":"19","first_name":"Allene","last_name":"Bosco","country":"Saint Martin","live":true,"age":53683,"infect_date":"2020-02-25T03:18:28.859Z","female":true},{"id":"20","first_name":"Bo","last_name":"Roob","country":"Belize","live":true,"age":92003,"infect_date":"2020-01-10T12:46:58.623Z","female":true},{"id":"21","first_name":"Imani","last_name":"Heller","country":"Uganda","live":false,"age":4278,"infect_date":"2019-10-20T17:16:08.532Z","female":true},{"id":"22","first_name":"Jackeline","last_name":"Kozey","country":"United Arab Emirates","live":true,"age":20866,"infect_date":"2020-01-12T02:19:12.501Z","female":false},{"id":"23","first_name":"Zachariah","last_name":"Prosacco","country":"Bahrain","live":false,"age":77341,"infect_date":"2019-06-14T00:23:06.361Z","female":true},{"id":"24","first_name":"Mona","last_name":"Koelpin","country":"Ghana","live":false,"age":75897,"infect_date":"2019-06-24T04:33:38.863Z","female":true},{"id":"25","first_name":"Eula","last_name":"Rau","country":"Bolivia","live":false,"age":62839,"infect_date":"2020-01-14T17:56:57.534Z","female":false},{"id":"26","first_name":"Ada","last_name":"Bosco","country":"Peru","live":true,"age":88612,"infect_date":"2019-09-04T00:27:28.373Z","female":false},{"id":"27","first_name":"Greyson","last_name":"Hackett","country":"Peru","live":true,"age":61192,"infect_date":"2020-01-09T14:25:29.557Z","female":false},{"id":"28","first_name":"Jamey","last_name":"Wehner","country":"Honduras","live":false,"age":31252,"infect_date":"2019-08-18T19:19:09.149Z","female":true},{"id":"29","first_name":"Garrett","last_name":"Gottlieb","country":"Yemen","live":true,"age":93379,"infect_date":"2020-02-11T23:17:51.024Z","female":true},{"id":"30","first_name":"Thomas","last_name":"Oberbrunner","country":"Gabon","live":false,"age":79600,"infect_date":"2019-10-20T08:37:18.571Z","female":false},{"id":"31","first_name":"Ashtyn","last_name":"Sauer","country":"Saint Pierre and Miquelon","live":true,"age":83012,"infect_date":"2019-10-21T15:55:01.326Z","female":true},{"id":"32","first_name":"Murphy","last_name":"Homenick","country":"Chile","live":false,"age":3601,"infect_date":"2019-11-27T13:08:11.744Z","female":true},{"id":"33","first_name":"Janelle","last_name":"Greenfelder","country":"Panama","live":true,"age":61434,"infect_date":"2019-06-05T20:00:07.863Z","female":true},{"id":"34","first_name":"Aniya","last_name":"Daugherty","country":"Svalbard & Jan Mayen Islands","live":false,"age":32182,"infect_date":"2019-04-13T03:43:54.826Z","female":false},{"id":"35","first_name":"Alanna","last_name":"Mayert","country":"Ukraine","live":true,"age":43231,"infect_date":"2019-10-26T06:50:52.536Z","female":false},{"id":"36","first_name":"Faye","last_name":"Herman","country":"Mexico","live":false,"age":96563,"infect_date":"2019-12-20T06:25:31.290Z","female":false},{"id":"37","first_name":"Christopher","last_name":"Kling","country":"Cook Islands","live":false,"age":21632,"infect_date":"2020-03-26T16:13:20.657Z","female":false},{"id":"38","first_name":"Bo","last_name":"Littel","country":"Thailand","live":false,"age":18665,"infect_date":"2019-05-28T10:57:32.094Z","female":true},{"id":"39","first_name":"Angela","last_name":"Fay","country":"Tajikistan","live":true,"age":33802,"infect_date":"2019-12-24T21:55:35.776Z","female":true},{"id":"40","first_name":"Otho","last_name":"Swift","country":"Jamaica","live":false,"age":63660,"infect_date":"2019-05-09T20:08:45.202Z","female":false},{"id":"41","first_name":"Keith","last_name":"Kunde","country":"Maldives","live":false,"age":85323,"infect_date":"2019-04-01T19:42:37.563Z","female":true},{"id":"42","first_name":"Rory","last_name":"Dare","country":"Tunisia","live":false,"age":63485,"infect_date":"2019-08-13T15:31:43.667Z","female":false},{"id":"43","first_name":"Karine","last_name":"Price","country":"Paraguay","live":false,"age":54394,"infect_date":"2019-07-25T22:25:31.044Z","female":false},{"id":"44","first_name":"Angelita","last_name":"Mayer","country":"Saint Helena","live":true,"age":6961,"infect_date":"2019-12-06T22:31:58.187Z","female":true},{"id":"45","first_name":"Letha","last_name":"Bartoletti","country":"Cocos (Keeling) Islands","live":true,"age":20592,"infect_date":"2019-06-18T16:57:01.396Z","female":true},{"id":"46","first_name":"Braeden","last_name":"Flatley","country":"Guam","live":true,"age":27512,"infect_date":"2020-02-07T23:05:09.377Z","female":true},{"id":"47","first_name":"Adalberto","last_name":"Rice","country":"Saint Barthelemy","live":true,"age":61892,"infect_date":"2019-07-03T01:23:57.494Z","female":false},{"id":"48","first_name":"Efrain","last_name":"Quigley","country":"Uzbekistan","live":false,"age":21771,"infect_date":"2019-04-29T09:21:44.801Z","female":false},{"id":"49","first_name":"Ora","last_name":"Thompson","country":"Fiji","live":false,"age":22251,"infect_date":"2019-11-06T03:25:47.318Z","female":false},{"id":"50","first_name":"Morris","last_name":"Walker","country":"Togo","live":false,"age":50576,"infect_date":"2019-07-01T16:16:47.807Z","female":false},{"id":"51","first_name":"Anne","last_name":"Thompson","country":"England","live":1,"age":"55","infect_date":"2019-06-02T06:30:23.678Z","female":"true"},{"id":"52","first_name":"Barry","last_name":"White","country":"England","live":"0","age":"12452","infect_date":"2019-05-27T22:11:41.719Z","female":"false"},{"id":"53","first_name":"John","last_name":"Snow","country":"Australia","live":1,"age":"543887","infect_date":"2019-08-22T18:01:38.721Z","female":"false"},{"id":"54","first_name":"Jack","last_name":"Lopez","country":"Mexico","live":1,"age":"4578","infect_date":"2020-03-23T12:30:41.660Z","female":false},{"id":"55","first_name":"Mary","last_name":"Thomson","country":"USA","live":"0","age":"542","infect_date":"2019-05-14T12:44:57.295Z","female":true},{"id":"56","first_name":"Mark","last_name":"Anthony Bennet","country":"Ireland","live":false,"age":"412","infect_date":"2019-06-06T09:46:10.299Z","female":false},{"id":"57","first_name":"John","last_name":"Snow Third","country":"Russia","live":true,"age":"362","infect_date":"2019-10-20T11:02:34.872Z","female":false},{"id":"58","first_name":"Lilla","last_name":"Martinez","country":"España","live":true,"age":45,"infect_date":"2019-07-25T13:28:35.599Z","female":true},{"id":"59","first_name":"Gimena","last_name":"Perez","country":"Uruguay","live":false,"age":4201,"infect_date":"2019-08-01T02:59:01.290Z","female":true},{"id":"60","first_name":"Liza","last_name":"Mellino","country":"USA","live":true,"age":85,"infect_date":"2019-09-14T15:28:44.680Z","female":true},{"id":"61","first_name":"Luke","last_name":"Skywalker","country":"Russia","live":false,"age":88,"infect_date":"2019-08-07T06:38:39.674Z","female":false}]
ReactDOM.render(<App datosLocal={local}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about servic<e workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();